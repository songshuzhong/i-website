import IRenderer from 'i-renderer/dist/js/renderer';

export const loadEditor = () => import(/* webpackChunkName:"editor",webpackPrefetch:false,webpackMode:"lazy" */'i-renderer/dist/js/editor');
export {IRenderer};
export {Schema, checkPermission, api} from 'i-renderer/dist/js/renderer';