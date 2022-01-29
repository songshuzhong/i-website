const {GenerateSW} = require('workbox-webpack-plugin');

const isDev = process.env.NODE_ENV === 'dev';

module.exports = {
  publicPath: isDev ? './' : '/umis-website/dist',
  productionSourceMap: false,
  transpileDependencies: ['element-plus'],
  configureWebpack: {
    output: isDev? {
      filename: 'js/[name].[hash:6].js',
      chunkFilename: 'chunk/[name].[hash:6].js',
    }: {
      filename: 'js/[name].[contenthash:6].js',
      chunkFilename: 'chunk/[name].[contenthash:6].js',
    },
    optimization: {
      minimize: !isDev,
      splitChunks: {
        chunks: 'async',
        cacheGroups: {
          renderer: {
            name: 'renderer',
            test: /umis-renderer\/dist\/js\/renderer/,
            chunks: 'all',
            priority: 20,
            enforce: true
          },
          editor: {
            name: 'editor',
            test: /umis-renderer\/dist\/js\/editor/,
            chunks: 'all',
            priority: 20,
            enforce: true
          },
          less: {
            name: 'less',
            test: /less/,
            chunks: 'all',
            priority: 20,
            enforce: true
          },
          echarts: {
            name: 'echarts',
            test: /echarts|zrender/,
            chunks: 'all',
            priority: 20,
            enforce: true
          },
          'driver.js': {
            name: 'driver.js',
            test: /driver.js/,
            chunks: 'all',
            priority: 20,
            enforce: true
          },
          'js-export-excel': {
            name: 'js-export-excel',
            test: /js-export-excel/,
            chunks: 'all',
            priority: 20,
            enforce: true
          },
          'vue3-video-play': {
            name: 'vue3-video-play',
            test: /vue3-video-play/,
            chunks: 'all',
            priority: 20,
            enforce: true
          },
          'web-watermark': {
            name: 'web-watermark',
            test: /web-watermark/,
            chunks: 'all',
            priority: 20,
            enforce: true
          },
          wangeditor: {
            name: 'wangeditor',
            test: /wangeditor/,
            chunks: 'all',
            priority: 20,
            enforce: true
          },
          qrcode2: {
            name: 'qrcode2',
            test: /qrcode2/,
            chunks: 'all',
            priority: 20,
            enforce: true
          },
          countup: {
            name: 'countup',
            test: /countup/,
            chunks: 'all',
            priority: 20,
            enforce: true
          },
          'copy-to-clipboard': {
            name: 'copy-to-clipboard',
            test: /copy-to-clipboard/,
            chunks: 'all',
            priority: 20,
            enforce: true
          },
          styles: {
            name: 'styles',
            test: /\.(css|scss)$/,
            chunks: 'async',
            priority: 20,
            enforce: true
          },
          async: {
            name: 'async',
            chunks: 'async',
            minChunks: 2,
            reuseExistingChunk: true,
            priority: 7
          }
        }
      }
    },
    plugins: [
      new GenerateSW ({
        clientsClaim: true,
        skipWaiting: true
      })
    ],
  },
  css: {
    extract: true,
    sourceMap: false,
  },
  devServer: {
    port: 80,
    disableHostCheck: true,
    proxy: {
      '/fansSupportOrder': {
        target: 'http://terra.bpdev.biz.weibo.com',
        changeOrigin: true
      },
      '/api/templates': {
        target: 'http://ashina.biz.weibo.com',
        changeOrigin: true
      },
      '/api': {
        target: 'http://localhost:1026',
        changeOrigin: true
      }
    }
  }
};
