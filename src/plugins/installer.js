export const installer = (app, components) => {
  for (const key in components) {
    if (['ElLoading', 'ElMessage', 'ElMessageBox', 'ElNotification', 'ElPopoverDirective'].includes(key)) {
      app.use(components[key]);
    } else {
      app.component(components[key].name, components[key]);
    }
  }
};
