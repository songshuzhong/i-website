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
          "title": "新手指引（页面所有元素、交互均由配置得来）",
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
                "renderer": "html",
                "table": false,
                "column": 0,
                "width": 0,
                "html": [
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
          "title": "新手指引（透过按钮可看到现象本质）",
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
      "renderer": "html",
      "inline": false,
      "style": {
        "padding": "20px 20px 10px 20px"
      },
      "html": "- 🤔 When you arise in the morning,think of what a precious privilege it is to be alive - to breathe,to think,to enjoy,to love. ~Marcus Aurelius."
    },
    {
      "renderer": "html",
      "inline": false,
      "style": {
        "padding": "0 20px 20px 20px"
      },
      "html": "- 😄 当你早晨起来的时候，想想活着是多么宝贵的特权——还能呼吸，还能思考，还能享受，还能去爱。~马尔克·奥列里乌斯。"
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
              "style": {
                "font-size": "16px",
                "text-align": "center",
                "font-weight": "600",
                "margin-bottom": "12px"
              }
            },
            {
              "renderer": "html",
              "html": "<span id=\"busuanzi_container_site_pv\">本站总访问量<span id=\"busuanzi_value_site_pv\"></span>次</span>",
              "style": {
                "font-size": "14px",
                "text-align": "center",
                "font-weight": "400",
                "margin-bottom": "10px"
              }
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
              "style": {
                "text-align": "center"
              },
            }
          ],
          "body": [
            {
              "renderer": "html",
              "style": {
                "lineHeight": "0.8rem",
                "fontWeight": 600,
                "fontSize": "16px"
              },
              "html": [
                "默认基础库vue3.0+elementplus+echarts5.0",
                "提供开箱即用的项目模板",
                "提供可视化页面编辑器",
                "提供echarts编辑器",
                "支持api接口适配器",
                "支持样式自定义"
              ]
            }
          ]
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
              "style": {
                "font-size": "16px",
                "text-align": "center",
                "font-weight": "600",
                "margin-bottom": "12px"
              }
            },
            {
              "renderer": "html",
              "html": "<span id=\"busuanzi_container_site_uv\">本站访客数<span id=\"busuanzi_value_site_uv\"></span>人次</span>",
              "style": {
                "font-size": "14px",
                "text-align": "center",
                "font-weight": "400",
                "margin-bottom": "10px"
              }
            },
            {
              "renderer": "wrapper",
              "style": {
                "text-align": "center"
              },
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
              ]
            }
          ],
          "body": [
            {
              "renderer": "html",
              "style": {
                "lineHeight": "0.8rem",
                "fontWeight": 600,
                "fontSize": "16px"
              },
              "html": [
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
          "renderer": "service",
          "classname": "margin-bottom-20 margin-top-20",
          "style": {
            "--i-field-color-desc": "red"
          },
          "initApi": {
            "url": "/api/mock/virtualTable",
            "method": "get"
          },
          "body": {
            "renderer": "form",
            "size": "small",
            "readOnly": true,
            "actionApi": {
              "url": "https://www.fastmock.site/mock/a93e0b29161761b8153cbc02db04c643/api/form/submit",
              "params": {
                "*": "*"
              },
              "method": "post"
            },
            "controls": [
              {
                "renderer": "table",
                "virtual": true,
                "name": "users",
                "label": "",
                "width": 670,
                "height": 360,
                "desc": "1000000条数据压测",
                "updateOnRowId": "uid",
                "hasPageInfo": false,
                "inherit": {
                  "type": "exclude",
                  "value": [
                    "users",
                    "count",
                    "me",
                    "names"
                  ]
                },
                "columns": [
                  {
                    "label": "",
                    "name": "id",
                    "width": 50
                  },
                  {
                    "name": "color",
                    "label": " 颜色",
                    "width": 70,
                    "body": {
                      "renderer": "colorpicker",
                      "name": "color",
                      "labelWidth": 0,
                      "teleported": true,
                      "showAlpha": false,
                      "editableOn": "$.isEditing"
                    }
                  },
                  {
                    "label": "输入框",
                    "name": "createdAt",
                    "body": {
                      "renderer": "input",
                      "name": "name",
                      "placeholder": "createdAt",
                      "labelWidth": 0,
                      "requiredOn": true,
                      "flexible": false,
                      "editableOn": "$.isEditing"
                    },
                    "flexGrow": 0,
                    "maxWidth": 120,
                    "width": 120
                  },
                  {
                    "label": "下拉框",
                    "name": "uid",
                    "body": {
                      "renderer": "select",
                      "name": "sex",
                      "teleported": true,
                      "labelWidth": 0,
                      "options": [
                        {
                          "text": "女",
                          "value": "0",
                          "disabledOn": ""
                        },
                        {
                          "text": "男",
                          "value": "1",
                          "disabledOn": ""
                        }
                      ],
                      "editableOn": "$.isEditing"
                    },
                    "width": 140
                  },
                  {
                    "name": "rate",
                    "label": " 数字",
                    "width": 140,
                    "header": [
                      {
                        "renderer": "tooltip",
                        "content": "配置过滤和气泡的表头",
                        "body": {
                          "renderer": "html",
                          "html": "评分",
                          "inline": true,
                          "style": {
                            "padding-right": "40px"
                          }
                        }
                      },
                      {
                        "renderer": "action",
                        "icon": "ZoomIn",
                        "popupType": "over",
                        "popperWidth": 250,
                        "popoverTitle": "请选择",
                        "footer": [
                          {
                            "renderer": "action",
                            "text": "取消筛选",
                            "isText": true,
                            "actionType": "trigger",
                            "triggered": "OverForm.reset",
                            "style": {
                              "margin-right": "28px"
                            }
                          },
                          {
                            "renderer": "action",
                            "text": "取消",
                            "type": "danger",
                            "plain": true
                          },
                          {
                            "renderer": "action",
                            "actionType": "trigger",
                            "triggered": "OverForm.submit",
                            "text": "确定"
                          }
                        ],
                        "category": "icon",
                        "size": 16,
                        "body": [
                          {
                            "renderer": "form",
                            "controls": [
                              {
                                "renderer": "select",
                                "name": "relation",
                                "multiple": false,
                                "options": [
                                  {
                                    "text": "等于",
                                    "value": "1",
                                    "disabledOn": ""
                                  },
                                  {
                                    "text": "大于",
                                    "value": "2",
                                    "disabledOn": ""
                                  },
                                  {
                                    "text": "小于",
                                    "value": "3",
                                    "disabledOn": ""
                                  },
                                  {
                                    "text": "不等于",
                                    "value": "4",
                                    "disabledOn": ""
                                  },
                                  {
                                    "text": "大于等于",
                                    "value": "5",
                                    "disabledOn": ""
                                  },
                                  {
                                    "text": "小于等于",
                                    "value": "6",
                                    "disabledOn": ""
                                  }
                                ],
                                "requiredOn": "1"
                              },
                              {
                                "renderer": "input",
                                "name": "relationValue",
                                "placeholder": "请输入",
                                "requiredOn": "1"
                              }
                            ],
                            "submitType": "target",
                            "target": "users",
                            "name": "OverForm"
                          }
                        ]
                      }
                    ],
                    "body": {
                      "renderer": "number",
                      "name": "rate",
                      "labelWidth": 0,
                      "editableOn": "$.isEditing"
                    }
                  },
                  {
                    "name": "date",
                    "label": " 日期",
                    "width": 160,
                    "body": {
                      "renderer": "datepicker",
                      "name": "date",
                      "labelWidth": 0,
                      "format": "YYYY-MM-DD",
                      "editableOn": "$.isEditing"
                    }
                  },
                  {
                    "body": [
                      {
                        "renderer": "switch",
                        "name": "isEditing",
                        "type": "icon",
                        "activeText": "CircleCloseFilled",
                        "inactiveText": "Edit",
                        "visibleOn": "!$.isEditing",
                        "size": "large"
                      },
                      {
                        "renderer": "action",
                        "icon": "DocumentChecked",
                        "actionType": "ajax",
                        "category": "icon",
                        "visibleOn": "$.isEditing",
                        "inherit": {
                          "deep": true
                        },
                        "popupType": "confirm",
                        "popoverTitle": "确定保存吗？",
                        "actionApi": {
                          "url": "/api/mock/user",
                          "method": "get",
                          "params": {
                            "*": "*"
                          }
                        }
                      },
                      {
                        "renderer": "action",
                        "category": "icon",
                        "icon": "Search",
                        "actionType": "dialog",
                        "body": {
                          "body": [
                            {
                              "renderer": "data"
                            }
                          ]
                        },
                        "inherit": {
                          "type": "replace",
                          "value": []
                        }
                      },
                      {
                        "renderer": "action",
                        "text": "回滚",
                        "actionType": "extends",
                        "triggered": "rollback",
                        "category": "icon",
                        "icon": "RefreshLeft",
                        "visibleOn": "$.isEditing",
                        "popupType": "confirm",
                        "popoverTitle": "确定放弃吗？",
                        "inherit": {
                          "deep": true
                        }
                      }
                    ],
                    "width": 100,
                    "fixed": "right",
                    "align": "center",
                    "label": "行为组",
                    "name": "updatedAt",
                    "classname": "actions"
                  }
                ]
              }
            ]
          }
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
                  "html": "Hi,欢迎使用${$.name}"
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
  innerStyle: ".i-crud__container__column.actions {\n  display: inline-flex;\n  justify-content: center;\n  gap: 10px;\n  .el-form-item {\n    display: block;\n  }\n  .i-action+.i-action {\n    margin-left: 0;\n  }\n}"
}
