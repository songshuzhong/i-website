import IRenderer from 'i-renderer/dist/js/renderer';
import 'i-renderer/dist/css/index.css';

export const loadEn = () => import('i-renderer/dist/js/locals/en');
export const loadZh = () => import('i-renderer/dist/js/locals/zh');
export const loadJa = () => import('i-renderer/dist/js/locals/ja');
export const loadEditor = () => import('i-renderer/dist/js/editor');

export {IRenderer};
export {Schema, checkPermission, api} from 'i-renderer/dist/js/renderer';