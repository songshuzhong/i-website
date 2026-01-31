<template>
  <i-schema
    ref="homeFrameRef"
    :init-schema="frameSchema"
    :updatable="false"
    :tokens="tokens"
    classname="i-renderer-website-schema__container"
    @update:lang="updateLang"
  />
</template>

<script>
import {defineComponent, getCurrentInstance, onBeforeMount, onMounted, ref} from 'vue';
import {loadZh, loadEn} from '../utils/lib';
import zhFrame from '../data/homeFrame';
import enFrame from '../data/homeFrame.en';
import uaManager from '../utils/ua';

export default defineComponent({
  name: 'Application',
  setup() {
    const {proxy} = getCurrentInstance();
    const homeFrameRef = ref();
    const frameSchema = ref(proxy.$iRenderConfig.language === 'zh'? zhFrame: enFrame);
    const tokens = ref({});
    const notice = () => {
      proxy.$message.success('切换到PC端体验更加哦！');
    };
    const updateLang = (val) => {
      let promise;
      if (val === 'zh') {
        promise = [import('element-plus/es/locale/lang/zh-cn'), loadZh()];
      } else if (val === 'en') {
        promise = [import('element-plus/es/locale/lang/en'), loadEn()];
      }
      Promise
        .all(promise)
        .then(([el, renderer]) => {
          homeFrameRef.value?.updatePageSchema(proxy.$iRenderConfig.language === 'zh'? zhFrame: enFrame, true);
          tokens.value = {
            ...el.default,
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
      updateLang,
      homeFrameRef,
      frameSchema,
      tokens,
    };
  }
});
</script>
