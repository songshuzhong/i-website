<template>
  <div class="i-website__error">
    <el-skeleton
      v-if="loading"
      :loading="loading"
      :rows="10"
      :throttle="{trailing: $iRenderConfig.trailing, initVal: true}"
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
    </el-skeleton>
    <template v-else>
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
    </template>
  </div>
</template>

<script>
import {defineComponent, computed, onBeforeMount, onMounted, ref} from 'vue';
import {useRouter, useRoute} from 'vue-router';
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
    const route = useRoute();
    const loading = ref(false);
    const goHome = () => router.push('/');
    const goBack = () => router.back();
    const iError = computed(() => {
      return ERRORS[props.status];
    });
    onBeforeMount(() => {
      if (router.getRoutes().length === 4) {
        loading.value = true;
      }
    });
    onMounted(() => {
      const timer = setTimeout(() => {
        if (props.status === 404 && loading.value) {
          const routes = router.getRoutes();
          let target;
          for (let i = 0; i < routes.length; i++) {
            if (routes[i].path === route.path) {
              target = routes[i];
              break;
            }
          }
          target && router.push(target.path);
          loading.value = false;
        }
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
