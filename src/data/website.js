/* eslint-disable */
export default {
  "renderer": "page",
  "body": [
    {
      "renderer": "tour",
      "name": "Tour",
      "showArrow": true,
      "mask": true,
      "showClose": true,
      "showIcon": true,
      "contentStyle": {
        "width": "28%"
      },
      "steps": [
        {
          "target": "/admin/menu",
          "title": "新手指引",
          "placement": "right-start",
          "body": {
            "renderer": "wrapper",
            "classname": "i-website-intro",
            "body": [
              {
                "renderer": "image",
                "src": `${process.env.VUE_APP_PUBLIC_PATH}/img/teacher20240603202012.png`,
                "classname": "i-website-intro__teacher",
                "previews": []
              },
              {
                "renderer": "static",
                "table": false,
                "column": 0,
                "width": 0,
                "columns": [
                  "第一步：项目立项(/系统配置/项目管理)",
                  "第二步：创建项目页面(/系统配置/页面管理)",
                  "第三步：编辑页面信息",
                  "第四步：发布上线"
                ]
              }
            ]
          }
        },
        {
          "target": "/admin/header/0/body/6",
          "title": "新手指引",
          "placement": "bottom-end",
          "body": {
            "renderer": "wrapper",
            "classname": "i-website-intro info2",
            "body": [
              {
                "renderer": "image",
                "src": `${process.env.VUE_APP_PUBLIC_PATH}/img/teacher20240603202001.png`,
                "classname": "i-website-intro__teacher",
                "previews": []
              },
              {
                "renderer": "html",
                "html": "<h3>点击编辑页面、查看源码</h3>"
              }
            ]
          }
        },
        {
          "target": "/page/body/3",
          "title": "新手指引",
          "placement": "top",
          "description": "",
          "body": {
            "renderer": "wrapper",
            "classname": "i-website-intro info3",
            "body": [
              {
                "renderer": "image",
                "src": `${process.env.VUE_APP_PUBLIC_PATH}/img/teacher20240604070713.png`,
                "classname": "i-website-intro__teacher",
                "previews": []
              },
              {
                "renderer": "html",
                "html": "<h3>祝您财源滚滚，万事胜意！！</h3>"
              }
            ]
          }
        }
      ]
    },
    {
      "renderer": "action",
      "immediateOn": !['dev', 'local'].includes(process.env.VUE_APP_API_NODE_ENV),
      "visibleOn": "1===2",
      "actionType": "trigger",
      "triggered": "Tour"
    },
    {
      "renderer": "card",
      "header": [
        {
          "renderer": "html",
          "html": "欢迎使用IRenderer",
          "inline": true,
          "classname": "font-size-20 font-weight-800"
        }
      ],
      "classname": "margin-bottom-20",
      "shadow": "always",
      "body": [
        {
          "renderer": "html",
          "html": "这是一款开箱即用的低代码前端开发工具库，同时它也经历过数十个真实项目的技术沉淀，确保框架在开发中可落地、可使用、可维护（注：在作者就职的公司，本框架已在电商、直播、OA、ERP等多个不同领域的中后台系统中应用并稳定运行）。"
        }
      ]
    },
    {
      "renderer": "wrapper",
      "body": [
        {
          "renderer": "html",
          "classname": "margin-bottom-10 padding-left-20",
          "html": "- 🤔 When you arise in the morning,think of what a precious privilege it is to be alive - to breathe,to think,to enjoy,to love. ~Marcus Aurelius."
        },
        {
          "renderer": "html",
          "classname": "margin-bottom-20 padding-left-20",
          "html": "- 😄 当你早晨起来的时候，想想活着是多么宝贵的特权——还能呼吸，还能思考，还能享受，还能去爱。~马尔克·奥列里乌斯。"
        },
      ]
    },
    {
      "renderer": "notice",
      "effect": "light",
      "direction": "vertical",
      "title": [
        "作者从事前端开发5年+，经验丰富",
        "项目历经数十个不同业务场景的打磨",
        "组件库丰富，渲染性能出众",
        "可视化编辑，无文档、无代码、无api",
        "长期维护、精益求精、客户至上"
      ]
    },
    {
      "renderer": "grid",
      "body": [
        {
          "renderer": "card",
          "style": {
            "margin-top": "20px"
          },
          "header": [
            {
              "renderer": "html",
              "html": "基础版",
              "classname": "font-size-16 text-center font-weight-600 margin-bottom-20"
            },
            {
              "renderer": "html",
              "html": "<span id=\"busuanzi_container_site_pv\">本站总访问量<span id=\"busuanzi_value_site_pv\"></span>次</span>",
              "classname": "font-size-14 text-center font-weight-400 margin-bottom-10"
            },
            {
              "renderer": "wrapper",
              "body": [
                {
                  "renderer": "action",
                  "text": "可视化编辑器",
                  "plain": true,
                  "static": true,
                  "actionApi": {
                    "url": "",
                    "method": "post",
                    "params": {}
                  },
                  "params": {},
                  "body": {}
                },
                {
                  "renderer": "action",
                  "text": "赠送VIP群",
                  "type": "success",
                  "plain": true,
                  "static": true,
                  "actionApi": {
                    "url": "",
                    "method": "post",
                    "params": {}
                  },
                  "params": {},
                  "body": {}
                },
                {
                  "renderer": "action",
                  "text": "提供发票",
                  "type": "warning",
                  "plain": true,
                  "static": true,
                  "actionApi": {
                    "url": "",
                    "method": "post",
                    "params": {}
                  },
                  "params": {},
                  "body": {}
                }
              ],
              "footer": [],
              "classname": "text-center"
            }
          ],
          "body": [
            {
              "renderer": "static",
              "table": false,
              "columns": [
                "默认基础库vue3.0+elementplus+echarts5.0",
                "提供开箱即用的项目模板",
                "提供可视化页面编辑器",
                "提供echarts编辑器",
                "支持api接口适配器",
                "支持样式自定义"
              ]
            }
          ],
          "footer": []
        },
        {
          "renderer": "card",
          "style": {
            "margin-top": "20px"
          },
          "header": [
            {
              "renderer": "html",
              "html": "专业版",
              "classname": "font-size-16 text-center font-weight-600 margin-bottom-20"
            },
            {
              "renderer": "html",
              "html": "<span id=\"busuanzi_container_site_uv\">本站访客数<span id=\"busuanzi_value_site_uv\"></span>人次</span>",
              "classname": "font-size-14 text-center font-weight-400 margin-bottom-10"
            },
            {
              "renderer": "wrapper",
              "body": [
                {
                  "renderer": "action",
                  "text": "可视化编辑器",
                  "plain": true,
                  "static": true,
                  "actionApi": {
                    "url": "",
                    "method": "post",
                    "params": {}
                  },
                  "params": {},
                  "body": {}
                },
                {
                  "renderer": "action",
                  "text": "赠送VIP群",
                  "type": "success",
                  "plain": true,
                  "static": true,
                  "actionApi": {
                    "url": "",
                    "method": "post",
                    "params": {}
                  },
                  "params": {},
                  "body": {}
                },
                {
                  "renderer": "action",
                  "text": "提供发票",
                  "type": "warning",
                  "plain": true,
                  "static": true,
                  "actionApi": {
                    "url": "",
                    "method": "post",
                    "params": {}
                  },
                  "params": {},
                  "body": {}
                },
                {
                  "renderer": "action",
                  "text": "一对一答疑",
                  "type": "danger",
                  "plain": true,
                  "static": true,
                  "actionApi": {
                    "url": "",
                    "method": "post",
                    "params": {}
                  },
                  "params": {},
                  "body": {}
                }
              ],
              "footer": [],
              "classname": "text-center"
            }
          ],
          "body": [
            {
              "renderer": "static",
              "table": false,
              "columns": [
                "扩充非常用表单控件",
                "丰富常用第三方依赖",
                "集成fontawesome图标",
                "扩充主题库样式",
                "支持第三方组件扩展",
                "集成权限管理"
              ],
              "styleType": 1
            }
          ]
        }
      ],
      "span": "12",
      "gutter": 12
    },
    {
      "renderer": "grid",
      "span": "12",
      "gutter": 12,
      "body": [
        {
          "renderer": "card",
          "header": [
            {
              "renderer": "html",
              "html": "应用场景",
              "inline": true,
              "classname": "font-size-16 text-center font-weight-600"
            }
          ],
          "footer": [],
          "classname": "margin-bottom-20 margin-top-20",
          "body": [
            {
              "renderer": "static",
              "classname": "suitable-ul",
              "table": false,
              "column": 0,
              "width": 0,
              "columns": [
                "没有或缺少前端开发人员的小型公司",
                "公司内部使用的平台系统",
                "重功能轻UI、交互的项目",
                "业务逻辑偏向于增删改查的项目",
                "适用于项目多，周期短的紧急项目",
                "编程萌新、学生、网站开发爱好者"
              ]
            }
          ]
        },
        {
          "renderer": "carousel",
          "classname": "i-home__carousel margin-bottom-20 margin-top-20",
          "autoplay": true,
          "loop": true,
          "style": {
            "margin-top": "20px",
            "border-radius": "4px"
          },
          "body": [
            {
              "renderer": "image",
              "src": `${process.env.VUE_APP_PUBLIC_PATH}/img/case5.png`
            },
            {
              "renderer": "image",
              "src": `${process.env.VUE_APP_PUBLIC_PATH}/img/case7.png`
            },
            {
              "renderer": "image",
              "src": `${process.env.VUE_APP_PUBLIC_PATH}/img/case1.png`
            },
            {
              "renderer": "image",
              "src": `${process.env.VUE_APP_PUBLIC_PATH}/img/case6.png`
            },
            {
              "renderer": "image",
              "src": `${process.env.VUE_APP_PUBLIC_PATH}/img/case8.png`
            }
          ],
          "height": 340,
          "indicatorPosition": "none",
          "arrow": "always"
        }
      ]
    },
    {
      "renderer": "card",
      "header": [
        {
          "renderer": "html",
          "html": "使用方式",
          "inline": true,
          "classname": "font-size-16 text-center font-weight-600"
        }
      ],
      "footer": [],
      "classname": "margin-bottom-20",
      "body": [
        {
          "renderer": "html",
          "html": "<pre>// 安装\nnpm i \"i-renderer\";\n\n// 引入\nimport {IRenderer, Schema} from \"i-renderer\";\nimport \"i-renderer/dist/css/index.css\";\n\n// 使用\napp.use(IRenderer);</pre>"
        },
        {
          "renderer": "data",
          "initData": {
            "JSON": {
              "renderer": "page",
              "initData": {
                "name": "IRenderer"
              },
              "body": [
                {
                  "renderer": "html",
                  "html": "Hi,欢迎使用<%=$.name%>"
                }
              ]
            }
          }
        },
        {
          "renderer": "html",
          "html": "<pre>&lt;schema\n  :init-schema=\"JSON\"\n  :updatable=\"false\"\n  classname=\"i-renderer-schema__container\"\n/&gt;</pre>"
        }
      ]
    }
  ],
  "innerStyle": ".suitable-ul {\n  margin-bottom: 39px;\n}\n.el-button--primary {\n  position: relative;\n  &:before {\n    position: absolute;\n    top: -6px;\n    left: 0;\n    right: 0;\n    height: 64px;\n    display: block;\n    opacity: 1;\n    content: '';\n    background-size: 64px;\n    background: url(data:image/png;base64,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) no-repeat 50% 0;\n  }\n}"
}
