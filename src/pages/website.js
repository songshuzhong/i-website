import {createApp} from 'vue';
import * as vue from 'vue';
import {IRenderer, api} from  '../utils/lib.js';
import createRoutes from '../router/website';
import ToMobile from '../component/ToMobile.vue';
import Ai from '../component/Ai.vue';
import Three from '../component/ThreeJS.vue';
import Application from '../apps/Website.vue';
import registrySw from '../registerServiceWorker';
import * as ElementPlus from '../plugins/ui.js';
import {installer} from '../plugins/installer.js';
import Verify from '../component/Verify';
import '../utils/polyfill';
import '../utils/debug';

import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css';
import '../style/index.scss';
import '../style/reset.scss';

const app = createApp(Application);
const config = {
  track: function(name, info) {
    if (window.umami) {
      window.umami.track(name, info);
    } else {
      console.log(name, info);
    }
  },
  renderers: [ToMobile, Verify, Ai, Three],
  actions: {
    logout: function(proxy, config, context, onActionFeedback) {
      localStorage.removeItem('token');
      onActionFeedback&&onActionFeedback('CANCEL_LOADING');
      proxy.$action(proxy, {url: process.env.VUE_APP_PAGE_LOGIN, actionType: 'url'}, {}, () => {});
    },
  },
  request: function(req) {
    if (localStorage.getItem('token')) {
      if (!req.headers) {
        req.headers = {};
      }
      req.headers['Authorization'] = localStorage.getItem('token');
    }
    return req;
  },
  response: function(res) {
    if (res.data && [400, 401].includes(res.data.code)) {
      window.location.href = process.env.VUE_APP_PAGE_LOGIN;
    }
    return res;
  },
  activeDomain: process.env.VUE_APP_API_BASE
};
const isGPOrDev = process.env.VUE_APP_API_NODE_ENV === 'gp' || process.env.VUE_APP_API_NODE_ENV === 'dev';
config.adaptor = {
  req: `
if (${isGPOrDev} && url.includes("/api/page")) {
  req.url = req.url + ".json";
} else if (${isGPOrDev} && url.includes("/api/mock")) {
  let l=url.split("/api/mock")[1].split("/").filter(i => i).join("-");
  let s=l.split('?');l=s[0]+".json";
  req.url = "/api/mock/" + l;
} else if (${isGPOrDev} && url.includes("/api")) {
  req.url = req.url + ".json";
}`,
  res: `
if (${isGPOrDev} && url.includes("/api/mock")) {
  let exp = res.data.schema;
  const regex =\n    /^\\s*(?:\\(([^)]*)\\)|([^=\\s]+))\\s*=>\\s*(?:\\{([\\s\\S]*?)\\}|([^\\n]*))\\s*$/;\n
  const match = exp && exp.match && exp.match(regex);
  let functionBody = exp;
  if (match && match.length > 1) {
    functionBody = match[3].trim();
    try {
      const fun = new Function("_req", "_res", functionBody);
      res.data = fun({ params, body: params, query: params }, res);
    } catch (error) {
      res.data = error;
    }
  }
}`
};
let user = `${process.env.VUE_APP_API_BASE}/api/user${isGPOrDev? '.json': ''}`;

api()
  .useApi({headers: {Authorization: localStorage.getItem('token')}})
  .get(user)
  .then(res => {
    const routers = createRoutes();
    installer(app, ElementPlus);
    config.permissions = res.data['permissions'];
    config.roles = res.data['roles'];
    app
      .use(IRenderer, config)
      .use(routers)
      .mount('.i-renderer-app__container');
    registrySw(process.env.VUE_APP_SERVICE_WORKER, app);
  })
  .catch((e) => {
    if (e.data && (e.data.code === 401 || e.data.code === 400)) {
      window.location.href = process.env.VUE_APP_PAGE_LOGIN;
    }
    let proxy = {
      $notify: app.config.globalProperties.$notify,
      $env: app.config.globalProperties.$env,
      $: {
        appContext: app._context
      }
    };
    app
      .config
      .globalProperties
      .$msg(proxy, {
        type: 'error',
        title: `错误${e?.data?.code || e?.response?.data?.code || e.code}`,
        message: e?.data?.message || e?.response?.data?.message || e.message,
        position: 'bottom-right',
        duration: 10000,
        offset: 50
      });
    const timer = setTimeout(() => {
      clearTimeout(timer);
      proxy = null;
    }, 12000);
  });

window.vue = vue;