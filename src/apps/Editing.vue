<template>
  <i-editor
    :editable="true"
    :nimble="true"
    :is-json="false"
  />
</template>

<script>
import {defineComponent, getCurrentInstance, onBeforeMount} from 'vue';
import {Editor} from '../../../i-renderer/packages/canvas/index';

export default defineComponent({
  name: 'ToEditor',
  components: {
    IEditor: Editor
  },
  setup() {
    const {proxy} = getCurrentInstance();
    onBeforeMount(() => {
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
    return {
    };
  }
});
</script>
