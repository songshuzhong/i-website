<template>
  <div class="i-home__playground">
    <el-divider>左侧编辑 | 右侧预览</el-divider>
    <div class="i-home__playground__body">
      <el-splitter>
        <el-splitter-panel collapsible>
          <div v-if="!isEditorReady" v-loading="!isEditorReady" class="i-editor__container" />
          <component
            v-if="isTokenReady && isEditorReady"
            :is="'el-config-provider'"
            :locale="tokens"
          >
            <component
              v-bind:is="'i-editor'"
              :is-json="false"
            />
          </component>
        </el-splitter-panel>
        <el-splitter-panel collapsible>
          <i-schema
            v-if="isTokenReady"
            :init-schema="initSchema"
            :updatable="false"
            :tokens="tokens"
            ref="homeFrameRef"
            classname="i-home__playground__preview"
            @update:lang="updateLang"
          />
        </el-splitter-panel>
      </el-splitter>
    </div>
  </div>
</template>

<script>
import {defineComponent, getCurrentInstance, onBeforeMount, onMounted, ref} from 'vue';
import PLAYGROUND_SCHEMA from '../data/demo';
import {loadEditor, loadEditorEn, loadEditorJa, loadEditorZh, loadEn, loadJa, loadZh} from '../utils/lib';
import uaManager from '../utils/ua';

const DEFAULT_SCHEMA = PLAYGROUND_SCHEMA;
export default defineComponent({
  name: 'Playground',
  setup() {
    const {proxy} = getCurrentInstance();
    const isEditorReady = ref(false);
    const isTokenReady = ref(false);
    const tokens = ref({});
    const homeFrameRef = ref();
    let notice;
    const updateLang = (val) => {
      let promise;
      if (val === 'zh') {
        promise = [
          import('element-plus/es/locale/lang/zh-cn'),
          loadZh(),
          loadEditorZh(),
        ];
      } else if (val === 'en') {
        promise = [
          import('element-plus/es/locale/lang/en'),
          loadEn(),
          loadEditorEn(),
        ];
      } else if (val === 'ja') {
        promise = [
          import('element-plus/es/locale/lang/ja'),
          loadJa(),
          loadEditorJa(),
        ];
      }
      Promise
        .all(promise)
        .then(([el, renderer, editor]) => {
          tokens.value = {
            ...el.default,
            ...renderer.default,
            ...editor.default,
          };
          isTokenReady.value = true;
        })
        .catch((e) => {
          console.error(e);
        });
    };
    onBeforeMount(() => {
      proxy.$page.pageSchema = DEFAULT_SCHEMA;
      uaManager.setWidth(window.innerHeight);
      notice = proxy.$message.success('编辑器加载中，请稍等...');
    });
    onMounted(() => {
      updateLang(proxy.$env.language);
      loadEditor().then(res => {
        const {Editor} = res;
        proxy.$.appContext.components['i-editor'] = Editor;
        isEditorReady.value = true;
        notice && notice.close();
      }).catch(e => {
        console.error(e);
      });
    });
    return {
      initSchema: DEFAULT_SCHEMA,
      updateLang,
      tokens,
      homeFrameRef,
      isTokenReady,
      isEditorReady
    };
  }
});
</script>
