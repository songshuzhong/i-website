export default {
  renderer: 'page',
  body: {
    renderer: 'service',
    classname: 'i-home__logs',
    initApi: {
      url: `${process.env.VUE_APP_PUBLIC_PATH}/api/logs.json`
    },
    body: [
      {
        renderer: 'divider',
        text: '更新日志'
      },
      {
        renderer: 'timeline',
        placement: 'top',
        body: [
          {
            renderer: 'wrapper',
            header: [
              {
                renderer: 'html',
                html: '版本：<%=data.version%>'
              }
            ],
            body: [
              {
                renderer: 'html',
                html: '<h3><%=data?.features?.length? "Features": ""%></h3>',
                inline: true
              },
              {
                renderer: 'each',
                name: 'features',
                body: '<%=$%>'
              },
              {
                renderer: 'html',
                html: '<h3><%=data?.bugs?.length? "bugs": ""%></h3>',
                inline: true
              },
              {
                renderer: 'each',
                name: 'bugs',
                body: '<%=$%>'
              },
              {
                renderer: 'html',
                html: '<h3><%=data?.refactors?.length? "refactors": ""%></h3>',
                inline: true
              },
              {
                renderer: 'each',
                name: 'refactors',
                body: '<%=$%>'
              }
            ],
            footer: []
          }
        ],
        size: 'large',
        hollow: true
      }
    ]
  }
};