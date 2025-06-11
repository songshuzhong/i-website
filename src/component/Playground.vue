<template>
  <div class="i-home__playground">
    <el-divider>左侧编辑 | 右侧预览</el-divider>
    <div class="i-home__playground__body">
      <el-splitter>
        <el-splitter-panel collapsible>
          <div v-if="!isEditorReady" v-loading="!isEditorReady" class="i-editor__container" />
          <component v-else v-bind:is="'i-editor'" :is-json="false"/>
        </el-splitter-panel>
        <el-splitter-panel collapsible>
          <i-schema
            :init-schema="initSchema"
            :updatable="false"
            track="/editor"
            classname="i-home__playground__preview"
          />
        </el-splitter-panel>
      </el-splitter>
    </div>
  </div>
</template>

<script>
import {defineComponent, getCurrentInstance, onBeforeMount, onMounted, ref} from 'vue';
import PLAYGROUND_SCHEMA from '../data/demo';
import uaManager from '../utils/ua';
import {loadEditor} from '../utils/lib';

const DEFAULT_SCHEMA = PLAYGROUND_SCHEMA;
export default defineComponent({
  name: 'Playground',
  setup() {
    const {proxy} = getCurrentInstance();
    const isEditorReady = ref(false);
    let notice;
    onBeforeMount(() => {
      proxy.$.appContext.$IRenderer = {
        pageSchema: DEFAULT_SCHEMA
      };
      uaManager.setWidth(window.innerHeight);
      notice = proxy.$message.success('编辑器加载中，请稍等...');
    });
    onMounted(() => {
      loadEditor().then(res => {
        const {Editor} = res;
        proxy.$.appContext.components[Editor.name] = Editor;
        isEditorReady.value = true;
        notice && notice.close();
      }).catch(e => {
        console.error(e);
      });
    });
    return {
      initSchema: DEFAULT_SCHEMA,
      isEditorReady
    };
  }
});
</script>
