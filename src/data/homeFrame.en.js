export default {
  renderer: 'admin',
  name: 'HomeAdmin',
  classname: 'i-home__page',
  logo: 'https://songshuzhong.github.io/i-assets/public/img/shuttle.png',
  title: 'BaiDa Cloud Platform', // 百搭云平台
  layout: 'horizontal',
  menu: {
    renderer: 'menu',
    name: 'i-website-nav',
    router: true,
    ellipsis: false,
    defaultActive: '',
    body: [
      {
        name: '/',
        title: 'Home', // 首页
        renderer: 'menuitem',
        icon: 'HomeFilled'
      },
      {
        name: 'quickstart',
        title: 'Quick Start', // 快速开始
        renderer: 'menuitem',
        icon: 'LocationInformation'
      },
      {
        name: process.env.VUE_APP_PAGE_WEBSITE,
        title: 'Cases', // 案例合集
        renderer: 'menuitem',
        icon: 'DataBoard',
        extra: true
      },
      {
        name: 'logs',
        title: 'Changelog', // 更新日志
        renderer: 'menuitem',
        icon: 'Tickets'
      },
      {
        name: 'quality',
        title: 'Certifications', // 荣誉资质
        renderer: 'menuitem',
        icon: 'Aim'
      },
      {
        name: 'me',
        title: 'About Me', // 关于我
        renderer: 'menuitem',
        icon: 'Avatar',
        extra: true
      }
    ],
    tracks: {
      change: {
        trackId: 4,
        trackName: 'home_menu_change'
      }
    },
  },
  header: {
    renderer: 'header',
    body: [
      {
        renderer: 'setting',
        fields: {
          language: {
            options: [
              {
                text: '中文',
                value: 'zh'
              },
              {
                text: 'English',
                value: 'en'
              },
              {
                text: 'にほんご',
                value: 'ja'
              },
            ]
          }
        },
        labelPosition: 'left',
        style: {
          width: '200px',
          display: 'inline-block',
          marginTop: '0',
          transform: 'translateY(4px)',
        }
      },
      {
        renderer: 'dropdown',
        body: [
          {
            renderer: 'action',
            text: 'Ice Blue', // 冰河蓝染
            actionType: 'custom',
            isText: true,
            tag: 'div',
            content: 'const root = document.documentElement.style;\nroot.setProperty(\'--i-renderer-home-ball-color\', \'var(--el-color-primary-light-3)\');\nroot.setProperty(\'--i-renderer-home-particle-color\', \'var(--el-color-primary-light-7)\');\nroot.setProperty(\'--i-renderer-home-text-color\', \'var(--el-color-primary)\');',
            body: []
          },
          {
            renderer: 'action',
            text: 'Forest Dew', // 林间晨露
            tag: 'div',
            actionType: 'custom',
            isText: true,
            content: 'const root = document.documentElement.style;\nroot.setProperty(\'--i-renderer-home-ball-color\', \'var(--el-color-success-light-3)\');\nroot.setProperty(\'--i-renderer-home-particle-color\', \'var(--el-color-success-light-7)\');\nroot.setProperty(\'--i-renderer-home-text-color\', \'var(--el-color-success)\');'
          },
          {
            renderer: 'action',
            text: 'Flame Shadow', // 赤焰幻影
            isText: true,
            tag: 'div',
            actionType: 'custom',
            content: 'const root = document.documentElement.style;\nroot.setProperty(\'--i-renderer-home-ball-color\', \'var(--el-color-danger-light-3)\');\nroot.setProperty(\'--i-renderer-home-particle-color\', \'var(--el-color-danger-light-7)\');\nroot.setProperty(\'--i-renderer-home-text-color\', \'var(--el-color-danger)\');'
          }
        ],
        text: 'Theme', // 主题设置
        type: 'primary',
        size: 'medium',
        trigger: 'hover'
      }
    ]
  },
  body: {},
  footer: [
    {
      renderer: 'footer',
      classname: 'i-home__footer',
      body: [
        {
          renderer: 'wrapper',
          body: [
            {
              renderer: 'html',
              html: 'Links' // 链接
            },
            {
              renderer: 'action',
              isText: true,
              text: 'Code Repository', // 代码仓库
              actionType: 'url',
              url: 'https://songshuzhong.github.io/i-website/dist/index.html'
            },
            {
              renderer: 'action',
              isText: true,
              text: 'Changelog', // 更新日志
              actionType: 'url',
              url: 'https://songshuzhong.github.io/i-website/dist/index.html'
            },
            {
              renderer: 'action',
              isText: true,
              text: 'Design Philosophy', // 设计理念
              actionType: 'url',
              url: 'https://songshuzhong.github.io/i-website/dist/index.html'
            }
          ]
        },
        {
          renderer: 'wrapper',
          body: [
            {
              renderer: 'html',
              html: 'Related' // 相关
            },
            {
              renderer: 'action',
              isText: true,
              text: 'React',
              actionType: 'url',
              url: 'https://react.docschina.org/'
            },
            {
              renderer: 'action',
              isText: true,
              text: 'Vue',
              actionType: 'url',
              url: 'https://cn.vuejs.org/index.html'
            }
          ]
        },
        {
          renderer: 'wrapper',
          body: [
            {
              renderer: 'html',
              html: 'Contact' // 联系
            },
            {
              renderer: 'action',
              isText: true,
              text: 'QQ: 1462026137',
              actionType: 'copy',
              content: '1462026137'
            },
            {
              renderer: 'action',
              isText: true,
              text: 'Phone: 15510351839',
              actionType: 'copy',
              content: '15510351839'
            },
            {
              renderer: 'action',
              isText: true,
              text: 'E-mail: sshuzhong@outlook.com',
              actionType: 'mail'
            }
          ]
        }
      ]
    },
    {
      renderer: 'footer',
      classname: 'i-home__copyright',
      body: 'Copyright © 2022 sshuzhong@outlook.com'
    }
  ],
};