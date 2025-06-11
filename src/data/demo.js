export default {
  renderer: 'page',
  body: [
    {
      renderer: 'html',
      html: '<h2>1.<%=data.title%></h2>'
    },
    {
      renderer: 'form',
      name: 'FormWithLinked',
      labelWidth: '100px',
      actionApi: {
        url: '/api/submit',
        method: 'post',
        params: {
          '*': '*'
        }
      },
      controls: [
        {
          renderer: 'divider',
          text: '复杂的显隐关系',
          body: [
            {
              renderer: 'tooltip',
              effect: 'dark',
              content: '合并数据 && 初始化显示',
              body: {
                renderer: 'action',
                text: '数据并合1',
                isText: true,
                actionType: 'sw',
                target: 'FormWithLinked'
              }
            },
            {
              renderer: 'tooltip',
              effect: 'dark',
              content: '合并数据 && 初始化隐藏',
              body: {
                renderer: 'action',
                text: '数据并合2',
                isText: true,
                actionType: 'sw',
                target: 'FormWithLinked'
              }
            }
          ]
        },
        {
          renderer: 'radio',
          name: 'type',
          label: '类型选择',
          inline: true,
          defaultValue: '1',
          options: [
            {
              text: '类型 1(必填)',
              value: '1'
            },
            {
              text: '类型 2(隐藏域)',
              value: '2'
            },
            {
              text: '类型 3(可用)',
              value: '3'
            },
            {
              text: '类型 4(显隐)',
              value: '4'
            }
          ],
          desc: '依赖关系异常的数据在合并到表单时不会被纠正依赖关系'
        },
        {
          renderer: 'select',
          initApi: {
            url: '/api/mock/dynamicSelect',
            method: 'get',
            params: {
              type: '${type}'
            }
          },
          deps: [],
          name: 'whatever',
          label: '联动api',
          multiple: false,
          maxCollapseTags: 1,
          options: []
        },
        {
          renderer: 'input',
          label: '类型2可见',
          hiddenOn: 'data.type != 2',
          name: 'hidden',
          desc: '类型不是2变成隐藏域（值保留）'
        },
        {
          renderer: 'input',
          label: '类型3禁用',
          disabledOn: 'data.type == 3',
          name: 'disable'
        },
        {
          renderer: 'input',
          requiredOn: '$.type == 1',
          label: '类型1必填',
          name: 'require'
        },
        {
          renderer: 'input',
          visibleOn: '$.type == 4',
          label: '类型4显示',
          name: 'visible',
          desc: '类型4时显示，非4时消失（值不保留）'
        },
        {
          renderer: 'combo',
          label: '深层联动',
          name: 'multiple',
          labelWidth: '70px',
          defaultValue: [],
          extends: true,
          controls: [
            {
              renderer: 'radio',
              name: 'innerType',
              label: '深层类型',
              defaultValue: 0,
              options: [
                {
                  text: '无',
                  value: 0
                },
                {
                  text: '有',
                  value: 1
                }
              ]
            },
            {
              renderer: 'input',
              name: 'expose',
              label: '接口校验',
              visibleOn: '$.innerType',
              desc: '内层类型是0时消失',
              idem: true,
              rules: [
                {
                  type: 'api',
                  exp: '/api/mock/form/verify?asyncValid=${expose}'
                }
              ],
              flexible: false
            },
            {
              renderer: 'input',
              name: 'click',
              label: '点击',
              requiredOn: '$.type == 1',
              desc: '外层类型是1时必填',
              rules: [
                {
                  type: 'url',
                  message: '请输入正确的链接'
                }
              ]
            }
          ]
        },
        {
          renderer: 'action',
          text: 'submit',
          actionType: 'extends',
          triggered: 'submit',
          type: 'primary'
        },
        {
          renderer: 'action',
          text: 'reset',
          actionType: 'extends',
          triggered: 'reset',
          type: 'danger'
        },
        {
          renderer: 'action',
          text: '跳转到外链',
          actionType: 'url',
          type: 'warning',
          url: 'https://baidu.com/s?search=123',
          body: {},
          params: {
            blank: '1'
          }
        },
        {
          renderer: 'action',
          text: '弹个窗',
          type: 'success',
          icon: 'ChatLineSquare',
          actionType: 'dialog',
          body: {
            body: [
              {
                renderer: 'data'
              }
            ],
            fullscreen: false,
            center: false,
            closeOnClickModal: true,
            closeOnPressEscape: true
          }
        }
      ],
      style: {
        '--i-field-color-desc': 'var(--el-color-warning)'
      }
    },
    {
      renderer: 'html',
      html: '<h2>2.复杂的嵌套关系</h2>'
    },
    {
      renderer: 'tabs',
      panels: [
        {
          label: '直播方式',
          icon: '',
          body: [
            {
              renderer: 'form',
              controls: [
                {
                  renderer: 'radio',
                  name: 'type',
                  type: 'button',
                  target: 'LiveVideoTable',
                  options: [
                    {
                      text: '普通直播',
                      value: '1'
                    },
                    {
                      text: '控流直播',
                      value: '2'
                    },
                    {
                      text: '视频直播',
                      value: '3',
                      disabledOn: ''
                    },
                    {
                      text: '网页开播',
                      value: '4',
                      disabledOn: ''
                    }
                  ],
                  defaultValue: '3'
                }
              ],
              submitType: 'target',
              actionApi: {},
              target: 'LiveVideoTable'
            },
            {
              renderer: 'table',
              name: 'LiveVideoTable',
              showHeader: false,
              height: 181,
              columns: [
                {
                  label: 'id',
                  name: 'id',
                  sortable: false,
                  fixed: false,
                  type: '-',
                  align: 'none'
                },
                {
                  label: '文案',
                  name: 'text',
                  sortable: false,
                  fixed: false,
                  type: '-',
                  align: 'none'
                },
                {
                  label: '进度条',
                  sortable: false,
                  fixed: false,
                  type: '-',
                  align: 'none',
                  width: 200,
                  body: [
                    {
                      renderer: 'progress',
                      name: 'progress',
                      exp: 'data.progress',
                      status: 'success',
                      color: []
                    }
                  ],
                  name: 'progress'
                },
                {
                  label: '字典',
                  name: 'type',
                  sortable: false,
                  fixed: false,
                  type: '-',
                  align: 'none',
                  body: [
                    {
                      renderer: 'mapping',
                      name: 'type',
                      status: 'type',
                      optionConfig: {},
                      map: {
                        1: '第一个',
                        2: '第二个',
                        3: '第三个',
                        4: '第四个',
                        5: '第五个'
                      }
                    }
                  ]
                },
                {
                  label: '时间',
                  name: 'date',
                  sortable: false,
                  fixed: false,
                  type: '-',
                  align: 'none'
                },
                {
                  label: '音频',
                  name: 'audio',
                  sortable: false,
                  fixed: false,
                  type: '-',
                  align: 'none',
                  width: 330,
                  body: [
                    {
                      renderer: 'audio',
                      src: '${audio}',
                      preload: 'none'
                    }
                  ]
                },
                {
                  label: '图片',
                  name: 'image',
                  sortable: false,
                  fixed: false,
                  type: '-',
                  align: 'none',
                  width: 100,
                  body: [
                    {
                      renderer: 'image',
                      src: '${image}',
                      previews: []
                    }
                  ]
                },
                {
                  label: '状态',
                  name: 'boolean',
                  sortable: false,
                  fixed: false,
                  type: '-',
                  align: 'none'
                },
                {
                  label: '列表',
                  name: 'list',
                  sortable: false,
                  fixed: false,
                  type: '-',
                  align: 'none',
                  width: 200,
                  body: [
                    {
                      renderer: 'each',
                      body: [
                        {
                          renderer: 'html',
                          html: '<h1><%=data.title%></h1>',
                          inline: true
                        }
                      ],
                      name: 'list'
                    }
                  ]
                },
                {
                  label: '轮播',
                  name: 'carousel',
                  sortable: false,
                  fixed: false,
                  type: '-',
                  align: 'none',
                  width: 200,
                  body: [
                    {
                      renderer: 'wrapper',
                      inherit: {
                        type: 'include',
                        value: [
                          'carousel'
                        ]
                      },
                      body: [
                        {
                          renderer: 'carousel',
                          name: 'carousel',
                          body: [
                            {
                              renderer: 'image',
                              src: '${image1}'
                            },
                            {
                              renderer: 'html',
                              html: '<%=data.html%>'
                            },
                            {
                              renderer: 'image',
                              src: '${image2}'
                            }
                          ],
                          autoplay: false,
                          height: 100
                        }
                      ],
                      bodyClassname: 'big-table-carousel'
                    }
                  ]
                },
                {
                  label: '操作',
                  name: 'text',
                  sortable: false,
                  fixed: false,
                  type: '-',
                  align: 'none',
                  body: [
                    {
                      renderer: 'action',
                      text: '数据',
                      actionType: 'dialog',
                      body: {
                        body: [
                          {
                            renderer: 'data'
                          }
                        ]
                      },
                      isText: true
                    }
                  ]
                }
              ],
              actions: [],
              promiseType: 'single',
              initApi: {
                url: '/api/mock/bigTable',
                method: 'get',
                cached: false,
                params: {
                  type: '${type}',
                  timestamp: '${timestamp}'
                }
              }
            }
          ]
        },
        {
          label: '在线人数',
          icon: '',
          body: [
            {
              renderer: 'wrapper',
              initData: {
                names: 'renderer',
                users: [
                  {
                    name: 'song',
                    syncValid: 123,
                    sex: '0',
                    role: [],
                    connect: true,
                    mail: 'fasdgre@jl.com',
                    phone: '4665432465',
                    createdAt: 1,
                    adult: true,
                    color: '#BE3F1F',
                    textarea: '234',
                    updatedAt: 1,
                    richtxt: 'eee1',
                    rate: 1
                  },
                  {
                    name: 'shu',
                    syncValid: 123,
                    sex: '1',
                    role: [],
                    connect: false,
                    mail: 'fasdgre@jl.com',
                    phone: '4665432465',
                    createdAt: 2,
                    adult: false,
                    color: '#D6E810',
                    textarea: '234',
                    updatedAt: 2,
                    richtxt: 'eee2',
                    rate: 3
                  },
                  {
                    name: 'zhong',
                    syncValid: 123,
                    sex: '1',
                    role: [],
                    connect: false,
                    mail: 'fasdgre@jl.com',
                    phone: '4665432465',
                    createdAt: 3,
                    adult: true,
                    color: '#2817E5',
                    textarea: '234',
                    updatedAt: 3,
                    richtxt: 'eee3',
                    rate: 5
                  }
                ]
              },
              body: [
                {
                  renderer: 'form',
                  labelPosition: 'top',
                  actionApi: {
                    url: 'https://www.fastmock.site/mock/a93e0b29161761b8153cbc02db04c643/api/form/submit',
                    params: {},
                    method: 'post'
                  },
                  controls: [
                    {
                      renderer: 'input',
                      name: 'names',
                      label: '姓名',
                      tip: '请填写姓名',
                      desc: '当姓名不是[fe]时，提交行为会被阻断',
                      placeholder: '请填写姓名',
                      requiredOn: 1,
                      validType: 'normal',
                      flexible: false
                    },
                    {
                      renderer: 'table',
                      name: 'users',
                      label: '表格项',
                      tip: '双击行进行编辑',
                      desc: '双击行退出编辑时不会远程保存数据',
                      showExport: true,
                      height: 390,
                      initApi: {
                        url: '',
                        method: 'get',
                        params: {}
                      },
                      selectableOn: 'data.name!=\'1345\'',
                      columns: [
                        {
                          label: 'sex',
                          name: 'uid',
                          body: [
                            {
                              renderer: 'radio',
                              name: 'sex',
                              options: [
                                {
                                  text: '文案1',
                                  value: '0',
                                  disabledOn: ''
                                },
                                {
                                  text: '文案2',
                                  value: '1',
                                  disabledOn: ''
                                }
                              ],
                              editableOn: '$.editable'
                            }
                          ],
                          align: 'center',
                          width: '180px'
                        },
                        {
                          name: 'name',
                          label: ' rate',
                          align: 'right',
                          width: '160px',
                          body: [
                            {
                              renderer: 'rate',
                              name: 'rate',
                              allowHalf: false,
                              color: [],
                              texts: [],
                              showText: false,
                              showScore: true,
                              editableOn: '$.editable'
                            },
                            {
                              renderer: 'colorpicker',
                              name: 'color',
                              editableOn: '$.editable',
                              showAlpha: false
                            }
                          ],
                          header: [
                            {
                              renderer: 'tooltip',
                              content: '表头过滤',
                              body: {
                                renderer: 'html',
                                html: '表头过滤',
                                inline: true,
                                style: {
                                  'padding-right': '40px'
                                }
                              }
                            },
                            {
                              renderer: 'action',
                              icon: 'ZoomIn',
                              popupType: 'over',
                              popperWidth: 250,
                              popoverTitle: '请选择',
                              footer: [
                                {
                                  renderer: 'action',
                                  text: '取消筛选',
                                  isText: true,
                                  actionType: 'trigger',
                                  triggered: 'OverForm.reset',
                                  style: {
                                    'margin-right': '28px'
                                  }
                                },
                                {
                                  renderer: 'action',
                                  text: '取消',
                                  type: 'danger',
                                  plain: true
                                },
                                {
                                  renderer: 'action',
                                  actionType: 'trigger',
                                  triggered: 'OverForm.submit',
                                  text: '确定'
                                }
                              ],
                              category: 'icon',
                              size: 16,
                              body: [
                                {
                                  renderer: 'form',
                                  controls: [
                                    {
                                      renderer: 'select',
                                      name: 'relation',
                                      multiple: false,
                                      options: [
                                        {
                                          text: '等于',
                                          value: '1',
                                          disabledOn: ''
                                        },
                                        {
                                          text: '大于',
                                          value: '2',
                                          disabledOn: ''
                                        },
                                        {
                                          text: '小于',
                                          value: '3',
                                          disabledOn: ''
                                        },
                                        {
                                          text: '不等于',
                                          value: '4',
                                          disabledOn: ''
                                        },
                                        {
                                          text: '大于等于',
                                          value: '5',
                                          disabledOn: ''
                                        },
                                        {
                                          text: '小于等于',
                                          value: '6',
                                          disabledOn: ''
                                        }
                                      ],
                                      requiredOn: '1'
                                    },
                                    {
                                      renderer: 'input',
                                      name: 'relationValue',
                                      placeholder: '请输入',
                                      requiredOn: '1'
                                    }
                                  ],
                                  submitType: 'target',
                                  target: 'users',
                                  name: 'OverForm'
                                }
                              ]
                            }
                          ]
                        },
                        {
                          type: 'none',
                          align: 'center',
                          name: 'connect',
                          label: 'connect',
                          body: [
                            {
                              renderer: 'switch',
                              name: 'connect',
                              editableOn: '$.editable'
                            },
                            {
                              renderer: 'html',
                              html: '<%=\'connect: \' + $.connect%>'
                            },
                            {
                              renderer: 'computed',
                              name: '$relation',
                              useWorker: false,
                              exp: '$.relation',
                              deps: [
                                'relation'
                              ]
                            },
                            {
                              renderer: 'computed',
                              name: '$relationValue',
                              useWorker: false,
                              exp: '$.relationValue',
                              deps: [
                                'relationValue'
                              ]
                            },
                            {
                              renderer: 'computed',
                              name: '$index',
                              useWorker: false,
                              exp: '$.index',
                              deps: [
                                'index'
                              ]
                            },
                            {
                              renderer: 'switch',
                              name: 'editable',
                              hiddenOn: '1==1'
                            }
                          ],
                          width: '120px'
                        },
                        {
                          label: 'fe',
                          name: 'createdAt',
                          type: '',
                          align: 'center',
                          sortable: true,
                          body: [
                            {
                              renderer: 'input',
                              name: 'createdAt',
                              label: 'createdAt',
                              requiredOn: '1==1',
                              flexible: false,
                              editableOn: '$.editable'
                            },
                            {
                              renderer: 'input',
                              name: 'richtxt',
                              html: '<%=$.richtxt%>',
                              type: 'textarea',
                              flexible: false,
                              editableOn: '$.editable'
                            }
                          ],
                          width: '120px'
                        },
                        {
                          label: 'rd',
                          name: 'updatedAt',
                          type: '',
                          align: 'center',
                          width: '100px',
                          body: [
                            {
                              renderer: 'switch',
                              label: 'adult',
                              name: 'adult',
                              type: 'checkbox',
                              editableOn: '$.editable'
                            },
                            {
                              text: '<%=$.createdAt%>',
                              renderer: 'action',
                              isText: true,
                              actionType: 'dialog',
                              body: {
                                body: [
                                  {
                                    renderer: 'data'
                                  }
                                ]
                              },
                              inherit: {
                                type: 'replace',
                                value: []
                              },
                              initData: {}
                            }
                          ],
                          selectableOn: '',
                          sortable: true
                        },
                        {
                          header: [
                            {
                              renderer: 'action',
                              category: 'icon',
                              icon: 'Plus',
                              actionType: 'extends',
                              triggered: 'add'
                            }
                          ],
                          body: [
                            {
                              renderer: 'action',
                              icon: 'Delete',
                              actionType: 'extends',
                              triggered: 'delete',
                              popupType: 'dialog',
                              popoverTitle: '确定要删除吗？',
                              messageBoxExp: '$.createdAt==2',
                              popoverContent: '仅第二条记录允许删除',
                              disabledOn: '$.createdAt==3',
                              category: 'icon',
                              inherit: {
                                type: 'replace',
                                value: []
                              },
                              initData: {}
                            },
                            {
                              renderer: 'action',
                              category: 'icon',
                              icon: 'ArrowUpBold',
                              actionType: 'extends',
                              triggered: 'up'
                            },
                            {
                              renderer: 'action',
                              category: 'icon',
                              icon: 'ArrowDownBold',
                              actionType: 'extends',
                              triggered: 'down'
                            }
                          ],
                          width: '40px',
                          selectableOn: ''
                        }
                      ],
                      updateOnRowId: 'uid',
                      reactive: true,
                      target: 'editable',
                      linkedOn: 'data.createdAt == target.createdAt'
                    },
                    {
                      renderer: 'action',
                      text: '保存数据',
                      actionType: 'extends',
                      triggered: 'submit',
                      popupType: 'dialog',
                      messageBoxExp: '$.names === \'fe\'',
                      popoverTitle: '确定提交吗？',
                      popoverContent: '姓名不合法'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      activeIndex: 1,
      stretch: true,
      tabPosition: 'top',
      activeTab: 0
    }
  ],
  initData: {
    title: '欢迎体验，纵享丝滑',
    showForm: false
  },
  worker: '(e) => {\r\n  if (e.track == \'/page/body/1/controls/0/body/0/body\') {\r\n    return Promise.resolve({\r\n      "type": "4",\r\n      "whatever": "1",\r\n      "hidden": "22",\r\n      "disable": "2",\r\n      "require": "3",\r\n      "multiple": [\r\n        {\r\n          "innerType": 1,\r\n          "click": "16",\r\n          "expose": "45"\r\n        }],\r\n      "visible": "4"\r\n    });\r\n  } else if (e.track === \'/page/body/1/controls/0/body/1/body\') {\r\n    return Promise.resolve({\r\n      "type": "2",\r\n      "whatever": "11",\r\n      "hidden": "44",\r\n      "disable": "62",\r\n      "require": "93",\r\n      "multiple": [\r\n        {\r\n          "innerType": 0,\r\n          "click": "6"\r\n        }],\r\n      "visible": "4"\r\n    });\r\n  }\r\n}',
  mergeUrlQuery: true
};