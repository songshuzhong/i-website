<template>
  <div class="i-website__error">
    <div class="i-website__error__info">
      <div class="i-website__error__status">
        {{status}}
      </div>
      <div class="i-website__error__title">
        {{i18n.title}}
      </div>
      <div class="i-website__error__msg">
        {{i18n.message}}
      </div>
      <el-button
        type="primary"
        round
        @click="goBack"
        class="i-website__error__action"
      >
        {{i18n.backUp}}
      </el-button>
      <el-button
        round
        link
        @click="goHome"
        class="i-website__error__action"
      >
        {{i18n.backHome}}
      </el-button>
    </div>
    <img
      v-if="iError['picture']"
      class="i-website__error__picture"
      :src="iError['picture']"
    />
  </div>
</template>

<script>
import {defineComponent, computed, onBeforeMount, onMounted, ref} from 'vue';
import {useRouter} from 'vue-router';
import {useLocale} from 'element-plus';
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
    const {t} = useLocale();
    const goHome = () => router.push('/');
    const goBack = () => router.back();
    const iError = computed(() => {
      return ERRORS[props.status];
    });
    const i18n = computed(() => ({
      backUp: t('website.error.backUp'),
      backHome: t('website.error.backHome'),
      title: t(ERRORS[props.status].title),
      message: t(ERRORS[props.status].message),
    }));
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
      i18n,
      iError,
      goHome,
      goBack
    };
  }
});
</script>
