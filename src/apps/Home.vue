<template>
  <i-schema
    :init-schema="initSchema"
    :updatable="false"
    :tokens="tokens"
    ref="homeFrameRef"
    classname="i-renderer-website-schema__container"
    @update:lang="updateLang"
  />
</template>

<script>
import {defineComponent, getCurrentInstance, onBeforeMount, onMounted, ref} from 'vue';
import {loadZh, loadEn, loadJa} from '../utils/lib';
import zhFrame from '../data/homeFrame';
import uaManager from '../utils/ua';

export default defineComponent({
  name: 'Application',
  setup() {
    const {proxy} = getCurrentInstance();
    const homeFrameRef = ref();
    const tokens = ref({});
    const notice = () => {
      proxy.$message.success('切换到PC端体验更加哦！');
    };
    const updateLang = (val) => {
      let promise;
      if (val === 'zh') {
        promise = [
          import('../local/zh'),
          import('../data/homeFrame'),
          import('element-plus/es/locale/lang/zh-cn'),
          loadZh(),
        ];
      } else if (val === 'en') {
        promise = [
          import('../local/en'),
          import('../data/homeFrame.en'),
          import('element-plus/es/locale/lang/en'),
          loadEn(),
        ];
      } else if (val === 'ja') {
        promise = [
          import('../local/ja'),
          import('../data/homeFrame.ja'),
          import('element-plus/es/locale/lang/ja'),
          loadJa(),
        ];
      }
      Promise
        .all(promise)
        .then(([local, frameSchema, el, renderer]) => {
          homeFrameRef.value?.updatePageSchema(frameSchema.default, true);
          tokens.value = {
            ...el.default,
            ...local.default,
            ...renderer.default,
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
      const color = ['primary', 'success', 'danger'][Math.floor(Math.random() * 3)];
      const root = document.documentElement.style;
      root.setProperty('--i-renderer-home-ball-color', `var(--el-color-${color}-light-3)`);
      root.setProperty('--i-renderer-home-particle-color', `var(--el-color-${color}-light-7)`);
      root.setProperty('--i-renderer-home-text-color', `var(--el-color-${color})`);
      const isMobile = uaManager
        .setNotice(notice)
        .setWidth(window.innerHeight)
        .detectUa();
      if (isMobile) {
        uaManager.toMobile();
      } else {
        uaManager.toPc();
      }
    });
    return {
      initSchema: zhFrame,
      updateLang,
      homeFrameRef,
      tokens,
    };
  }
});
</script>
