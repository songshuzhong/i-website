import {createApp} from 'vue';
import ElementPlus from 'element-plus';
import {IRenderer, api} from  '../utils/lib.js';
import createRoutes from '../router/website';
import ToMobile from '../component/ToMobile.vue';
import Ai from '../component/Ai.vue';
import Application from '../apps/Website.vue';
import registrySw from '../registerServiceWorker';
import Verify from '../component/Verify';
import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css';
import 'i-renderer/dist/css/index.css';
import '../style/index.scss';

const app = createApp(Application);
const config = {
  trackUtil: function(name, props) {
    window.umami.track(() => ({
      name,
      data: props
    }));
  },
  renderers: [ToMobile, Verify, Ai],
  actions: {
    logout: function(proxy, config, context, onActionFeedback) {
      localStorage.removeItem('token');
      onActionFeedback&&onActionFeedback('CANCEL_LOADING');
      proxy.$dispatchAction(proxy, {url: process.env.NODE_ENV === 'dev'? 'localhost/login.html': 'localhost/login', actionType: 'url'}, {}, () => {});
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
  }
};
const isGPOrDev = process.env.VUE_APP_API_NODE_ENV === 'gp' || process.env.VUE_APP_API_NODE_ENV === 'dev';
config.adaptor = {
  req: `if (${isGPOrDev} && url.includes("/api/page")) {\n  req.url = req.url + ".json";\n}\n else if (${isGPOrDev} && url.includes("/api/mock")) {\n  let l = url.split("/api/mock")[1].split("/").filter(i => i).join("-") + ".json";\n  req.url = "/api/mock/" + l;\n} else if (${isGPOrDev} && url.includes("/api")) {\n  req.url = req.url + ".json";\n}`,
  res: `if (${isGPOrDev} && url.includes("/api/mock")) {\n  let exp = res.data.schema;\n  const regex =\n    /^\\s*(?:\\(([^)]*)\\)|([^=\\s]+))\\s*=>\\s*(?:\\{([\\s\\S]*?)\\}|([^\\n]*))\\s*$/;\n  const match = exp.match && exp.match(regex);\n  let functionBody = exp;\n  if (match && match.length > 1) {\n    functionBody = match[3].trim();\n    try {\n      const fun = new Function("_req", "_res", functionBody);\n      res.data = fun({ params, query: params }, res);\n    } catch (error) {\n      res.data = error;\n    }\n  }\n}`
};
let user = `${process.env.VUE_APP_API_BASE}/api/user${isGPOrDev? '.json': ''}`;

api()
  .useApi({headers: {Authorization: localStorage.getItem('token')}})
  .get(user)
  .then(res => {
    const routers = createRoutes();
    config.permissions = res.data['permissions'];
    config.roles = res.data['roles'];
    app
      .use(ElementPlus)
      .use(IRenderer, config)
      .use(routers)
      .mount('.i-website-app__container');
    registrySw(process.env.VUE_APP_SERVICE_WORKER, app);
  })
  .catch((e) => {
    if (e.data && (e.data.code === 401 || e.data.code === 400)) {
      window.location.href = process.env.VUE_APP_PAGE_LOGIN;
    }
    let proxy = {
      $notify: app.config.globalProperties.$notify,
      $iRenderConfig: app.config.globalProperties.$iRenderConfig,
      $: {
        appContext: app._context
      }
    };
    app
      .config
      .globalProperties
      .createMessage(proxy, {
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
