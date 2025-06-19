import {createApp} from 'vue';
import ElementPlus from 'element-plus';
import {IRenderer} from  '../utils/lib.js';
import Application from '../apps/Editing.vue';
import registrySw from '../registerServiceWorker';
import '../utils/debug';

import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css';
import 'i-renderer/dist/css/index.css';

const app = createApp(Application);
const isGPOrDev = process.env.VUE_APP_API_NODE_ENV === 'gp' || process.env.VUE_APP_API_NODE_ENV === 'dev';
app
  .use(ElementPlus)
  .use(IRenderer, {
    adaptor: {
      req: `if (${isGPOrDev} && url.includes("/api/page")) {\n  req.url = req.url + ".json";\n}\n else if (${isGPOrDev} && url.includes("/api/mock")) {\n  let l = url.split("/api/mock")[1].split("/").filter(i => i).join("-") + ".json";\n  req.url = "/api/mock/" + l;\n} else if (${isGPOrDev} && url.includes("/api")) {\n  req.url = req.url + ".json";\n}`,
      res: `if (${isGPOrDev} && url.includes("/api/mock")) {\n  let exp = res.data.schema;\n  const regex =\n    /^\\s*(?:\\(([^)]*)\\)|([^=\\s]+))\\s*=>\\s*(?:\\{([\\s\\S]*?)\\}|([^\\n]*))\\s*$/;\n  const match = exp.match && exp.match(regex);\n  let functionBody = exp;\n  if (match && match.length > 1) {\n    functionBody = match[3].trim();\n    try {\n      const fun = new Function("_req", "_res", functionBody);\n      res.data = fun({ params, query: params }, res);\n    } catch (error) {\n      res.data = error;\n    }\n  }\n}`
    }
  })
  .mount('.i-website-app__container');

registrySw(process.env.VUE_APP_SERVICE_WORKER, app);