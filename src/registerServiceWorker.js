import {register} from 'register-service-worker';

const isGp = process.env.VUE_APP_API_NODE_ENV === 'gp';

const registrySw = (contextPath, app) => {
  const sw = isGp? '/i-website/dist/service-worker.js': `${contextPath}/service-worker.js`;

  register(sw, {
    updatefound() {
      app
        .config
        .globalProperties
        .createMessage(app.config.globalProperties, {
          type: 'warning',
          message: '检测到新版本，正在下载中，请稍后。',
          title: '温馨提示',
          position: 'bottom-right',
          offset: 50
        });
    },
    updated() {
      app
        .config
        .globalProperties
        .createMessage(app.config.globalProperties, {
          type: 'success',
          message: '版本更新完成，10s后刷新项目。',
          title: '温馨提示',
          position: 'bottom-right',
          duration: 10000,
          offset: 50
        });
      const timer = setTimeout(() => {
        clearTimeout(timer);
        window.location.reload();
      }, 10000);
    }
  });
};

export default registrySw;
