import {createApp} from 'vue';
import * as ElementPlus from '../plugins/ui.js';
import {installer} from '../plugins/installer.js';
import {IRenderer, api} from  '../utils/lib.js';
import Application from '../apps/Login.vue';
import Sendemail from '../component/Sendemail';
import Verify from '../component/Verify';
import registrySw from '../registerServiceWorker';
import '../utils/debug';

import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css';
import 'i-renderer/dist/css/index.css';
import '../style/login.scss';

const app = createApp(Application);
const onLogin = (proxy, config, context, onActionFeedback, formdata, options) => {
  api().useApi()
    .post(`${process.env.VUE_APP_API_BASE}/api/auth/login`, formdata)
    .then((res) => {
      localStorage.setItem('token', `Bearer ${res.data}`);
      const url = process.env.VUE_APP_PAGE_WEBSITE;
      proxy.$dispatchAction(proxy, {url, actionType: 'url'}, {}, () => {});
    })
    .catch((e) => {
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
          position: 'top-right',
          duration: 10000,
          offset: 50
        });
      const timer = setTimeout(() => {
        clearTimeout(timer);
        proxy = null;
      }, 12000);
      options&&options.refs.verify.handleDraw();
    })
    .finally(() => {
      onActionFeedback&&onActionFeedback('CANCEL_LOADING');
    });
};
const options = {
  domains: [process.env.VUE_APP_API_BASE],
  renderers: [Sendemail, Verify],
  actions: {
    visitor: function(proxy, config, context, onActionFeedback) {
      onLogin(proxy, config, context, onActionFeedback, process.env.NODE_ENV === 'local'? {
        namespace: '联通',
        username: 'admin',
        password: 'admin',
        code: '1234',
        verify: '1234'
      }: {
        namespace: 'guest',
        username: 'guest',
        password: '_123456qwerty',
        code: '1234',
        verify: '1234'
      });
    },
    login: function (proxy, config, context, onActionFeedback, options) {
      config.actionType = 'extends';
      config.triggered = 'valid';
      this.extends(proxy, config, context, onActionFeedback, {}).then((isValid) => {
        if (isValid) {
          const data = this.extends(proxy, {actionType: 'extends', triggered: 'getData'}, context, onActionFeedback, {});
          onLogin(proxy, config, context, onActionFeedback, data, options);
        }
      }).catch(() => {
        options.refs.verify.handleDraw();
      }).finally(() => {
        onActionFeedback&&onActionFeedback('CANCEL_LOADING');
      });
    },
  }
};
installer(app, ElementPlus);
app
  .use(IRenderer, options)
  .mount('.i-renderer-app__container');

registrySw(process.env.VUE_APP_SERVICE_WORKER, app);
