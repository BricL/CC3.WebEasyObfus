import { Scene, Component, Node, Prefab } from 'cc';
import { IOptionBase } from '../../../../../@types/private';
type CompPrefabInfo = Prefab._utils.CompPrefabInfo;
declare const CompPrefabInfo: typeof Prefab._utils.CompPrefabInfo;
interface IComponentPrefabData {
    prefabInfo: CompPrefabInfo | null;
}
interface IRemovedComponentInfo {
    nodeUUID: string;
    compIndex: number;
    compData: Component;
}
/**
 * Component 相关的操作
 */
declare class ComponentOperation {
    isRevertingRemovedComponents: boolean;
    isRemovingMountedComponents: boolean;
    private compMap;
    cacheComp(comp: Component): void;
    getCachedComp(uuid: string): Component;
    clearCompCache(): void;
    onAddComponent(comp: Component): void;
    onComponentAdded(comp: Component, opts: IOptionBase): void;
    onRemoveComponentInGeneralMode(comp: Component, rootNode: Node | Scene | null): void;
    private onPrefabComponentRemoved;
    onComponentRemovedInGeneralMode(comp: Component, rootNode: Node | Scene | null): void;
    /**
     * 将PrefabInstance上删除的组件应用到PrefabAsset中
     * @param nodeUUID 节点的uuid
     * @param fileID component的fileID
     */
    doApplyRemovedComponent(nodeUUID: string, fileID: string): Promise<null | IRemovedComponentInfo>;
    /**
     * undo ApplyRemovedComponent 操作
     * @param IRemovedComponentInfo 移除的component信息
     */
    undoApplyRemovedComponent(removedCompInfo: IRemovedComponentInfo): Promise<void>;
    applyRemovedComponent(nodeUUID: string, fileID: string): Promise<void>;
    cloneComponentToNode(node: Node, clonedComp: Component): Promise<void>;
    /**
     * 撤销 removedComponent，会将PrefabAsset中的Component还原到当前节点上
     * @param nodeUUID node的UUID
     * @param fileID component的fileID
     */
    revertRemovedComponent(nodeUUID: string, fileID: string): Promise<void>;
    updateMountedComponents(node: Node): null | undefined;
    applyMountedComponents(node: Node): Map<string[], IComponentPrefabData> | undefined;
}
declare const componentOperation: ComponentOperation;
export { componentOperation, IComponentPrefabData, IRemovedComponentInfo };
//# sourceMappingURL=component.d.ts.map