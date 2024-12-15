/// <reference path="../../../../../../../resources/3d/engine/bin/.declarations/cc.d.ts" />
/// <reference path="../../public/gizmos/utils/engine/3d.d.ts" />
/// <reference path="../../public/gizmos/manager/data.d.ts" />
/// <reference path="../manager/asset/asset-watcher.d.ts" />
/// <reference types="@cocos/creator-types/engine/cc" />
import { CreateComponentOptions, CreateNodeOptions, CutNodeOptions, ExecuteComponentMethodOptions, ExecuteSceneScriptMethodOptions, IAnimOperation, MoveArrayOptions, PasteNodeOptions, QueryClassesOptions, RemoveArrayOptions, RemoveComponentOptions, RemoveNodeOptions, SetPropertyOptions, EditorCameraInfo } from '../../../../@types/public';
import { IAniResultBase, IChangeNodeOptions, IOptionBase, ISceneUndoOptions } from '../../../../@types/private';
import { ISceneFacadeState, SceneModeType } from './scene-facade-state-interface';
import SceneProxy from '../manager/scene/proxy/scene-proxy';
import { Component, ISizeLike, Node } from 'cc';
import { ISceneEvents } from '../manager/scene-events-interface';
import { TransformToolDataCoordinateType, TransformToolDataPivotType, TransformToolDataToolNameType } from '../../public/gizmos/manager/transform-tool';
import { IAssetInfo, IAssetMeta } from '@cocos/creator-types/editor/packages/asset-db/@types/public';
import { SceneUndoCommandID, ISceneUndoManager } from '../../export/undo/index';
export declare class GeneralSceneFacade implements ISceneFacadeState {
    protected _sceneMgr: import("../manager/scene/scene-manager").default;
    protected _cameraMgr: import("../manager/camera").Camera;
    protected _nodeMgr: import("../manager/node").NodeManager;
    protected _compMgr: import("../manager/component").CompManager;
    protected _assetMgr: import("../manager/asset").AssetManager;
    protected _gizmoMgr: import("../../public/gizmos/manager/gizmo").GizmoManager;
    protected _materialPreviewMgr: import("../manager/material-preview").MaterialPreview;
    protected _miniPreviewMgr: import("../manager/mini-preview").MiniPreview;
    protected _scriptMgr: import("../manager/scripts").ScriptManager;
    protected _previewMgr: import("../manager/preview").PreviewManager;
    protected _animationMgr: import("../manager/animation").AnimationManager;
    protected _selectionMgr: import("../manager/selection").SceneSelection;
    protected _effectMgr: import("../manager/effects").EffectManager;
    protected _terrainMgr: import("../manager/terrain").TerrainManager;
    protected _prefabMgr: import("../manager/prefab").PrefabManager;
    protected _engineMgr: import("../manager/engine").EngineManager;
    protected _pluginMgr: import("../manager/plugin").PluginManager;
    protected _uiMgr: import("../manager/ui").UIManager;
    protected _particleMgr: import("../manager/particle").ParticleManager;
    protected _lodMgr: import("../manager/lod").LODManager;
    protected _modelPreviewMgr: import("../manager/model-preview").ModelPreview;
    protected _meshPreviewMgr: import("../manager/mesh-preview").MeshPreview;
    protected _physics2DMgr: import("../manager/physics-2d").Physics2DManager;
    protected _particle2DMgr: import("../manager/particle-2d").Particle2DManager;
    protected _sceneProxy: SceneProxy;
    protected _recycleNode: Record<string, Node>;
    protected _recycleComponent: Record<string, Component>;
    fromState?: ISceneFacadeState;
    protected _undoMgr: ISceneUndoManager;
    isHold: boolean;
    modeName: SceneModeType;
    closeSceneWhenExit: boolean;
    protected _sceneEventListener: ISceneEvents[];
    init(): void;
    initEventListener(): void;
    enter(opts: any): Promise<void>;
    resetUndo(): void;
    exit(): Promise<void>;
    setCloseSceneWhenExit(): void;
    checkToClose(): Promise<boolean>;
    closeSceneState(): Promise<boolean>;
    stagingSceneState(): Promise<boolean>;
    fireCloseEvent(): void;
    openScene(uuid: string): Promise<boolean>;
    closeScene(): Promise<boolean>;
    saveScene(asNew: boolean): Promise<any>;
    dumpSceneState(): any;
    patchSceneState(): Promise<boolean>;
    restoreSceneState(dump?: any): Promise<boolean>;
    softReloadScene(json?: any): Promise<boolean>;
    reloadScene(): Promise<boolean>;
    queryNodeTree(uuid: string): Promise<any>;
    queryNodesByAssetUuid(uuid: string): Promise<void>;
    querySceneSerializedData(): Promise<string>;
    querySceneDirty(): Promise<boolean>;
    queryClasses(options?: QueryClassesOptions): Promise<{
        name: string;
    }[]>;
    queryComponents(): Promise<{
        name: any;
        cid: any;
        path: any;
        assetUuid: any;
    }[]>;
    queryComponentHasScript(name: string): Promise<boolean>;
    queryLayerBuiltin(): Promise<{
        name: string;
        value: any;
    }[]>;
    querySortingLayerBuiltin(): Promise<readonly import("cc").__private._cocos_sorting_sorting_layers__SortingItem[]>;
    /**
     * 查询当前正在编辑的模式名字
     */
    queryMode(): SceneModeType;
    queryCurrentSceneUuid(): string;
    dispatchEvents(eventName: keyof ISceneEvents, ...args: any[any]): void;
    onSceneOpened(scene: any): void;
    onSceneReload(scene: any): void;
    onSceneClosed(scene: any): void;
    onResize(opts: ISizeLike): void;
    queryRecycleNode(uuid: string): Node | null;
    queryRecycleComponent(uuid: string): Component | null;
    queryNodeDump(uuid: string): Promise<any>;
    queryComponentFunctionOfNode(uuid: string): Promise<any>;
    previewSetNodeProperty(options: SetPropertyOptions): Promise<boolean>;
    cancelPreviewSetNodeProperty(options: SetPropertyOptions): Promise<boolean>;
    setNodeProperty(options: SetPropertyOptions): Promise<boolean>;
    resetNode(uuid: string): Promise<boolean>;
    resetNodeProperty(options: SetPropertyOptions): Promise<boolean>;
    updateNodePropertyFromNull(options: SetPropertyOptions): Promise<boolean>;
    setNodeAndChildrenLayer(options: SetPropertyOptions): Promise<void>;
    moveNodeArrayElement(options: MoveArrayOptions): Promise<boolean>;
    removeNodeArrayElement(options: RemoveArrayOptions): Promise<boolean>;
    generateNodeAvailableName(name: string, parentUuid?: string): Promise<string>;
    selectAllNodes(): void;
    copyNode(uuids: string | string[]): string[];
    duplicateNode(uuids: string | string[]): string[];
    pasteNode(options: PasteNodeOptions): Promise<string[]>;
    setNodeParent(options: CutNodeOptions): Promise<string[]>;
    createNode(options: CreateNodeOptions): Promise<any>;
    removeNode(options: RemoveNodeOptions): Promise<void>;
    changeNodeLock(uuids: string | string[], locked: Boolean, loop: Boolean): Promise<void>;
    restorePrefab(uuid: string, assetUuid: string): Promise<boolean>;
    onNodeBeforeChanged(node: Node): void;
    onNodeChanged(node: Node, opts?: IChangeNodeOptions): void;
    onAddNode(node: Node): void;
    onRemoveNode(node: Node): void;
    onNodeAdded(node: Node, opts?: IOptionBase): void;
    onNodeRemoved(node: Node, opts: IOptionBase): void;
    queryComponent(uuid: string): Promise<import("../../../../@types/public").IComponent | null>;
    createComponent(options: CreateComponentOptions): void;
    resetComponent(uuid: string): Promise<void>;
    removeComponent(options: RemoveComponentOptions): Promise<void>;
    executeComponentMethod(options: ExecuteComponentMethodOptions): Promise<boolean>;
    executeSceneScriptMethod(options: ExecuteSceneScriptMethodOptions): Promise<any>;
    onAddComponent(comp: Component, opts?: IOptionBase): void;
    onRemoveComponent(comp: Component, opts?: IOptionBase): void;
    onComponentAdded(comp: Component, opts?: IOptionBase): void;
    onComponentRemoved(comp: Component, opts?: IOptionBase): void;
    snapshot(command?: any): Promise<void>;
    abortSnapshot(): void;
    beginRecording(uuids: string | string[], options?: ISceneUndoOptions): SceneUndoCommandID;
    cancelRecording(commandId: SceneUndoCommandID): boolean;
    endRecording(commandId: SceneUndoCommandID): boolean;
    undo(): Promise<void>;
    redo(): Promise<void>;
    recordNode(node: Node, enable?: boolean): void;
    queryAllEffects(): Promise<any>;
    queryMaterial(uuid: string): Promise<any>;
    queryEffect(effectName: string): Promise<any>;
    queryRenderPipeline(uuid: string): Promise<any>;
    changeRenderPipeline(dump: any): Promise<any>;
    applyRenderPipeline(uuid: string): Promise<void>;
    previewMaterial(uuid: string, material: any, opts?: {
        emit?: boolean;
    }): Promise<void>;
    applyMaterial(uuid: string, materialDump: any): Promise<void>;
    changePhysicsMaterial(dump: any): Promise<any>;
    applyPhysicsMaterial(uuid: string): Promise<void>;
    changeAnimationGraphVariant(dump: any): Promise<any>;
    applyAnimationGraphVariant(uuid: string): Promise<void>;
    changeAnimationMask(dump: any): Promise<any>;
    applyAnimationMask(uuid: string): Promise<void>;
    applyRenderTexture(uuid: string, userData: any): Promise<void>;
    queryPhysicsMaterial(uuid: string): Promise<any>;
    queryAnimationGraphVariant(uuid: string): Promise<any>;
    queryAnimationMask(uuid: string): Promise<any>;
    queryCreatableAssetTypes(): string[];
    assetChange(uuid: string, info: IAssetInfo, meta: IAssetMeta): Promise<void>;
    assetDelete(uuid: string, info: any): void;
    assetRefresh(uuid: string): void;
    gizmoRefreshConfig(): Promise<void>;
    queryGizmoToolName(): Promise<string>;
    queryGizmoPivot(): Promise<string>;
    queryGizmoCoordinate(): Promise<string>;
    queryIs2D(): Promise<boolean>;
    queryIsIconGizmo3D(): boolean;
    queryIconGizmoSize(): number;
    updateInnerTetrahedron(): void;
    setTransformToolName(name: TransformToolDataToolNameType): Promise<void>;
    setPivot(name: TransformToolDataPivotType): Promise<void>;
    setCoordinate(type: TransformToolDataCoordinateType): Promise<void>;
    setIs2D(value: boolean): Promise<void>;
    setIconGizmo3D(is3D: boolean): Promise<void>;
    setIconGizmoSize(size: number): Promise<void>;
    setToolsVisibility3d(visible: boolean): Promise<void>;
    focus(uuid?: string[] | null, editorCameraInfo?: EditorCameraInfo, immediate?: boolean): void;
    alignNodeToSceneView(uuids: string[]): void;
    queryIsGridVisible(): boolean;
    setGridVisible(visible: boolean): void;
    alignWithView(): void;
    alignViewWithNode(): void;
    setGridLineColor(color: number[]): void;
    getCameraProperty(): any;
    setCameraProperty(opts: any): void;
    resetCameraProperty(): void;
    getCameraWheelSpeed(): number;
    setCameraWheelSpeed(speed: number): void;
    getCameraWanderSpeed(): number;
    setCameraWanderSpeed(speed: number): void;
    zoomSceneViewUp(): void;
    zoomSceneViewDown(): void;
    resetSceneViewZoom(): void;
    toggleActiveSelectedNode(): void;
    toggleActiveUnselectedNode(): void;
    toggleActiveAllNodes(): void;
    queryCurrentAnimationState(): any;
    queryCurrentAnimationInfo(): any;
    queryAnimationRootNode(uuid: string): string;
    queryAnimationRootInfo(uuid: string): any;
    queryAnimationClipDump(nodeUuid: string, clipUuid: string): any;
    queryAnimationProperties(uuid: string): any;
    queryAnimationClipsInfo(nodeUuid: string): any;
    queryAnimationClipCurrentTime(clipUuid: string): number;
    queryAnimationPropValueAtFrame(clipUuid: string, nodePath: string, propKey: string, frame: number): any;
    queryAuxCurveValueAtFrame(clipUuid: string, name: string, frame: number): null;
    recordAnimation(uuid: string, active: boolean, clipUuid?: string): Promise<boolean>;
    changeAnimationRootNode(uuid: string, clipUuid: string): Promise<boolean>;
    setCurEditTime(time: number): Promise<boolean>;
    changeClipState(operate: string, clipUuid: string): Promise<boolean>;
    setEditClip(clipUuid: string): Promise<boolean>;
    saveClip(): Promise<boolean>;
    applyAnimationOperation(operationList: IAnimOperation[]): Promise<IAniResultBase>;
    queryAnimationNodeEditInfo(uuid: string): import("../../../../@types/public").IAniEditInfo;
    queryAuxiliaryCurves(clipUuid: string): Promise<Record<string, import("../../../../@types/public").IPropCurveDumpData>>;
    queryScriptName(uuid: string): Promise<any>;
    queryScriptCid(uuid: string): Promise<any>;
    loadScript(uuid: string): Promise<void>;
    removeScript(info: IAssetInfo): Promise<void>;
    scriptChange(info: IAssetInfo): Promise<void>;
    querySelection(): string[];
    isSelectNode(uuid: string): boolean;
    selectNode(uuid: string): void;
    unselectNode(uuid: string): void;
    clearSelection(): void;
    registerEffects(uuids: string[]): void;
    removeEffects(uuids: string[]): void;
    updateEffect(uuid: string): void;
    onRemoveTerrain(uuid: string, info: any): void;
    createPrefab(uuid: string, url: string): Promise<string | null | undefined>;
    getPrefabData(uuid: string): any;
    linkPrefab(nodeUuid: string, assetUuid: string): any;
    unlinkPrefab(nodeUuid: string, removeNested: boolean): any;
    doUnlinkPrefab(nodeUuid: string, removeNested: boolean): any;
    applyPrefab(nodeUuid: string): Promise<boolean>;
    distributeSelectionUI(type: string): void;
    alignSelectionUI(type: string): void;
    queryParticlePlayInfo(uuid: string): {
        speed: number;
        time: string;
        particle: number;
        isPlaying: boolean;
    } | null;
    setParticlePlaySpeed(uuid: string, speed: number): void;
    /**
     * 播放选中的粒子
     * @param uuid 粒子组件的 uuid
     */
    playParticle(): void;
    /**
     * 重新开始播放选中的粒子
     * @param uuid 粒子组件的 uuid
     */
    restartParticle(): void;
    /**
     * 暂停选中的粒子
     * @param uuid 粒子组件的 uuid
     */
    pauseParticle(): void;
    /**
     * 停止播放选中的粒子
     * @param uuid 粒子组件的 uuid
     */
    stopParticle(): void;
    applyCurrentCameraSize(uuid: Readonly<string>): number | null;
    insertLOD(lODGroupUUID: string, ...args: Parameters<import('cc').LODGroup['insertLOD']>): void;
    eraseLOD(lODGroupUUID: string, ...args: Parameters<import('cc').LODGroup['eraseLOD']>): void;
    updatePhysicsGroup(): Promise<void>;
    onEngineUpdate(): void;
    regeneratePolygon2DPoints(uuid: string): void;
    exportParticlePlist(uuid: string): Promise<any>;
    duplicateCurrentSelectedProbes(): void;
    removeCurrentSelectedProbes(): void;
    toggleLightProbeEditMode(mode: boolean | undefined): boolean;
    queryLightProbeEditMode(): boolean;
    toggleLightProbeBoundingBoxEditMode(mode: boolean | undefined): boolean;
    queryLightProbeBoundingBoxEditMode(): boolean;
    changeTitle(): Promise<void>;
}
export default GeneralSceneFacade;
//# sourceMappingURL=general-scene-facade.d.ts.map