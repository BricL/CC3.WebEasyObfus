import { Component, LODGroup, MeshRenderer, Node } from 'cc';
import { IChangeNodeOptions, IOptionBase } from '../../../../@types/private';
import { ISceneEvents } from './scene-events-interface';
export declare class LODManager implements ISceneEvents {
    private readonly _selectedUUIDs;
    private _selectedMeshRendererSet;
    private _selectedLODSet;
    _onSelect?: (uuid: string, uuids: string[]) => void;
    _onUnselect?: (uuid: string, uuids: string[]) => void;
    onResize?(opts: any): void;
    onSceneOpened?(scene: any): void;
    onSceneReload?(scene: any): void;
    onSceneClosed?(scene: any): void;
    onNodeChanged?(node: Node, opts: IChangeNodeOptions): void;
    onAddNode?(node: Node): void;
    onRemoveNode?(node: Node): void;
    onNodeAdded?(node: Node, opts: IOptionBase): void;
    onNodeRemoved?(node: Node, opts: IOptionBase): void;
    onAddComponent?(comp: Component): void;
    onRemoveComponent?(comp: Component): void;
    onComponentAdded?(comp: Component, opts?: IOptionBase): void;
    onComponentRemoved?(comp: Component, opts?: IOptionBase): void;
    onAssetDeleted?(uuid: string, info?: any): void;
    onAssetChanged?(uuid: string, info?: any, meta?: any): void;
    /** 使用当前摄像机中的屏占比 */
    applyCurrentCameraSize(uuid: Readonly<string>): number | null;
    onSelect(uuid: string, uuids: ReadonlyArray<string>): void;
    onUnselect(uuid: string, uuids: ReadonlyArray<string>): void;
    onSelectMeshRenderer(meshRenderer: MeshRenderer): void;
    onUnselectMeshRenderer(meshRenderer: MeshRenderer): void;
    onSelectLOD(lod: LODGroup): void;
    onUnselectLOD(lod: LODGroup): void;
    updateAllLODGroupLockedVisibility(): void;
    insertLOD(lODGroupUUID: string, ...args: Parameters<LODGroup['insertLOD']>): void;
    eraseLOD(lODGroupUUID: string, ...args: Parameters<LODGroup['eraseLOD']>): void;
    init(): void;
}
declare const _default: LODManager;
export default _default;
//# sourceMappingURL=lod.d.ts.map