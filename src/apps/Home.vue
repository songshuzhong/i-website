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
