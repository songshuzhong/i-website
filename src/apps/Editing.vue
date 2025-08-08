<template>
  <div v-if="!isEditorReady" v-loading="!isEditorReady" class="i-editor__container" />
  <component v-else v-bind:is="'i-editor'" :is-json="false" :nimble="true"/>
</template>

<script>
import {defineComponent, onBeforeMount, getCurrentInstance, onMounted, ref} from 'vue';
import {loadEditor} from '../utils/lib';

export default defineComponent({
  name: 'ToEditor',
  setup() {
    const {proxy} = getCurrentInstance();
    const isEditorReady = ref(false);
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
      isEditorReady
    };
  }
});
</script>
