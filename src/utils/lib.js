import IRenderer from '../../../i-renderer/packages/renderer/index';

export const loadEditor = () => import('../../../i-renderer/packages/canvas/index');
export {IRenderer};
export {Schema, checkPermission, api} from '../../../i-renderer/packages/renderer/index';