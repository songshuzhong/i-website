const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const {GenerateSW} = require('workbox-webpack-plugin');
const path = require('path');
const glob = require('glob');
const fs = require('fs');
const rewrites = [];
const pages = {};

glob.sync('./src/pages/*.js').forEach(entry => {
  const filename = path.basename(entry, path.extname(entry));
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
    minify: {
      minifyJS: true,
      minifyCSS: true,
      removeComments: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true,
    },
  };
});

module.exports = {
  pages,
  publicPath: process.env.PUBLIC_PATH,
  transpileDependencies: ['element-plus'],
  productionSourceMap: false,
  configureWebpack: {
    output: {
      filename: 'js/[name].[contenthash:6].js',
      chunkFilename: 'js/chunk/[name].[contenthash:6].js',
    },
    plugins: [
      new MonacoWebpackPlugin({
        filename: 'js/worker/[name].worker.js',
        languages: ['json', 'less', 'javascript', 'html', 'css', 'typescript'],
      }),
      new GenerateSW ({
        swDest: 'service-workbox.js',
        clientsClaim: true,
        skipWaiting: true,
        cleanupOutdatedCaches: true,
        runtimeCaching: [
          {
            urlPattern: /\/api\/.*/, // 匹配 API 请求
            handler: 'NetworkFirst', // 优先使用网络请求
            options: {
              cacheName: 'api-cache',
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg)$/, // 匹配图片资源
            handler: 'CacheFirst', // 优先使用缓存
            options: {
              cacheName: 'image-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 30 * 24 * 60 * 60,
              },
            },
          },
          {
            urlPattern: new RegExp('\\.html$'), // 匹配 HTML 页面
            handler: 'StaleWhileRevalidate', // 快速返回缓存，后台更新
            options: {
              cacheName: 'html-cache',
            },
          },
        ],
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
    client: {
      overlay: false
    },
  },
};
