<template>
  <div >
    <i-component
      v-if="show"
      renderer="form"
      ref="form"
      track="/code"
      size="small"
      :init-data="formData"
      :attributes="{
        labelPosition: 'top',
        controls,
        hideRequiredAsterisk: true,
      }"
    />
  </div>
</template>

<script>
import {defineComponent, ref, getCurrentInstance, onMounted} from 'vue';

export default defineComponent({
  name: 'Code',
  setup() {
    const {proxy} = getCurrentInstance();
    const show = ref(false);
    const formData = ref({code: ''});
    const controls = ref([]);
    onMounted(() => {
      const height = window.innerHeight - 130;
      controls.value = [{
        renderer: 'monaco',
        label: '',
        name: 'code',
        language: 'json',
        options: {
          height
        }
      }];
      formData.value.code = JSON.stringify(proxy.$.appContext.$IRenderer.pageSchema);
      show.value = true;
    });
    return {
      show,
      formData,
      controls
    };
  }
});
</script>