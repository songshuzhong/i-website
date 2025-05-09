const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const path = require('path');
const glob = require('glob');
const fs = require('fs');
const isDev = process.env.NODE_ENV === 'dev';
const rewrites = [];
const pages = {};

glob.sync('./src/pages/*.js').forEach(entry => {
  const filename = entry.replace(/(.*\/)*([^.]+).*/ig,'$2');
  let pageConfig;
  try {
    let fileContent = fs.readFileSync(
      `./src/config/${filename}.json`,
      'utf-8'
    );
    pageConfig = JSON.parse(fileContent);
  } catch (e) {
    pageConfig = {};
  }
  rewrites.push({from: new RegExp('^/' + filename), to: `/${filename}.html`});
  pages[filename] = {
    entry,
    template: path.join(__dirname, '/src/template.html'),
    filename:  `${filename}.html`,
    title: pageConfig.title,
    skeleton: pageConfig.skeleton || '',
    skeletonStyle: pageConfig.skeletonStyle || '',
    preload: false,
    prefetch: false,
    minify: {}
  };
});

module.exports = {
  pages,
  publicPath: isDev ? '' : '/i-website',
  transpileDependencies: ['element-plus'],
  productionSourceMap: false,
  configureWebpack: {
    output: isDev? {
      filename: 'js/[name].[hash:6].js',
      chunkFilename: 'chunk/[name].[hash:6].js',
    }: {
      filename: 'js/[name].[contenthash:6].js',
      chunkFilename: 'chunk/[name].[contenthash:6].js',
    },
    plugins: [
      new MonacoWebpackPlugin({
        filename: 'worker/[name].worker.js',
        languages: ['json', 'less', 'javascript', 'html', 'css', 'typescript']
      })
    ]
  },
  chainWebpack: config => {
    ['home', 'login', 'website', 'playground', 'mobile'].forEach(entryName => {
      config.plugins.delete(`prefetch-${entryName}`);
      config.plugins.delete(`preload-${entryName}`);
    });
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://0.0.0.0:9000',
        changeOrigin: true
      }
    }
  }
};
