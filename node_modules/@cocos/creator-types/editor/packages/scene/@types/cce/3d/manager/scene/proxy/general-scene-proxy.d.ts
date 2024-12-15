import SceneProxy from './scene-proxy';
import { Node } from 'cc';
declare class GeneralSceneProxy extends SceneProxy {
    current: string;
    private _sceneJustSaved;
    get name(): string;
    /**
     * 打开一个场景资源
     *
     * @param {*} uuid 场景的 uuid
     */
    open(uuid: string): Promise<boolean>;
    /**
     * 打开一个场景资源
     * @param uuid 场景的 uuid
     * @param closePreviousScene 是否需要关闭前一个场景
     */
    _open(uuid: string, closePreviousScene?: boolean): Promise<boolean>;
    _loadScene(uuid: string, json?: any): Promise<boolean>;
    _loadEmptyScene(): Promise<boolean>;
    _afterLoadScene(): Promise<void>;
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
    /**
     * 软刷新场景
     *
     * @returns {boolean} 是否刷新场景
     */
    softReload(json?: any): Promise<boolean>;
    /**
     * 序列化当前正在编辑的场景
     *
     * @returns {string} 场景序列化之后的字符串
     */
    serialize(check?: boolean): any;
    /**
     * 保存场景
     * @param asNew 是否另存场景
     * @param open 保存后是否打开新场景
     */
    save(asNew?: boolean, open?: boolean): Promise<string | undefined>;
    /**
     * 缓存当前正在编辑的场景
     *
     * @param {object} mode 即将打开的模式
     * @returns {boolean} 是否缓存成功
     */
    staging(): Promise<boolean>;
    /**
     * 还原当前正在编辑的场景
     *
     */
    restore(dump: any): Promise<boolean>;
    /**
     * 查询当前场景的 dirty 标记状态
     *
     * @returns {boolean} 是否被修改
     */
    queryDirty(): Promise<any>;
    queryCurrentSceneUuid(): string;
    getRootNode(): Node | null;
}
export default GeneralSceneProxy;
//# sourceMappingURL=general-scene-proxy.d.ts.map