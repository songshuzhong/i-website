(() => {
  function block() {
    setInterval(() => {
      (function () {
        return false;
      }['constructor']('debugger')['call']());
    }, 50);
  }
  try {
    const isPro = process.env.VUE_APP_API_NODE_ENV === 'gp' || process.env.VUE_APP_API_NODE_ENV === 'nestjs';
    if (isPro) {
      block();
    }
  } catch (err) {
    console.error(err);
  }
})();
