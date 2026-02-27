export default {
  renderer: 'page',
  style: {
    margin: 0
  },
  body: [
    {
      renderer: 'frame',
      src: process.env.VUE_APP_PAGE_PLAYGROUND
    }
  ],
  innerStyle: '.i-frame__container {\n  height: calc(100vh - 60px) !important;\n}'
};