import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import locale from 'element-plus/lib/locale/lang/zh-cn';

import menusCreator from './router/index';

import Application from './App.vue';
import UmisRenderer, { api } from './components/entry';
import UmisEditor from './components/editor';

import 'element-plus/dist/index.css';
import '../../umis-renderer/packages/renderer/styles/index.scss';
import './style/superfans.scss';
import './style/index.scss';

const app = createApp(Application);
const UMIS_CONFIG = {};

api()
  .staticApi()
  .get(
    `${process.env.VUE_APP_API_BASE}/api/menu/0767bea4-c7e7-4aa7-a1b5-2fd5e1ec4a7f`
  )
  .then(res => {
    const routers = menusCreator(res.data.menu);

    app
      .use(ElementPlus, { locale })
      .use(UmisEditor)
      .use(UmisRenderer, UMIS_CONFIG)
      .use(routers)
      .mount('#app');
  });
