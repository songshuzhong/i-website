const logs = [
  {
    timestamp: '2023-10-27',
    version: '1.0.1-bata.61',
    features: [
      '• 新增slider渲染器',
      '• combo延迟渲染'
    ],
    bugs: [
      '• 修复combo数据回填问题'
    ],
    refactors: [
      '• page渲染器移除联动配置',
      '• 优化夜间模式、编辑器切换动画',
      '• 优化联动报错信息'
    ]
  },
  {
    timestamp: '2023-10-27',
    version: '1.0.1-bata.60',
    features: [
      '• table新增sticky属性',
      '• video、chart延迟渲染',
      '• 新增sfc远程组件渲染能力'
    ],
    bugs: [
      '• action修复确认弹层上下文丢失'
    ],
    refactors: [
      '• 优化数据链逻辑',
      '• 优化数据监听'
    ]
  },
  {
    timestamp: '2023-09-24',
    version: '1.0.1-bata.48',
    features: [
      '• service支持配置多个api',
      '• switch增添button、checkbox类型',
      '• table增添异步展开行配置'
    ],
    refactors: [
      '• 优化cards骨架屏动画'
    ]
  },
  {
    timestamp: '2023-08-10',
    version: '1.0.1-bata.32',
    refactors: [
      '• 优化each、mapping、quickedit，统一name与keyword'
    ]
  },
  {
    timestamp: '2022-06-03',
    version: '1.0.1-bata.12',
    features: [
      '• 编辑器新增theme属性配置'
    ],
    bugs: [
      '• 修复请求拦截器参数获取不到问题',
      '• 修复tabs文字浮动问题'
    ]
  },
  {
    timestamp: '2022-05-27',
    version: '1.0.1-bata.9',
    features: [
      '• 图表组件支持联动配置'
    ],
    bugs: [
      '• 修复弹层按钮图片属性配置',
      '• 修复外部组件找不到问题'
    ],
    refactors: [
      '• 删除无用样式代码',
      '• 优化表单事件透传逻辑',
      '• 优化@vueuse引用方式'
    ]
  },
  {
    timestamp: '2022-05-13',
    version: '1.0.1-bata.8',
    features: [
      '• 添加权限管理指令',
      '• switch渲染器添加confirm配置'
    ],
    bugs: [
      '• 修复table渲染器索引异常',
      '• 修复tabs图标大小异常',
      '• 修复steps组件可视化编辑异常'
    ],
    refactors: [
      '• 优化属性编辑面板',
      '• 优化设置面板布局样式',
      '• 优化域名选择器',
      '• 优化quickedit校验逻辑',
      '• 删除插件渲染器，直接渲染库组件'
    ]
  },
  {
    timestamp: '2022-05-06',
    version: '1.0.1-bata.7',
    bugs: [
      '• 修复表单requiredOn重复回填',
      '• 修复菜单icon颜色异常',
      '• 修复可视化编辑器组件移动异常'
    ]
  },
  {
    timestamp: '2022-04-29',
    version: '1.0.1-bata.6',
    features: [
      '• 编辑器添加debug模块、数据分析模块',
      '• 添加iframe渲染器',
      '• 添加插件渲染器，以cdn引入第三方库组件'
    ],
    refactors: [
      '• 优化弹层实现逻辑',
      '• 优化Schema渲染器实现逻辑',
      '• 优化icon渲染器实现逻辑以支持font-awesome'
    ]
  },
  {
    timestamp: '2022-04-22',
    version: '1.0.1-bata.5',
    bugs: [
      '• 修复可视化编辑器表单面板行为限制'
    ],
    refactors: [
      '• 重构样式以部分适配移动端',
      '• 统一表单行为',
      '• 统一行为回调处理',
      '• 补充可视化编辑器提示信息'
    ]
  },
  {
    timestamp: '2022-03-25',
    version: '1.0.1-bata.4',
    bugs: [
      '• 修复卡片列表行更新问题',
      '• 修复表格分页适配异常',
      '• 修复图表循环更新问题'
    ],
    features: [
      '• 添加通用样式库',
      '• 添加邮件行为',
      '• 菜单组件支持接口配置',
      '• 单选框、分割线支持样式配置项',
      '• crud支持自动下一个功能'
    ]
  },
  {
    timestamp: '2022-03-18',
    version: '1.0.1-bata.3',
    bugs: [
      '• 视频渲染器支持刷新源'
    ],
    refactors: [
      '• 优化弹层加载逻辑',
      '• 优化表格、描述列表移动端适配',
      '• 优化事件处理',
      '• 优化表单校验',
      '• 优化输入框失焦触发表单请求逻辑',
      '• 优化可视化编辑器性能'
    ]
  },
  {
    timestamp: '2022-03-11',
    version: '1.0.1-bata.2',
    features: [
      '• 更新表单视图渲染器',
      '• 添加分片上传功能',
      '• 添加tree组件',
      '• combo渲染器支持选项卡模式',
      '• 菜单组件支持分组配置',
      '• 添加诺干常用案例'
    ]
  },
  {
    timestamp: '2022-03-04',
    version: '1.0.1-bata.1'
  }
];
const options = logs.map(i => ({text: i.version, value: i.version}));

export const pageData = {
  rows: logs
};
export default {
  renderer: 'page',
  initData: {
    selectedVersion: '1.0.1-bata.61'
  },
  body: [
    {
      renderer: 'html',
      html: '更新日志',
      style: {
        width: '55%',
        margin: 'auto',
        padding: '40px 20px 0 20px',
        fontSize: '24px',
        fontWeight: 'bold'
      },
    },
    {
      renderer: 'service',
      style: {
        width: '55%',
        margin: 'auto',
        padding: '30px 20px 0 20px'
      },
      body: [
        {
          renderer: 'html',
          html: '<strong>IRenderer</strong>在正常情况下使用<strong>每周</strong>发布策略，但关键的bug修复将需要热修复，所以实际发布版本<strong>可能</strong>每周超过1次。',
          style: {
            fontSize: '16px',
            marginBottom: '20px'
          }
        },
        {
          renderer: 'card',
          name: 'VersionDetails',
          visibleOn: '$.rows',
          header: [
            {
              renderer: 'form',
              controls: [
                {
                  renderer: 'select',
                  name: 'selectedVersion',
                  label: '选择版本:',
                  multiple: false,
                  target: 'VersionDetails',
                  options
                }
              ]
            }
          ],
          body: [
            {
              renderer: 'computed',
              useWorker: true,
              name: 'selectedDetails',
              deps: [
                'selectedVersion',
                'rows'
              ]
            },
            {
              renderer: 'wrapper',
              header: [
                {
                  renderer: 'html',
                  html: '时间：<%=data.timestamp%>'
                }
              ],
              body: [
                {
                  renderer: 'html',
                  html: '<h3><%=$?.features?.length? "Features": ""%></h3>',
                  inline: true
                },
                {
                  renderer: 'each',
                  name: 'features',
                  body: '<%=$%>'
                },
                {
                  renderer: 'html',
                  html: '<h3><%=$?.bugs?.length? "bugs": ""%></h3>',
                  inline: true
                },
                {
                  renderer: 'each',
                  name: 'bugs',
                  body: '<%=$%>'
                },
                {
                  renderer: 'html',
                  html: '<h3><%=$?.refactors?.length? "refactors": ""%></h3>',
                  inline: true
                },
                {
                  renderer: 'each',
                  name: 'refactors',
                  body: '<%=$%>'
                }
              ],
              footer: [],
              inherit: {
                type: 'deconstruct',
                value: [
                  'selectedDetails'
                ]
              },
              initData: {}
            }
          ],
        }
      ]
    }
  ],
  worker: 'e => {\n  if (e.track === \'/page/body/1/body/1/body/0\') {\n    let details = null;\n    for (let i = 0; i < e.data.rows.length; i++) {\n      if (e.data.rows[i].version === e.data.selectedVersion) {\n        details = e.data.rows[i];\n      }\n    }\n    return Promise.resolve(details);\n  }\n}'
};