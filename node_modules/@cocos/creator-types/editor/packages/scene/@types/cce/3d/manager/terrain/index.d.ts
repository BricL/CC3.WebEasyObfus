import EventEmitter from '../../../public/EventEmitter';
export declare class TerrainManager extends EventEmitter {
    editedComponents: any;
    selectedComponents: any;
    get name(): string;
    init(): void;
    /**
     * 显示编辑器小窗口
     */
    select(nodeUuid: string): void;
    unselect(nodeUuid: string): void;
    set isTerrainChange(val: boolean);
    get isTerrainChange(): boolean;
    onSculpt(node: any): void;
    /**
     * 关闭正在编辑的场景
     * 统一返回参数，与 saveAsset 一致
     * 0 ：Save
     * 1 : Don't Save
     * 2 : Cancel
     */
    close(): Promise<number>;
    /**
     * 统一对外的是否保存的对话框
     * @param file 地形资源文件路径
     * @param isClose 是否来自关闭地形编辑时的被动保存询问
     * dialogCode 主要收集是否有 Cancel 的情况
     */
    saveAssetDialog(file?: string, isClose?: boolean): Promise<number>;
    /**
     * 保存数据到地形资源
     * 0 ：Save
     * 1 : Don't Save
     * 2 : Cancel
     *
     */
    saveAsset(isClose: boolean | undefined, component: any): Promise<number>;
    /**
     * 序列化当前正在编辑的地形
     */
    serialize(component: any): any;
    /**
     * 地形资源被删除
     * @param uuid
     * @param info
     */
    onRemoveTerrain(uuid: string, info: any): void;
    addAssetToComp(assetUuid: string): Promise<void>;
}
declare const _default: TerrainManager;
export default _default;
//# sourceMappingURL=index.d.ts.map