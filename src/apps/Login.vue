<template>
  <i-schema
    :init-schema="loginSchema"
    :updatable="false"
  />
</template>

<script>
import {defineComponent, onMounted} from 'vue';
import loginSchema from '../data/login.js';

export default defineComponent({
  name: 'Login',
  setup() {
    onMounted(() => {
      document.title = '欢迎使用百搭云平台';
      const color = ['primary', 'success', 'danger'][Math.floor(Math.random() * 3)];
      const root = document.documentElement.style;
      root.setProperty('--i-renderer-home-ball-color', `var(--el-color-${color}-light-3)`);
      root.setProperty('--i-renderer-home-particle-color', `var(--el-color-${color}-light-7)`);
      root.setProperty('--i-renderer-home-text-color', `var(--el-color-${color})`);
    });

    return {
      loginSchema
    };
  }
});
</script>
