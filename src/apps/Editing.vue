<template>
  <component
    :is="isEditorReady? 'el-config-provider': 'div'"
    :locale="tokens"
  >
    <component v-bind:is="'i-editor'" :is-json="false" :nimble="true"/>
  </component>
</template>

<script>
import {defineComponent, onBeforeMount, getCurrentInstance, onMounted, ref} from 'vue';
import {loadEditor, loadEditorEn, loadEditorJa, loadEditorZh, loadEn, loadJa, loadZh} from '../utils/lib';

export default defineComponent({
  name: 'ToEditor',
  setup() {
    const {proxy} = getCurrentInstance();
    const isEditorReady = ref(false);
    const tokens = ref({});
    const updateLang = (val) => {
      let promise;
      if (val === 'zh') {
        promise = [import('element-plus/es/locale/lang/zh-cn'), loadZh(), loadEditorZh()];
      } else if (val === 'en') {
        promise = [import('element-plus/es/locale/lang/en'), loadEn(), loadEditorEn()];
      } else if (val === 'ja') {
        promise = [import('element-plus/es/locale/lang/ja'), loadJa(), loadEditorJa()];
      }
      Promise.all(promise)
        .then(([el, renderer, editor]) => {
          tokens.value = {
            ...el.default,
            ...renderer.default,
            ...editor.default,
          };
        })
        .catch((e) => {
          console.error(e);
        });
    };
    onBeforeMount(() => {
      updateLang(proxy.$iRenderConfig.language);
      proxy.$.appContext.$IRenderer = {
        pageInfo: {
          assets: []
        },
        scripts: {},
        links: [],
        pageSchema: {
          renderer: 'page',
          body: []
        }
      };
    });
    onMounted(() => {
      loadEditor().then(res => {
        const {Editor} = res;
        proxy.$.appContext.components['i-editor'] = Editor;
        isEditorReady.value = true;
      }).catch(e => {
        console.error(e);
      });
    });
    return {
      tokens,
      updateLang,
      isEditorReady
    };
  }
});
</script>
