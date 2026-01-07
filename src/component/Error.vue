<template>
  <el-skeleton
    :loading="loading"
    :rows="10"
    :animated="true"
  >
    <template #template>
      <el-skeleton-item
          variant="image"
          style="width: 240px; height: 240px; margin-bottom: 20px;"
      />
      <el-skeleton-item variant="h3" style="width: 20%" />
      <el-skeleton-item variant="h3" style="width: 40%" />
      <el-skeleton-item variant="h3" style="width: 60%" />
      <el-skeleton-item variant="h3" style="width: 80%" />
      <div class="i-schema__container__skeleton">
        <el-skeleton-item variant="h3" style="margin-right: 16px;" />
        <el-skeleton-item variant="h3" style="width: 30%;" />
      </div>
    </template>
    <template #default>
      <div class="i-website__error">
        <div class="i-website__error__info">
          <div class="i-website__error__status">
            {{status}}
          </div>
          <div class="i-website__error__title">
            {{iError['title']}}
          </div>
          <div class="i-website__error__msg">
            {{iError['message']}}
          </div>
          <el-button
            type="primary"
            round
            @click="goBack"
            class="i-website__error__action"
          >
            返回上一页
          </el-button>
          <el-button
            round
            link
            @click="goHome"
            class="i-website__error__action"
          >
            返回首页
          </el-button>
        </div>
        <img
          v-if="iError['picture']"
          class="i-website__error__picture"
          :src="iError['picture']"
        />
      </div>
    </template>
  </el-skeleton>
</template>

<script>
import {defineComponent, computed, onBeforeMount, onMounted, ref} from 'vue';
import {useRouter} from 'vue-router';
import ERRORS from '../data/error.js';

import '../style/error.scss';

export default defineComponent({
  name: 'ErrorPage',
  props: {
    status: {
      type: [String, Number],
      required: true
    }
  },
  setup(props) {
    const router = useRouter();
    const loading = ref(false);
    const goHome = () => router.push('/');
    const goBack = () => router.back();
    const iError = computed(() => {
      return ERRORS[props.status];
    });
    onBeforeMount(() => {
      if (router.getRoutes().length === router.options.routes.length) {
        loading.value = true;
      }
    });
    onMounted(() => {
      const timer = setTimeout(() => {
        loading.value = false;
        clearTimeout(timer);
      }, 1000);
    });
    return {
      loading,
      iError,
      goHome,
      goBack
    };
  }
});
</script>
