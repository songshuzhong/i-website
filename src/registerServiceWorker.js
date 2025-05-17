import {register} from 'register-service-worker';

const isGp = process.env.VUE_APP_API_NODE_ENV === 'gp';

const registrySw = (contextPath, app) => {
  const sw = isGp? '/i-website/dist/service-worker.js': `${contextPath}/service-worker.js`;

  register(sw, {
    updatefound() {
      try {
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
            type: 'warning',
            message: '检测到新版本，正在下载中，请稍后。',
            title: '温馨提示',
            position: 'bottom-right',
            offset: 50
          });
        const timer = setTimeout(() => {
          clearTimeout(timer);
          proxy = null;
        }, 6000);
      } catch (e) {
        console.log(e);
      }
    },
    updated() {
      try {
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
            type: 'success',
            message: '版本更新完成，10s后刷新项目。',
            title: '温馨提示',
            position: 'bottom-right',
            duration: 10000,
            offset: 50
          });
        const timer = setTimeout(() => {
          clearTimeout(timer);
          proxy = null;
          window.location.reload();
        }, 10000);
      } catch (e) {
        console.log(e);
      }
    }
  });
};

export default registrySw;
