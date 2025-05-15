import {createApp} from 'vue';
import {createRouter, createWebHashHistory} from 'vue-router';
import ElementPlus from 'element-plus';
import {IRenderer} from  '../utils/lib.js';
import Application from '../apps/Editing.vue';
import registrySw from '../registerServiceWorker';

import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css';
import 'i-renderer/dist/css/index.css';

const app = createApp(Application);

registrySw(process.env.VUE_APP_SERVICE_WORKER);

app
  .use(ElementPlus)
  .use(IRenderer)
  .use(createRouter({
    history: createWebHashHistory(process.env.VUE_APP_CONTEXT_PATH_WEBSITE),
    routes: []
  }))
  .mount('.i-website-app__container');
