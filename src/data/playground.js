export default {
  renderer: 'page',
  body: [
    {
      renderer: 'frame',
      src: process.env.VUE_APP_PAGE_PLAYGROUND
    }
  ],
  innerStyle: '.i-frame__container {\n  height: calc(100vh - 120px) !important;\n}'
};