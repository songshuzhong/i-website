/* eslint-disable */
export default {
  "renderer": "page",
  "body": [
    {
      "renderer": "avatar",
      "src": `${process.env.VUE_APP_PUBLIC_PATH_HOME}/shuttle.png`,
      "classname": "i-login__logo",
      "previews": [],
      "title": "个人组件库分享",
      "shape": "square",
      "borderRadius": 0,
      "color": "#606266",
      "bgColor": "#ffffff"
    },
    {
      "renderer": "image",
      "src": `${process.env.VUE_APP_PUBLIC_PATH_HOME}/img/qqb.png`,
      "classname": "i-login__browser-star",
      "previews": []
    },
    {
      "renderer": "tabs",
      "panels": [
        {
          "label": "登录",
          "icon": "",
          "keepAlive": true,
          "body": [
            {
              "renderer": "form",
              "actionApi": {
                "url": "/api/auth/login",
                "method": "post",
                "params": {
                  "*": "*"
                }
              },
              "controls": [
                {
                  "renderer": "input",
                  "name": "namespace",
                  "placeholder": "命名空间（guest）",
                  "type": "text",
                  "minlength": 0,
                  "maxlength": 16,
                  "rules": [],
                  "requiredOn": "1==1",
                  "showWordLimit": true
                },
                {
                  "renderer": "input",
                  "name": "username",
                  "requiredOn": "1 === 1",
                  "placeholder": "用户名（guest）",
                  "type": "text",
                  "rules": [],
                  "minlength": 0,
                  "maxlength": 16,
                  "showWordLimit": true
                },
                {
                  "renderer": "input",
                  "name": "password",
                  "requiredOn": "1 === 1",
                  "placeholder": "密码（_123456qwerty）",
                  "type": "password",
                  "rules": [
                    {
                      "type": "sw",
                      "trigger": "blur"
                    }
                  ]
                },
                {
                  "renderer": "input",
                  "name": "code",
                  "requiredOn": "1 === 1",
                  "placeholder": "验证码",
                  "type": "text",
                  "rules": [
                    {
                      "type": "exp",
                      "exp": "data.code !== data.verify",
                      "message": "验证码不正确",
                      "trigger": "blur"
                    }
                  ]
                },
                {
                  "renderer": "verify",
                  "name": "verify"
                },
                {
                  "renderer": "wrapper",
                  "body": [
                    {
                      "renderer": "action",
                      "text": "忘记密码？",
                      "type": "success",
                      "isText": true,
                      "plain": true,
                      "tag": "div",
                      "body": {}
                    }
                  ],
                  "classname": "i-login_forget"
                },
                {
                  "renderer": "action",
                  "text": "登录",
                  "actionType": "login",
                  "type": "primary",
                  "body": {}
                },
                {
                  "renderer": "action",
                  "text": "游客访问(免密码)",
                  "actionType": "visitor",
                  "classname": "i-login__visitor",
                  "type": "success",
                  "plain": true,
                }
              ]
            }
          ]
        },
        {
          "label": "注册",
          "icon": "",
          "keepAlive": true,
          "body": [
            {
              "renderer": "form",
              "actionApi": {
                "url": "/api/user",
                "method": "post",
                "params": {
                  "*": "*"
                }
              },
              "redirect": "localhost/login",
              "controls": [
                {
                  "renderer": "input",
                  "name": "namespace",
                  "placeholder": "命名空间（瓜子花生工作室）",
                  "type": "text",
                  "minlength": 0,
                  "maxlength": 16,
                  "rules": [],
                  "requiredOn": "1==1",
                  "showWordLimit": true
                },
                {
                  "renderer": "input",
                  "name": "username",
                  "requiredOn": "1==1",
                  "placeholder": "用户名（令狐瓜子）",
                  "type": "text",
                  "minlength": 0,
                  "maxlength": 16,
                  "showWordLimit": true,
                  "rules": []
                },
                {
                  "renderer": "input",
                  "name": "email",
                  "placeholder": "邮箱",
                  "required": false,
                  "type": "text",
                  "validType": "normal",
                  "requiredOn": "1",
                  "rules": [
                    {
                      "exp": "!/^([a-zA-Z0-9]+[_|\\_|\\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\\_|\\.]?)*[a-zA-Z0-9]+\\.[a-zA-Z]{2,3}$/.test(data.email)",
                      "trigger": "blur",
                      "type": "exp"
                    },
                    {
                      "type": "api",
                      "trigger": "blur",
                      "exp": "/api/user/email/valid?email=${email}"
                    }
                  ],
                  "append": {
                    "renderer": "sendemail",
                    "classname": "verify"
                  }
                },
                {
                  "renderer": "action",
                  "name": "SendEmailAction",
                  "actionType": "ajax",
                  "text": "获取验证码",
                  "visibleOn": "1==2",
                  "actionApi": {
                    "url": "/api/email",
                    "method": "post",
                    "params": {
                      "*": "*"
                    }
                  },
                  "body": {}
                },
                {
                  "renderer": "input",
                  "name": "code",
                  "requiredOn": "1==1",
                  "placeholder": "验证码",
                  "type": "text",
                  "rules": []
                },
                {
                  "renderer": "input",
                  "name": "password",
                  "requiredOn": "1==1",
                  "placeholder": "密码",
                  "type": "text",
                  "showPassword": true,
                  "rules": [
                    {
                      "type": "exp",
                      "trigger": "blur",
                      "message": "密码必须相等",
                      "exp": "data.password !== data.repassword"
                    }
                  ]
                },
                {
                  "renderer": "input",
                  "name": "repassword",
                  "requiredOn": "1==1",
                  "placeholder": "确认密码",
                  "type": "text",
                  "showPassword": true,
                  "rules": [
                    {
                      "type": "exp",
                      "trigger": "blur",
                      "message": "密码必须相等",
                      "exp": "data.password !== data.repassword"
                    }
                  ]
                },
                {
                  "renderer": "action",
                  "text": "注册",
                  "actionType": "submit",
                  "body": {}
                }
              ]
            }
          ]
        },
        {
          "label": "会员权益",
          "icon": "",
          "keepAlive": false,
          "body": [
            {
              "renderer": "image",
              "src": `${process.env.VUE_APP_PUBLIC_PATH_HOME}/img/attitude.jpg`
            },
            {
              "renderer": "html",
              "classname": "i-login__attitude",
              "html": "成为会员后会获得组建团队、项目管理的能力"
            }
          ]
        }
      ],
      "activeTab": 0,
      "tabPosition": "top"
    }
  ],
  "worker": "e => {\n  let password = e.data.password;\n  let message = '';\n  let strength = 0;\n  if (password.length > 8) {\n    strength += 1;\n  }\n  if (password.match(/([a-z]+)/)) {\n    strength += 1;\n  }\n  if (password.match(/([A-Z]+)/)) {\n    strength += 1;\n  }\n  if (password.match(/([0-9]+)/)) {\n    strength += 1;\n  }\n  if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {\n    strength += 1;\n  }\n  if (password.length > 12 && strength < 4) {\n    strength += 1;\n  }\n  switch(strength){\n    case 0:\n      message = '密码过于简单';\n      break;\n    case 1:\n      message = '密码需要包含字母或数字';\n      break;\n    case 2:\n      message = '密码需要包含字母、数字和特殊字符';\n      break;\n    case 3:\n      message = '密码需要包含字母、数字、特殊字符和长度大于8位';\n      break;\n    case 4:\n      message = '密码符合要求';\n      break;\n    default:\n      message = '未知错误';\n  }\n  if (strength === 4) {\n    return Promise.resolve();\n  } else {\n    return Promise.reject({\n      message,\n      status: 'error'\n    });\n  }\n};"
}
