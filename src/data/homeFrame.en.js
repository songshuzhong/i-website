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
          clearable: false,
          size: 'default',
          label: '',
          prefix: [
            {
              d: 'M515.072 0a512 512 0 1 0 0.064 1024.064A512 512 0 0 0 515.072 0zM512 960A448 448 0 1 1 512 64a448 448 0 0 1 0 896z',
              fill: 'var(--el-text-color-regular)'
            },
            {
              d: 'M189.376 171.776c-17.28 86.016 47.04 217.536 183.808 249.536 136.704 32 77.952 5.376 56.704-37.312-21.376-42.688-2.24-74.688 30.848-85.312 33.152-10.688 24.768 18.752 73.92-42.688 12.416-128-94.208-1.728-104.832-55.04C535.424 78.272 380.8 32 335.936 48c-44.864 16-129.28 37.696-146.56 123.776zM439.872 492.416c-7.936 3.52-44.928 26.624-57.664 42.624-12.736 16-18.304 49.792 0 64 18.304 14.272-1.024 81.856 48.32 94.272 49.344 12.416 98.752 19.648 100.608 58.688 1.728 39.04-4.608 129.728-28.352 138.688 32 17.728 109.888-76.48 137.28-126.272 27.456-49.728 36.608-120.896 34.752-138.688-1.856-17.728 10.944-55.04 16.448-103.04 5.44-48-36.48-51.2-41.92-72.512-5.568-21.376-12.992-44.864-209.472 42.24zM840 256s-128.768 55.104-41.216 136.96c87.424 81.728 131.968 159.36 127.68 177.152-3.968 17.664-88.32 109.184-39.872 102.016 48.704-7.104 84.608-103.104 92.352-160.064 7.616-56.96-59.136-168.896-61.888-177.728-2.304-9.024-46.208-77.376-77.056-78.336z',
              fill: 'var(--el-text-color-regular)'
            }
          ],
          language: {
            clearable: false,
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
              text: 'mail: sshuzhong@outlook.com',
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