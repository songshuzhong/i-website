const i18n = {
  en: {
    start: '<h1>Quick Start</h1>This section will introduce how to use i-renderer in a project.',
    download: '<h2>Download and Install</h2>',
    usage: '<h2>Usage</h2>',
    full: '<h3>Complete</h3>If you are not very concerned about the size of the packaged file, then using a full import would be more convenient.\n',
    part: '<h3>Part</h3>If you have requirements for the volume of the packaged product, you need to separate the editing and rendering states and import them separately.\n',
    flexible: '<h2>More flexible usage\n</h2>',
    tip: 'Handwritten code is used for pages with high personalization and complex interaction, while other pages are built through configuration. This routing level hybrid rendering framework design is more robust.',
    end: '<h2>Get started</h2>Now you can start the project. For each component, there is a corresponding visualization property configuration panel, which comes with explanations of key properties. I believe that smart you will be able to get started immediately!<h4>run bro!</h4><h3>run!</h3>',
    schema: 'Schema',
    anchor: [
      'Quick Start',
      'D & I',
      'Usage',
      'Complete',
      'Part',
      'Flexible',
      'Run',
    ],
  },
  ja: {
    start: '<h1>クイックスタート</h1>このセクションでは、プロジェクトでi-rendererを使用する方法を紹介します。',
    download: '<h2>ダウンロードとインストール</h2>',
    usage: '<h2>使用方法</h2>',
    full: '<h3>完全インポート</h3>パッケージ化されたファイルのサイズにそれほどこだわらない場合は、完全インポートを使用すると便利です。',
    part: '<h3>オンデマンドインポート</h3>パッケージ化された成果物のサイズに要求がある場合は、編集状態とレンダリング状態を分離して、個別にインポートする必要があります。',
    flexible: '<h2>より柔軟な使用方法</h2>',
    tip: '個性化の度合いが高く、インタラクションの複雑度が高いページは手書きのコードで作成し、逆に、他のページは設定で構築します。このようなルーティングレベルのハイブリッドレンダリングフレームワークの設計はより堅固です。',
    end: '<h2>使用開始</h2>これでプロジェクトを起動できます。 各コンポーネントには対応するビジュアル属性設定パネルがあり、パネルには重要な属性の説明が付いているので、賢いあなたならすぐに使いこなせるでしょう！<h4>やってみろ！</h4><h3>やるぞ！</h3>',
    schema: 'スキーマ',
    anchor: [
      'クイックスタート',
      'ダウンロードとインストール',
      '使用方法',
      '完全インポート',
      'オンデマンドインポート',
      'より柔軟な使用方法',
      '使用開始',
    ],
  },
  zh: {
    start: '<h1>快速开始</h1>本节将介绍如何在项目中使用i-renderer。',
    download: '<h2>下载安装</h2>',
    usage: '<h2>用法</h2>',
    full: '<h3>完整引入</h3>如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。',
    part: '<h3>按需导入</h3>如果您对打包产物的体积有要求，那就需要分离出编辑态和渲染态，分开导入即可。',
    flexible: '<h2>更灵活的用法</h2>',
    tip: '让个性化程度高、交互复杂度大的页面手写代码，相反的，其他页面则通过配置搭建。这种路由级混合渲染的框架设计更为健壮。',
    end: '<h2>开始使用</h2>现在你可以启动项目了。 对于每个组件都有对应的可视化属性配置面板，面板自带关键属性的解释说明，相信聪明的你一定能立马上手！<h4>run bro!</h4><h3>run!</h3>',
    schema: '当前页面源代码',
    anchor: [
      '快速开始',
      '下载安装',
      '用法',
      '完整引入',
      '按需导入',
      '更灵活的用法',
      '开始使用',
    ],
  },
};
const escaped = str => {
  return str.replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/\$\{/g, '&#36;{')
    .replace(/\n/g, '<br>');
};
const allImport = `
import {createApp} from 'vue';
import ElementPlus from 'element-plus';
import IRenderer from 'i-renderer';
import App from './App.vue';

import 'element-plus/dist/index.css';
import 'i-renderer/dist/css/index.css';

const app = createApp(App);

app
  .use(ElementPlus)
  .use(IRenderer)
  .mount('#app');
`;
const partImport = `
import {createApp} from 'vue';
import ElementPlus from 'element-plus';
import IRenderer from 'i-renderer/dist/js/renderer';
import App from './App.vue';

import 'element-plus/dist/index.css'
import 'i-renderer/dist/css/index.css';

const app = createApp(App);

app
  .use(ElementPlus)
  .use(IRenderer)
  .mount('#app');
`;
const t = '${$.name}';
const strPage = `
{
  renderer: 'page',
  body: [
    {
      renderer: 'html',
      html: 'Hello ${t}, nice to meet you。'
    }
  ]
}
`;
const allApp = escaped(`
<template>
  <i-schema
    :init-schema="schema"
    :updatable="false"
    classname="i-renderer-demo__container"
  />
</template>

<script setup lang="ts">
import {ref} from 'vue';

const schema = ref({
  renderer: 'page',
  initData: {
    name: 'IRenderer'
  },
  body: 'Hello ${t}, nice to meet you。'
});
</script>
`);
const partApp = escaped(`
<template>
  <Schema
    :init-schema="json"
    :updatable="false"
    classname="i-renderer-demo__container"
  />
</template>

<script setup lang="ts">
import {ref} from 'vue';
import {Schema} from 'i-renderer/dist/js/renderer';

const json = ref({
  renderer: 'page',
  initData: {
    name: 'IRenderer'
  },
  body: 'Hello ${t}, nice to meet you。'
});
</script>
`);
const partEdit = escaped(`
<template>
  <Suspense>
    <template #default>
      <AsyncEditor :is-json="false" :nimble="true" />
    </template>
    <template #fallback>
      <div class="i-editor__container-loading" />
    </template>
  </Suspense>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

const AsyncEditor = defineAsyncComponent(() => import('i-renderer/dist/js/editor').then(module => module.Editor));
</script>
`);
const routerJs = escaped(`
import {createRouter} from 'vue-router';

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/demo',
      component: Schema,
      props: {
        initSchema: () => import('@/pages/demo'),
      },
    },
    {
      path: '/test',
      component: Schema,
      props: {
        initSchema: '/api/page/1234',
      },
    },
  ]
});
`);
const demoJs = escaped(`
import Hi from '@/components/Hi.vue';

export const assets = ['https://www.xxx.com/cdn/Todo.umd.hash.min.js'];
export const pageDesc = '页面描述';
export const pageTitle = '这是页面标题';
export const visible = [1, 8, 34];
export const pageData = {
  from: 'this message is from server!',
  name: 'Server',
};

export default function() {
  return {
    renderer: 'page',
    body: [
     {
       renderer: 'html',
       html: 'Hello ${t}, nice to meet you。'
     },
     {
       renderer: 'Todo',
       description: '来自cdn依赖的组件'
     },
     {
       renderer: Hi,
       description: '来自项目的组件'
     }
    ]
  };
};
`);
const testJs = escaped(`
{
  status: 200,
  message: 'success',
  data: {
    pageTitle: '测试页面',
    pageData: {
      from: 'this message is from server!',
      name: 'Server',
    },
    assets: [],
    visible: [1, 8, 34],
    pageSchema: '${JSON.stringify(strPage)}'
  }
}
`);
const typePage = escaped(`
interface IRendererModel {
  renderer: string | URL | VNode
  header?: string | IRendererModel | IRendererModel[]
  body?: string | IRendererModel | IRendererModel[]
  footer?: string | IRendererModel | IRendererModel[]
  initData?: any
  [key: string]: any
}

interface IPageModel {
  pageId: string                       // 页面Id
  pageSchema: string | IRendererModel  // 页面配置
  pageTitle: string                    // 页面标题
  pageIcon: string                     // 页面icon 
  pageDesc: string                     // 页面描述
  pageData: any                        // 初始化数据
  version: number                      // 迭代版本号
  status: number                       // 可用状态
  hidden: boolean                      // 隐藏页
  visible: number[]                    // 可见角色列表
  assets: string[]                     // 远程依赖资源
  updatedBy: string                    // 更新人
  updatedCause: string                 // 更新原因
  createdAt: timestamp                 // 创建时间
  updatedAt: timestamp                 // 更新时间
  groupBy: string                      // 分组 
  projectId: string                    // 项目Id  
  namespace: string                    // 命名空间
}
`);

export default function(options) {
  const tokens = i18n[options.language || 'zh'];
  return {
    renderer: 'page',
    classname: 'i-home-quickstart',
    style: {
      width: '66%',
      margin: 'auto',
      padding: '10px 20px 0 20px',
      color: 'var(--el-text-color-regular)',
    },
    body: [
      {
        renderer: 'html',
        html: tokens.start,
        events: {
          click: {
            actions: [
              {
                actionType: 'custom',
                content: (context, app) => {
                  console.log(context, app);
                }
              }
            ]
          }
        }
      },
      {
        renderer: 'html',
        html: tokens.download,
      },
      {
        renderer: 'tabs',
        useRef: true,
        name: 'Tabs',
        style: {
          marginTop: '20px',
          padding: '0 20px',
          background: 'var(--el-fill-color-light)',
          fontWeight: 'bold',
        },
        panels: [
          {
            label: 'npm',
            icon: [
              {
                fill: '#c12127',
                d: 'M2 2h28v28H2'
              },
              {
                fill: '#fff',
                d: 'M7.25 7.25h17.5v17.5h-3.5v-14H16v14H7.25'
              }
            ],
            body: {
              renderer: 'html',
              style: {
                marginTop: '-15px',
                minHeight: '60px',
                lineHeight: '60px',
              },
              html: '$ npm install i-renderer --save-dev',
            }
          },
          {
            label: 'yarn',
            icon: [
              {
                fill: '#2188b6',
                d: 'M28.208 24.409a10.5 10.5 0 0 0-3.959 1.822a23.7 23.7 0 0 1-5.835 2.642a1.63 1.63 0 0 1-.983.55a62 62 0 0 1-6.447.577c-1.163.009-1.876-.3-2.074-.776a1.573 1.573 0 0 1 .866-2.074a4 4 0 0 1-.514-.379c-.171-.171-.352-.514-.406-.388c-.225.55-.343 1.894-.947 2.5c-.83.839-2.4.559-3.328.072c-1.019-.541.072-1.813.072-1.813a.73.73 0 0 1-.992-.343a4.85 4.85 0 0 1-.667-2.949a5.37 5.37 0 0 1 1.749-2.895a9.3 9.3 0 0 1 .658-4.4a10.45 10.45 0 0 1 3.165-3.661S6.628 10.747 7.35 8.817c.469-1.262.658-1.253.812-1.308a3.6 3.6 0 0 0 1.452-.857a5.27 5.27 0 0 1 4.41-1.7S15.2 1.4 16.277 2.09a18.4 18.4 0 0 1 1.533 2.886s1.281-.748 1.425-.469a11.33 11.33 0 0 1 .523 6.132a14 14 0 0 1-2.6 5.411c-.135.225 1.551.938 2.615 3.887c.983 2.7.108 4.96.262 5.212c.027.045.036.063.036.063s1.127.09 3.391-1.308a8.5 8.5 0 0 1 4.277-1.604a1.081 1.081 0 0 1 .469 2.11Z'
              }
            ],
            body: {
              renderer: 'html',
              style: {
                marginTop: '-15px',
                minHeight: '60px',
                lineHeight: '60px',
              },
              html: '$ yarn add i-renderer'
            }
          },
          {
            label: 'pnpm',
            icon: [
              {
                fill: '#f9ad00',
                d: 'M30 10.75h-8.749V2H30Zm-9.626 0h-8.75V2h8.75Zm-9.625 0H2V2h8.749ZM30 20.375h-8.749v-8.75H30Z'
              },
              {
                fill: '#4e4e4e',
                d: 'M20.374 20.375h-8.75v-8.75h8.75Zm0 9.625h-8.75v-8.75h8.75ZM30 30h-8.749v-8.75H30Zm-19.251 0H2v-8.75h8.749Z'
              }
            ],
            body: {
              renderer: 'html',
              style: {
                marginTop: '-15px',
                minHeight: '60px',
                lineHeight: '60px',
              },
              html: '$ pnpm install i-renderer',
            }
          },
        ]
      },
      {
        renderer: 'html',
        html: tokens.usage,
      },
      {
        renderer: 'html',
        html: tokens.full,
      },
      {
        renderer: 'tabs',
        style: {
          marginTop: '20px',
          padding: '0 20px',
          background: 'var(--el-fill-color-light)',
          fontWeight: 'bold',
        },
        panels: [
          {
            label: 'main.ts',
            body: {
              renderer: 'html',
              style: {
                marginTop: '-15px',
              },
              html: `<pre>${allImport}</pre>`
            }
          },
          {
            label: 'App.vue',
            body: {
              renderer: 'html',
              style: {
                marginTop: '-30px',
              },
              html: `<pre>${allApp}</pre>`
            }
          }
        ]
      },
      {
        renderer: 'html',
        html: tokens.part
      },
      {
        renderer: 'tabs',
        style: {
          marginTop: '20px',
          padding: '0 20px',
          background: 'var(--el-fill-color-light)',
          fontWeight: 'bold',
        },
        panels: [
          {
            label: 'main.ts',
            body: {
              renderer: 'html',
              style: {
                marginTop: '-15px',
              },
              html: `<pre>${partImport}</pre>`
            }
          },
          {
            label: 'App.vue',
            body: {
              renderer: 'html',
              style: {
                marginTop: '-30px',
              },
              html: `<pre>${partApp}</pre>`
            }
          },
          {
            label: 'Editor.vue',
            body: {
              renderer: 'html',
              style: {
                marginTop: '-30px',
              },
              html: `<pre>${partEdit}</pre>`
            }
          }
        ]
      },
      {
        renderer: 'html',
        html: tokens.flexible
      },
      {
        renderer: 'tabs',
        style: {
          marginTop: '20px',
          padding: '0 20px',
          background: 'var(--el-fill-color-light)',
          fontWeight: 'bold',
        },
        panels: [
          {
            label: '/src/router.ts',
            body: {
              renderer: 'html',
              style: {
                marginTop: '-30px',
              },
              html: `<pre>${routerJs}</pre>`
            }
          },
          {
            label: '/src/pages/demo.ts',
            body: {
              renderer: 'html',
              style: {
                marginTop: '-30px',
              },
              html: `<pre>${demoJs}</pre>`
            }
          },
          {
            label: '/src/types/page.ts',
            body: {
              renderer: 'html',
              style: {
                marginTop: '-38px',
                lineHeight: '20px'
              },
              html: `<pre>${typePage}</pre>`
            }
          },
          {
            label: 'server api',
            body: {
              renderer: 'html',
              style: {
                marginTop: '-30px',
              },
              html: `<pre>${testJs}</pre>`
            }
          },
          {
            label: '/src/main.ts',
            body: {
              renderer: 'html',
              style: {
                marginTop: '-15px',
                minHeight: '200px',
                lineHeight: '200px',
                textAlign: 'center'
              },
              html: '略',
            }
          },
          {
            label: '/src/App.vue',
            body: {
              renderer: 'html',
              style: {
                marginTop: '-30px',
                minHeight: '200px',
                lineHeight: '200px',
                textAlign: 'center'
              },
              html: '略',
            }
          }
        ]
      },
      {
        renderer: 'html',
        html: tokens.tip
      },
      {
        renderer: 'html',
        html: tokens.end
      },
      {
        renderer: 'action',
        isText: true,
        type: 'info',
        text: tokens.schema,
        actionType: 'drawer',
        classname: 'appear',
        style: {
          position: 'fixed',
          top: '13px',
          right: '300px',
          fontSize: '12px',
          zIndex: 2025
        },
        body: {
          renderer: 'drawer',
          resizable: true,
          body: {
            renderer: 'code'
          }
        }
      },
      {
        renderer: 'wrapper',
        style: {
          position: 'fixed',
          top: '120px',
          right: '20px',
          width: '200px',
          zIndex: 10
        },
        body: {
          renderer: 'anchor',
          options: [
            {
              href: '/page/body/0',
              title: tokens.anchor[0],
            },
            {
              href: '/page/body/1',
              title: tokens.anchor[1],
            },
            {
              href: '/page/body/3',
              title: tokens.anchor[2],
            },
            {
              href: '/page/body/4',
              title: tokens.anchor[3],
            },
            {
              href: '/page/body/6',
              title: tokens.anchor[4],
            },
            {
              href: '/page/body/8',
              title: tokens.anchor[5],
            },
            {
              href: '/page/body/11',
              title: tokens.anchor[6],
            }
          ],
          target: '.i-renderer-app__container',
          bound: 120
        }
      }
    ]
  };
}