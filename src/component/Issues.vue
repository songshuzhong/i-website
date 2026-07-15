<template>
  <div id="comments">
    <el-skeleton v-if="status === 'loading'" :rows="6" animated />
    <el-result
      v-if="status !=='mounted' && status !== 'loading'"
      title="留言板创建失败"
      icon="error"
      :sub-title="status"
    />
  </div>
</template>
<script>
import {defineComponent, onMounted, ref, getCurrentInstance} from 'vue';
export default defineComponent({
  name: 'Issues',
  props: {
    initData: Object,
    action: Function,
    repo: {
      type: String,
      required: false,
      default: 'songshuzhong/i-comments'
    }
  },
  setup(props) {
    const status = ref('loading');
    onMounted(() => {
      const {proxy} = getCurrentInstance();
      const comments = document.getElementById('comments');
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://utteranc.es/client.js';
      script.setAttribute('repo', props.repo);
      script.setAttribute('issue-term', 1);
      script.setAttribute('theme', `github-${proxy.$env.isDarkness? 'dark': 'light'}`);
      script.setAttribute('crossorigin', 'anonymous');
      script.setAttribute('async', 'true');
      script.onload = script.onreadystatechange = function() {
        if (
          !script.readyState ||
          script.readyState === 'loaded' ||
          script.readyState === 'complete'
        ) {
          script.onload = script.onreadystatechange = null;
          const frame = document.querySelectorAll('.utterances-frame')[0];
          frame.onload = frame.onreadystatechange = function() {
            status.value = 'mounted';
          };
          frame.addEventListener('error', (e) => {
            status.value = e.message;
          });
        }
        script.onerror = function(e) {
          status.value = e.message;
        };
      };
      comments.appendChild(script);
    });
    return {
      status
    };
  }
});
</script>
