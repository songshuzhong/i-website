<template>
  <i-schema
    :init-schema="frameSchema"
    :updatable="false"
    classname="i-renderer-website-schema__container"
  />
</template>

<script>
import {defineComponent, getCurrentInstance, onMounted} from 'vue';
import frameSchema from '../data/homeFrame.js';
import uaManager from '../utils/ua';

export default defineComponent({
  name: 'Application',
  setup() {
    const {proxy} = getCurrentInstance();
    const notice = () => {
      proxy.$message.success('切换到PC端体验更加哦！');
    };
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
      frameSchema
    };
  }
});
</script>
