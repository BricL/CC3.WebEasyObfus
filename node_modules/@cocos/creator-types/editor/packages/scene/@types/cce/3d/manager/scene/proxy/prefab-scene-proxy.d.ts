import SceneProxy from './scene-proxy';
import { Node } from 'cc';
declare class PrefabSceneProxy extends SceneProxy {
    current?: string;
    node: string;
    private _prefabJustSaved;
    get name(): string;
    /**
     * 打开 Prefab 编辑模式
     *
     * @param {string} uuid prefab 资源的 id
     * @returns {boolean} 是否打开成功
     */
    open(uuid: string): Promise<boolean>;
    _loadPrefabByData(uuid: string, prefab: any): Promise<boolean>;
    _sceneWrapCanvasNode(scene: any): Promise<any>;
    checkClose(): Promise<boolean>;
    /**
     * 关闭正在编辑的场景
     *
     * @returns {boolean} 是否关闭场景
     */
    close(): Promise<boolean>;
    /**
     * 刷新当前场景并且放弃所有修改
     *
     * @returns {boolean} 是否刷新场景
     */
    reload(): Promise<boolean>;
    private generateSceneAsset;
    /**
     * 软刷新场景
     *
     * @returns {boolean} 是否刷新成功
     */
    softReload(json?: any): Promise<boolean>;
    /**
     * 序列化当前正在编辑的场景
     *
     * @returns {string} prefab 序列化之后的数据
     */
    serialize(check?: boolean): string | object;
    /**
     * 保存 prefab 数据
     */
    save(asNew?: boolean): Promise<boolean | undefined>;
    /**
     * 缓存当前正在编辑的Prefab
     *
     * @param {object} mode 即将打开的模式
     * @returns {boolean} 是否缓存成功
     */
    staging(): Promise<boolean>;
    /**
     * 还原当前正在编辑的Prefab
     *
     * @returns {boolean} 是否还原成功
     */
    restore(dump?: any): Promise<boolean>;
    /**
     * 查询当前场景的 dirty 标记状态
     *
     * @returns {boolean} 是否被修改
     */
    queryDirty(): Promise<any>;
    queryCurrentSceneUuid(): string;
    getRootNode(): Node;
}
export default PrefabSceneProxy;
//# sourceMappingURL=prefab-scene-proxy.d.ts.map