<template>
  <i-icon class="i-action" icon="Iphone" color="inherit" @click="onClick" />
</template>

<script>
import {defineComponent, getCurrentInstance} from 'vue';
export default defineComponent({
  name: 'ToMobile',
  setup() {
    const {proxy} = getCurrentInstance();
    const onClick = () => {
      let pageId = '8f287653-1059-414b-9485-dffbfe91d2b0';
      if (proxy.$page.pageInfo && proxy.$page.pageInfo.pageId) {
        pageId = proxy.$page.pageInfo.pageId;
      }
      proxy.$dispatchAction(
        proxy,
        {
          renderer: 'action',
          actionType: 'url',
          url: `${process.env.VUE_APP_PAGE_MOBILE}?isFrame=true&pageId=${pageId}`
        },
        {},
        () => {},
      );
    };
    return {
      onClick
    };
  }
});
</script>
