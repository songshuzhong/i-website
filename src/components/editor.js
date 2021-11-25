import Toolmaker from '../../../umis-renderer/packages/editor/component/toolmaker.vue';
import AttrsEditor from '../../../umis-renderer/packages/editor/component/attrs-editor.vue';
import MisEditor from '../../../umis-renderer/packages/editor/component/editor.vue';
import MisPops from '../../../umis-renderer/packages/editor/component/pops.vue';

const requireAttrs = import.meta.globEager('../../../umis-renderer/packages/editor/attrs/**/*.js');

export default {
  install(app) {
    const misAttrs = {};

    Object.keys(requireAttrs).forEach(filePath => {
      const attrConfig = requireAttrs[filePath];
      let attrName = filePath.replace(/(.*\/)*([^.]+).*/gi, '$2');
      misAttrs[`mis-${attrName}`] = attrConfig;
    });
    [MisEditor, Toolmaker, AttrsEditor, MisPops].forEach(item => {
      app.component(item.name, item);
    });
    app.config.globalProperties.$misAttrs = misAttrs;
    console.log(app);
  }
};
