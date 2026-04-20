<template>
  <i-schema
    :init-schema="loginSchema"
    :updatable="false"
    :tokens="tokens"
    @update:lang="updateLang"
  />
</template>

<script>
import {defineComponent, getCurrentInstance, onBeforeMount, onMounted, ref} from 'vue';
import loginSchema from '../data/login.js';
import {loadEditorEn, loadEditorJa, loadEditorZh, loadEn, loadJa, loadZh} from '@/utils/lib';

export default defineComponent({
  name: 'Login',
  setup() {
    const { proxy } = getCurrentInstance();
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
    });
    onMounted(() => {
      document.title = '欢迎使用百搭云平台';
      const color = ['primary', 'success', 'danger'][Math.floor(Math.random() * 3)];
      const root = document.documentElement.style;
      root.setProperty('--i-renderer-home-ball-color', `var(--el-color-${color}-light-3)`);
      root.setProperty('--i-renderer-home-particle-color', `var(--el-color-${color}-light-7)`);
      root.setProperty('--i-renderer-home-text-color', `var(--el-color-${color})`);
    });

    return {
      updateLang,
      tokens,
      loginSchema
    };
  }
});
</script>
