import {createApp} from 'vue';
import {createRouter, createWebHashHistory} from 'vue-router';
import ElementPlus from 'element-plus';
import {IRenderer, Schema} from  '../utils/lib.js';
import Playground from '../apps/Playground.vue';
import registrySw from '../registerServiceWorker';

import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css';
import 'i-renderer/dist/css/index.css';
import '../style/playground.scss';

const app = createApp(Playground);

registrySw(process.env.VUE_APP_SERVICE_WORKER);

app.component(Schema);
app
  .use(ElementPlus)
  .use(IRenderer)
  .use(createRouter({
    history: createWebHashHistory(process.env.VUE_APP_CONTEXT_PATH_WEBSITE),
    routes: [
      {
        path: '/',
        name: 'IWebsite',
        title: '零代码-百搭云平台案例',
        component: () => import('../component/Playground.vue')
      }
    ]
  }))
  .mount('.i-website-app__container');
