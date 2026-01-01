export default {
  name: 'AdminRouterView',
  classname: 'i-website__container',
  title: '百搭云平台',
  logo: `${process.env.VUE_APP_PUBLIC_PATH}/shuttle.png`,
  menu: {
    renderer: 'menu',
    name: 'IWebsiteNav',
    classname: 'i-website_menu-vertical',
    router: true,
    discolor: true,
    defaultActive: '',
    target: 'IWebsiteContainer',
    title: '',
    initApi: {
      url: '/api/menu'
    },
    tracks: {
      init: {
        trackId: 1,
        trackName: 'website_menu_init'
      },
      initSuccess: {
        trackId: 2,
        trackName: 'website_menu_init_success'
      },
      initError: {
        trackId: 3,
        trackName: 'website_menu_init_success'
      },
      change: {
        trackId: 4,
        trackName: 'website_menu_change'
      }
    },
    body: []
  },
  header: {
    renderer: 'header',
    classname: 'i-website__header',
    tags: true,
    body: [
      {
        renderer: 'service',
        classname: 'i-website__header__service',
        silentLoading: true,
        initApi: {
          url: '/api/user',
          cached: true
        },
        tracks: {
          init: {
            trackId: 5,
            trackName: 'website_user_service_init'
          },
          initSuccess: {
            trackId: 6,
            trackName: 'website_user_service_success'
          },
          initError: {
            trackId: 7,
            trackName: 'website_user_service_error'
          }
        },
        body: [
          {
            renderer: 'action',
            icon: 'HomeFilled',
            actionType: 'url',
            name: 'IWebsiteHome',
            category: 'icon',
            size: 18,
            url: process.env.VUE_APP_PAGE_HOME
          },
          {
            renderer: 'tomobile'
          },
          {
            renderer: 'action',
            icon: 'Bell',
            category: 'icon',
            size: 18,
            name: 'iWebsiteBell',
            popupType: 'over',
            popperWidth: '300px',
            body: {
              renderer: 'tabs',
              stretch: true,
              panels: [
                {
                  label: '通知',
                  body: [
                    {
                      renderer: 'each',
                      name: 'tasks',
                      body: {
                        renderer: 'action',
                        isText: true,
                        type: 'info',
                        text: '${data.title}'
                      }
                    }
                  ]
                },
                {
                  label: '待办',
                  icon: '',
                  header: {
                    renderer: 'badge',
                    value: '9',
                    body: '待办'
                  },
                  body: [
                    {
                      renderer: 'each',
                      name: 'notices',
                      body: {
                        renderer: 'action',
                        isText: true,
                        type: 'info',
                        text: '${data.title}'
                      }
                    }
                  ]
                }
              ],
              activeTab: 1,
              tabPosition: 'top'
            }
          },
          {
            renderer: 'action',
            icon: 'FullScreen',
            name: 'IWebsiteFullScreen',
            category: 'icon',
            size: 18,
            actionType: 'fullscreen'
          },
          {
            renderer: 'action',
            icon: 'Refresh',
            category: 'icon',
            size: 18,
            name: 'IWebsiteRefresh',
            actionType: 'reload',
            reload: 'AdminRouterView'
          },
          {
            renderer: 'action',
            icon: 'Setting',
            category: 'icon',
            size: 18,
            actionType: 'drawer',
            body: {
              width: 432,
              appendToBody: true,
              classname: 'i-website__setting__container',
              header: {
                renderer: 'notice',
                title: '菜单背景色修改后需刷新浏览器',
                type: 'info'
              },
              body: [
                {
                  renderer: 'setting'
                }
              ]
            }
          },
          {
            renderer: 'action',
            icon: 'Edit',
            category: 'icon',
            size: 18,
            name: 'IWebsiteEdit',
            actionType: 'drawer',
            trustOn: [
              8
            ],
            tracks: {
              clickBefore: {
                trackId: 8,
                trackName: 'website_edit_click_after'
              }
            },
            body: {
              width: 100,
              appendToBody: true,
              classname: 'i-website__drawer',
              body: [
                {
                  renderer: 'editor',
                  editable: true,
                  nimble: true,
                  isJson: false,
                  classname: 'i-website__json-editor'
                },
                {
                  renderer: 'action',
                  icon: 'Close',
                  category: 'icon',
                  size: 18,
                  classname: 'i-website__editor__close'
                }
              ]
            }
          },
          {
            renderer: 'action',
            category: 'image',
            icon: '${avatar}',
            popupType: 'over',
            popperWidth: '210px',
            popperClass: 'i-website__header__upload',
            body: {
              renderer: 'form',
              controls: [
                {
                  renderer: 'upload',
                  name: 'avatar',
                  preview: true,
                  validType: 'normal',
                  listType: 'picture-card',
                  rules: [
                    {
                      required: false
                    }
                  ],
                  autoUpload: false,
                  actionUrl: '/api/user/avatar',
                  limit: 1,
                  feedbackConfig: [],
                  accept: '.webp,.jpg,.png',
                  spliced: false,
                  astrict: {
                    maxByte: '2',
                    maxWidth: '32',
                    maxHeight: '32'
                  },
                  label: '',
                  data: {},
                  requiredOn: 'true'
                }
              ]
            }
          },
          {
            renderer: 'dropdown',
            text: '${$.username || "guest"}',
            popperClass: 'i-website__header__dropdown',
            name: 'IWebsiteDropdown',
            body: [
              {
                renderer: 'action',
                icon: 'HomeFilled',
                actionType: 'url',
                name: 'IWebsiteHome',
                text: '官网',
                url: 'localhost/home'
              },
              {
                renderer: 'action',
                icon: 'Refresh',
                text: '刷新',
                name: 'IWebsiteRefresh',
                actionType: 'reload',
                reload: 'AdminRouterView'
              },
              {
                renderer: 'action',
                icon: 'Setting',
                text: '设置',
                category: 'icon',
                size: 18,
                actionType: 'drawer',
                body: {
                  width: 30,
                  appendToBody: true,
                  title: '菜单背景色修改后需刷新浏览器',
                  body: [
                    {
                      renderer: 'setting'
                    }
                  ]
                }
              },
              {
                renderer: 'action',
                icon: 'Edit',
                text: '编辑',
                name: 'IWebsiteEdit',
                actionType: 'drawer',
                trustOn: [
                  -1,
                  -5,
                  0
                ],
                body: {
                  width: 100,
                  appendToBody: true,
                  classname: 'i-website__drawer',
                  body: [
                    {
                      renderer: 'editor',
                      editable: true,
                      isJson: false,
                      classname: 'i-website__json-editor'
                    }
                  ]
                }
              },
              {
                renderer: 'avatar',
                src: 'https://songshuzhong.github.io/i-website/dist/img/icons/favicon-32x32.png',
                title: '令狐瓜子',
                subTitle: 'sshuzhong@outlook.com',
                actions: [
                  {
                    renderer: 'action',
                    actionType: 'url',
                    url: '/system/profile'
                  }
                ]
              },
              {
                renderer: 'action',
                text: ' github',
                type: 'primary',
                isText: true,
                divided: true,
                icon: 'Files',
                actionType: 'url'
              },
              {
                renderer: 'action',
                text: ' 退出登录',
                type: 'primary',
                isText: true,
                icon: 'SwitchButton',
                actionType: 'logout',
                actionApi: {
                  url: '/logout'
                }
              }
            ]
          }
        ]
      }
    ]
  },
  body: {
    name: 'IWebsiteNav',
    classname: 'i-website__aside',
    body: [
      {
        renderer: 'wrapper',
        classname: 'i-website__ads',
        body: [
          {
            renderer: 'carousel',
            classname: 'i-home__carousel',
            autoplay: true,
            loop: true,
            body: [
              {
                renderer: 'render',
                body: [
                  {
                    innerHTML: '招租广告位1',
                    tag: 'span',
                    classname: 'i-render__container',
                    action: {
                      renderer: 'action',
                      actionType: 'ajax',
                      actionApi: {
                        url: 'https://www.fastmock.site/mock/a93e0b29161761b8153cbc02db04c643/api/ads_click?order=1',
                        method: 'get'
                      }
                    }
                  }
                ]
              },
              {
                renderer: 'render',
                body: [
                  {
                    innerHTML: '招租广告位2',
                    tag: 'span',
                    classname: 'i-render__container',
                    action: {
                      renderer: 'action',
                      actionType: 'ajax',
                      actionApi: {
                        url: 'https://www.fastmock.site/mock/a93e0b29161761b8153cbc02db04c643/api/ads_click?order=2',
                        method: 'get'
                      }
                    }
                  }
                ]
              },
              {
                renderer: 'render',
                body: [
                  {
                    innerHTML: '招租广告位3',
                    tag: 'span',
                    classname: 'i-render__container',
                    action: {
                      renderer: 'action',
                      actionType: 'ajax',
                      actionApi: {
                        url: 'https://www.fastmock.site/mock/a93e0b29161761b8153cbc02db04c643/api/ads_click?order=3',
                        method: 'get'
                      }
                    }
                  }
                ]
              }
            ],
            height: 140,
            indicatorPosition: 'none',
            arrow: 'always'
          }
        ]
      }
    ]
  },
  footer: 'copyright © 2022 sshuzhong@outlook.com'
};