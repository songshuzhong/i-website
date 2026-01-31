export default {
  renderer: 'admin',
  name: 'HomeAdmin',
  classname: 'i-home__page',
  logo: 'https://songshuzhong.github.io/i-assets/public/img/shuttle.png',
  title: '百搭云プラットフォーム',
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
        title: 'ホーム',
        renderer: 'menuitem',
        icon: 'HomeFilled'
      },
      {
        name: 'quickstart',
        title: 'クイックスタート',
        renderer: 'menuitem',
        icon: 'LocationInformation'
      },
      {
        name: process.env.VUE_APP_PAGE_WEBSITE,
        title: ' ケース集',
        renderer: 'menuitem',
        icon: 'DataBoard',
        extra: true
      },
      {
        name: 'logs',
        title: '更新ログ',
        renderer: 'menuitem',
        icon: 'Tickets'
      },
      {
        name: 'quality',
        title: '栄誉資格',
        renderer: 'menuitem',
        icon: 'Aim'
      },
      {
        name: 'me',
        title: '私について',
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
        fields: [
          'language'
        ],
        labelPosition: 'left',
        style: {
          width: '200px',
          display: 'inline-block',
          marginTop: '0',
          transform: 'translateY(4px)',
        },
        languages: [
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
      },
      {
        renderer: 'dropdown',
        body: [
          {
            renderer: 'action',
            text: '氷河ブルー',
            actionType: 'custom',
            isText: true,
            tag: 'div',
            content: 'const root = document.documentElement.style;\nroot.setProperty(\'--i-renderer-home-ball-color\', \'var(--el-color-primary-light-3)\');\nroot.setProperty(\'--i-renderer-home-particle-color\', \'var(--el-color-primary-light-7)\');\nroot.setProperty(\'--i-renderer-home-text-color\', \'var(--el-color-primary)\');',
            body: []
          },
          {
            renderer: 'action',
            text: '森の朝露',
            tag: 'div',
            actionType: 'custom',
            isText: true,
            content: 'const root = document.documentElement.style;\nroot.setProperty(\'--i-renderer-home-ball-color\', \'var(--el-color-success-light-3)\');\nroot.setProperty(\'--i-renderer-home-particle-color\', \'var(--el-color-success-light-7)\');\nroot.setProperty(\'--i-renderer-home-text-color\', \'var(--el-color-success)\');'
          },
          {
            renderer: 'action',
            text: '赤炎ファントム',
            isText: true,
            tag: 'div',
            actionType: 'custom',
            content: 'const root = document.documentElement.style;\nroot.setProperty(\'--i-renderer-home-ball-color\', \'var(--el-color-danger-light-3)\');\nroot.setProperty(\'--i-renderer-home-particle-color\', \'var(--el-color-danger-light-7)\');\nroot.setProperty(\'--i-renderer-home-text-color\', \'var(--el-color-danger)\');'
          }
        ],
        text: 'テーマ設定',
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
              html: 'リンク'
            },
            {
              renderer: 'action',
              isText: true,
              text: 'コードリポジトリ',
              actionType: 'url',
              url: 'https://songshuzhong.github.io/i-website/dist/index.html'
            },
            {
              renderer: 'action',
              isText: true,
              text: '更新ログ',
              actionType: 'url',
              url: 'https://songshuzhong.github.io/i-website/dist/index.html'
            },
            {
              renderer: 'action',
              isText: true,
              text: 'デザイン理念',
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
              html: '関連'
            },
            {
              renderer: 'action',
              isText: true,
              text: 'react',
              actionType: 'url',
              url: 'https://react.docschina.org/'
            },
            {
              renderer: 'action',
              isText: true,
              text: 'vue',
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
              html: '連絡先'
            },
            {
              renderer: 'action',
              isText: true,
              text: 'qq: 1462026137',
              actionType: 'copy',
              content: '1462026137'
            },
            {
              renderer: 'action',
              isText: true,
              text: '電話: 15510351839',
              actionType: 'copy',
              content: '15510351839'
            },
            {
              renderer: 'action',
              isText: true,
              text: 'e-mail: sshuzhong@outlook.com',
              actionType: 'mail'
            }
          ]
        }
      ]
    },
    {
      renderer: 'footer',
      classname: 'i-home__copyright',
      body: 'copyright © 2022 sshuzhong@outlook.com'
    }
  ],
};
