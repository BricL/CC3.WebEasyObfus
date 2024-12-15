import { Node, Scene } from 'cc';
import type SceneManager from '../scene-manager';
import { SceneModeType } from '../../../facade/scene-facade-state-interface';
type UUIDMap = Map<string, string | UUIDMap>;
declare class SceneProxy {
    protected _sceneMgr: SceneManager;
    protected _sceneFacade: any;
    isOpen: boolean;
    protected _staging: any;
    rootUuid: string;
    protected _isSoftReloading: boolean;
    protected _needOneMoreReload: boolean;
    protected _PrefabUUIDMap: Map<string, UUIDMap>;
    constructor(sceneMgr: SceneManager, sceneFacade: any);
    /**
     * 打开资源
     *
     * @param {*} uuid : prefab 或 scene
     */
    open(uuid: string): Promise<boolean>;
    checkClose(): Promise<boolean>;
    /**
     * 关闭编辑模式
     */
    close(): Promise<boolean>;
    /**
     * 重新加载编辑模式
     */
    reload(): Promise<boolean>;
    /**
     * 重新软加载编辑模式
     */
    softReload(json?: any): Promise<boolean>;
    /**
     * 获取当前正在编辑的资源的序列化数据
     */
    serialize(): any;
    /**
     * 查询是否被修改
     *
     * @returns {boolean} 是否被修改
     */
    queryDirty(): Promise<boolean>;
    /**
     * 保存编辑模式正在编辑的东西
     */
    save(asNew?: boolean): Promise<any>;
    /**
     * 缓存编辑模式数据
     *
     */
    staging(): Promise<boolean>;
    /**
     * 还原编辑模式数据
     */
    restore(dump?: any): Promise<boolean>;
    /**
     * 退出编辑模式之后，还原了上一个编辑模式数据
     * 有时候需要在上一个编辑模式上保留一些数据
     * 这个方法的作用就是在上一个编辑模式上打补丁
     */
    patch(): Promise<boolean>;
    sendModeChangeMsg(modeName: SceneModeType): void;
    queryCurrentSceneUuid(): string;
    getRootNode(): Node | Scene | null;
    generatePrefabUUIDMap(node: Node, uuidMap: UUIDMap): void;
    /**
     * 由于动态加载Prefab会导致节点的uuid发生变化，为了保证编辑过程中节点的uuid不变
     * 节点id也会，所以也需要更新
     * 在softReload之前会存储prefab节点的uuid,以便之后还原
     * @param scene 场景数据
     */
    storePrefabUUID(scene: Scene): Map<any, any>;
    applyPrefabUUID(node: Node, uuidMap: UUIDMap | undefined): void;
    /**
     * 恢复Prefab的uuid
     * @param scene 场景数据
     */
    restorePrefabUUID(scene: Scene, prefabUUIDMap: UUIDMap): void;
    storeScenePrefabUUID(): void;
    restoreScenePrefabUUID(): void;
}
export default SceneProxy;
//# sourceMappingURL=scene-proxy.d.ts.map