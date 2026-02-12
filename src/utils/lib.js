import IRenderer from 'i-renderer/dist/js/renderer';
import 'i-renderer/dist/css/index.css';

export const loadEn = () => import('i-renderer/dist/js/locale/en');
export const loadZh = () => import('i-renderer/dist/js/locale/zh');
export const loadJa = () => import('i-renderer/dist/js/locale/ja');
export const loadEditorEn = () => import('i-renderer/dist/js/locale/editor.en');
export const loadEditorZh = () => import('i-renderer/dist/js/locale/editor.zh');
export const loadEditorJa = () => import('i-renderer/dist/js/locale/editor.ja');
export const loadEditor = () => import('i-renderer/dist/js/editor');

export {IRenderer};
export {Schema, checkPermission, api} from 'i-renderer/dist/js/renderer';

/*import IRenderer from '../../../i-renderer/packages/renderer/index';
import '../../../i-renderer/packages/assets/styles/index.scss';

export const loadEn = () => import('../../../i-renderer/packages/locale/en');
export const loadZh = () => import('../../../i-renderer/packages/locale/zh');
export const loadJa = () => import('../../../i-renderer/packages/locale/ja');
export const loadEditorEn = () => import('../../../i-renderer/packages/locale/editor.en');
export const loadEditorZh = () => import('../../../i-renderer/packages/locale/editor.zh');
export const loadEditorJa = () => import('../../../i-renderer/packages/locale/editor.ja');
export const loadEditor = () => import('../../../i-renderer/packages/editor');

export {IRenderer};
export {Schema, checkPermission, api} from '../../../i-renderer/packages/renderer/index';*/
