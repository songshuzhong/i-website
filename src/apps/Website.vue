<template>
  <i-schema
    :init-schema="frameSchema"
    :updatable="false"
    :tokens="tokens"
    @update:lang="updateLang"
  />
</template>

<script>
import {defineComponent, onBeforeMount, onMounted, getCurrentInstance, ref} from 'vue';
import {loadEditor, loadEn, loadZh} from '../utils/lib.js';
import frameSchema from '../data/websiteFrame.js';

export default defineComponent({
  name: 'Application',
  setup() {
    const { proxy } = getCurrentInstance();
    const tokens = ref({});
    const updateLang = (val) => {
      let promise;
      if (val === 'zh') {
        promise = [import('element-plus/es/locale/lang/zh-cn'), loadZh()];
      } else if (val === 'en') {
        promise = [import('element-plus/es/locale/lang/en'), loadEn()];
      }
      Promise.all(promise)
        .then(([el, renderer]) => {
          tokens.value = {
            ...el.default,
            ...renderer.default,
          };
        })
        .catch((e) => {
          console.error(e);
        });
    };
    const appendAssets = () => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = `${process.env.VUE_APP_API_BASE}/js/vue3-sfc-loader.js`;
        script.onload = script.onreadystatechange = function() {
          if (
            !script.readyState ||
            script.readyState === 'loaded' ||
            script.readyState === 'complete'
          ) {
            script.onload = script.onreadystatechange = null;
            resolve();
          } else {
            reject({
              message: '脚本『vue3-sfc-loader』加载失败'
            });
          }
        };
        script.onerror = function() {
          reject({
            message: '脚本『vue3-sfc-loader』加载失败'
          });
        };
        const timer = setTimeout(() => {
          document.head.appendChild(script);
          clearTimeout(timer);
        }, 230);
      });
    };
    onBeforeMount(() => {
      const isMobile = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);
      if (isMobile) {
        proxy.$dispatchAction(
          proxy,
          {
            renderer: 'action',
            actionType: 'trigger',
            triggered: 'IWebsiteNav'
          },
          {
            renderer: 'action',
            actionType: 'trigger',
            triggered: 'IWebsiteNav'
          },
          {},
          () => {},
        );
      }
      isMobile && proxy.$message.success('切换到PC端体验更加哦！');
      updateLang(proxy.$iRenderConfig.language);
    });
    onMounted(() => {
      const timer = setTimeout(() => {
        loadEditor()
          .then(res => {
            const {Editor} = res;
            proxy.$.appContext.components['i-editor'] = Editor;
          }).catch(e => {
            console.error(e);
          }).finally(() => {
            clearTimeout(timer);
          });
        appendAssets();
        clearTimeout(timer);
      }, 2000);
    });

    return {
      updateLang,
      tokens,
      frameSchema: {
        renderer: 'admin',
        ...frameSchema
      }
    };
  }
});
</script>
