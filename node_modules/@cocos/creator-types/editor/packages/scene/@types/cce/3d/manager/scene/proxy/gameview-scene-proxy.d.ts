import SceneProxy from './scene-proxy';
import { Node } from 'cc';
declare class GameviewSceneProxy extends SceneProxy {
    get name(): string;
    /**
     * 打开 gameview 编辑模式
     *
     * @param {string} uuid prefab 资源的 id
     * @returns {boolean} 是否打开成功
     */
    open(uuid: string): Promise<boolean>;
    /**
     * @returns {boolean} 是否关闭场景
     */
    close(): Promise<boolean>;
    /**
     *
     * @returns {boolean} 是否刷新场景
     */
    reload(): Promise<boolean>;
    /**
     * 软刷新场景
     *
     * @returns {boolean} 是否刷新成功
     */
    softReload(json?: any): Promise<boolean>;
    /**
     *
     * @param {object} mode 即将打开的模式
     * @returns {boolean} 是否缓存成功
     */
    staging(): Promise<boolean>;
    /**
     *
     * @returns {boolean} 是否还原成功
     */
    restore(dump?: any): Promise<boolean>;
    queryCurrentSceneUuid(): string;
    getRootNode(): Node;
}
export default GameviewSceneProxy;
//# sourceMappingURL=gameview-scene-proxy.d.ts.map