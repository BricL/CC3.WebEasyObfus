import { SetPropertyOptions, MoveArrayOptions, RemoveArrayOptions, CutNodeOptions, PasteNodeOptions, CreateNodeOptions, RemoveNodeOptions, CreateComponentOptions, RemoveComponentOptions, ExecuteComponentMethodOptions, IAnimOperation, ExecuteSceneScriptMethodOptions, UnitTestInfo, QueryClassesOptions } from '../../../../@types/public';
import { AnimationOperationOptions, EditorCameraInfo, IChangeNodeOptions, ISceneUndoOptions } from '../../../../@types/private';
import ISceneFacade from '../../../../@types/scene-facade-interface';
import type PreviewPlay from '../manager/preview-play';
import { Node, Component } from 'cc';
import * as cc from 'cc';
import type { SceneUndoCommandID } from '../../export/undo';
import { IAssetInfo } from '@cocos/creator-types/editor/packages/asset-db/@types/public';
declare class SceneFacadeManager implements ISceneFacade {
    private _projectType;
    private _highQuality;
    private _facadeFSM;
    init(): Promise<void>;
    changeProjectMode(type: '3d' | '2d'): void;
    changeHighQuality(bool: boolean): void;
    onNativeConfigChange(value: string): Promise<void>;
    initManager(): Promise<void>;
    initEventListener(): void;
    /**
     * 处理 Webgl 丢失上下文丢失时，提示用户是否重启
     * @private
     */
    private addWebglcontextlostEventListener;
    /**
     * 退出命令，如果是场景模式，则返回 true
     * 其他模式，则执行退出模式操作，并返回 false
     */
    quitEditorCommand(): boolean;
    openScene(uuid: string): Promise<boolean>;
    private clear;
    beforeClose(): Promise<boolean>;
    closeScene(): Promise<boolean>;
    dumpAllScenes(): Promise<any>;
    saveSceneConfig(): Promise<void>;
    onSceneOpened(scene: any): void;
    onSceneReload(scene: any): void;
    onSceneClosed(scene: any): void;
    onSceneSaved(scene: any): void;
    restoreAllScenes(dump: any[]): Promise<void>;
    saveScene(asNew?: boolean): Promise<boolean>;
    softReloadScene(json?: any): Promise<boolean>;
    reloadScene(): Promise<boolean>;
    queryNodeTree(uuid: string): Promise<any>;
    queryNodesByAssetUuid(uuid: string): Promise<string[]>;
    queryNodesMissAsset(): Promise<string[]>;
    querySceneSerializedData(): Promise<string>;
    querySceneDirty(): Promise<any>;
    queryClasses(options?: QueryClassesOptions): Promise<any>;
    queryComponents(): Promise<any>;
    queryComponentHasScript(name: string): Promise<boolean>;
    queryLayerBuiltin(): Promise<any>;
    querySortingLayerBuiltin(): Promise<any>;
    queryMode(): string;
    queryCurrentSceneUuid(): string;
    queryRecycleNode(uuid: string): Node | null;
    queryRecycleComponent(uuid: string): Component | null;
    onResize(opts: cc.ISizeLike): void;
    queryNodeDump(uuid: string): Promise<any>;
    setNodeProperty(options: SetPropertyOptions): Promise<boolean>;
    resetNode(uuid: string): Promise<boolean>;
    resetNodeProperty(options: SetPropertyOptions): Promise<boolean>;
    previewSetNodeProperty(options: SetPropertyOptions): Promise<boolean>;
    cancelPreviewSetNodeProperty(options: SetPropertyOptions): Promise<boolean>;
    updateNodePropertyFromNull(options: SetPropertyOptions): Promise<boolean>;
    setNodeAndChildrenLayer(options: SetPropertyOptions): void;
    moveNodeArrayElement(options: MoveArrayOptions): void;
    removeNodeArrayElement(options: RemoveArrayOptions): Promise<boolean>;
    generateNodeAvailableName(name: string, parentUuid?: string): Promise<string>;
    selectAllNodes(): void;
    copyNode(uuids: string | string[]): string[];
    duplicateNode(uuids: string | string[]): string[];
    duplicateCurrentSelectedProbes(): void;
    removeCurrentSelectedProbes(): void;
    cutNode(uuids: string | string[]): void;
    pasteNode(options: PasteNodeOptions): Promise<string[]>;
    setNodeParent(options: CutNodeOptions): Promise<string[]>;
    createNode(options: CreateNodeOptions): Promise<string>;
    removeNode(options: RemoveNodeOptions): void;
    changeNodeLock(uuid: string, locked: boolean, loop: boolean): Promise<void>;
    restorePrefab(uuid: string, assetUuid: string): Promise<boolean>;
    onNodeBeforeChanged(node: Node): void;
    onNodeChanged(node: Node, opts: IChangeNodeOptions): void;
    onBeforeNodeAdded(node: Node): void;
    onAddNode(node: Node): void;
    onRemoveNode(node: Node): void;
    onNodeAdded(node: Node, opts?: any): void;
    onNodeRemoved(node: Node, opts?: any): void;
    queryComponent(uuid: string): Promise<import("../../../../@types/public").IComponent | null>;
    queryComponentFunctionOfNode(uuid: string): Promise<any>;
    createComponent(options: CreateComponentOptions): void;
    resetComponent(uuid: string): void;
    removeComponent(options: RemoveComponentOptions): void;
    executeComponentMethod(options: ExecuteComponentMethodOptions): Promise<any>;
    executeSceneScriptMethod(options: ExecuteSceneScriptMethodOptions): Promise<any>;
    onAddComponent(comp: Component): void;
    onRemoveComponent(comp: Component): void;
    onComponentAdded(comp: Component, opts?: any): void;
    onComponentRemoved(comp: Component, opts?: any): void;
    snapshot(command?: any): Promise<void>;
    abortSnapshot(): Promise<void>;
    beginRecording(uuids: string | string[], options?: ISceneUndoOptions): SceneUndoCommandID;
    cancelRecording(commandId: SceneUndoCommandID): boolean;
    endRecording(commandId: SceneUndoCommandID): boolean;
    undo(): Promise<void>;
    redo(): Promise<void>;
    /**
     * @param node
     * @param enable
     */
    recordNode(node: Node, enable?: boolean): void;
    resetUndo(): void;
    changeTitle(): Promise<void>;
    queryAllEffects(): Promise<any>;
    queryMaterial(uuid: string): Promise<any>;
    queryEffect(effectName: string): Promise<any>;
    queryRenderPipeline(uuid: string): Promise<any>;
    previewMaterial(uuid: string, material: any, opts?: {
        emit?: boolean;
    }): Promise<void>;
    applyMaterial(uuid: string, materialDump: any): void;
    changePhysicsMaterial(dump: any): Promise<any>;
    applyPhysicsMaterial(uuid: string): Promise<void>;
    changeAnimationGraphVariant(dump: any): Promise<any>;
    applyAnimationGraphVariant(uuid: string): Promise<void>;
    changeAnimationMask(dump: any): Promise<any>;
    applyAnimationMask(uuid: string): Promise<void>;
    applyRenderTexture(uuid: string, userData: any): Promise<void>;
    changeRenderPipeline(dump: any): Promise<any>;
    applyRenderPipeline(uuid: string, renderPipelineDump: any): Promise<void>;
    queryPhysicsMaterial(uuid: string): any;
    queryAnimationGraphVariant(uuid: string): any;
    queryAnimationMask(uuid: string): any;
    queryCreatableAssetTypes(): any;
    assetChange(uuid: string, info?: any, meta?: any): Promise<void>;
    assetDelete(uuid: string, info: any): void;
    assetRefresh(uuid: string): void;
    releaseAsset(asset: string): void;
    gizmoRefreshConfig(): Promise<void>;
    queryGizmoToolName(): Promise<string>;
    queryGizmoPivot(): Promise<string>;
    queryGizmoCoordinate(): Promise<string>;
    queryIs2D(): Promise<boolean>;
    queryIsIconGizmo3D(): boolean;
    queryIconGizmoSize(): number;
    updateInnerTetrahedron(): void;
    setTransformToolName(name: string): void;
    setPivot(name: string): void;
    setCoordinate(type: string): void;
    setIs2D(value: boolean): void;
    setIconGizmo3D(is3D: boolean): void;
    setIconGizmoSize(size: number): void;
    setToolsVisibility3d(isVisibility: boolean): void;
    queryTransformSnapConfigs(): import("../../public/gizmos/manager/transform-tool").ISnapConfigData;
    setTransformSnapConfigs(name: string, value: any): void;
    queryRectSnappingConfigs(): number | boolean | import("../../public/gizmos/utils/rect-transform-snapping").IRectSnapConfigData;
    setRectSnappingConfigs(name: any, value: any): void;
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
    setCameraEnableAcceleration(enable: boolean): void;
    getCameraEnableAcceleration(): boolean;
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
    queryAuxCurveValueAtFrame(clipUuid: string, name: string, frame: number): any;
    recordAnimation(uuid: string, active: boolean, clipUuid?: string): Promise<boolean>;
    changeAnimationRootNode(uuid: string, clipUuid: string): Promise<boolean>;
    setCurEditTime(time: number): Promise<boolean>;
    changeClipState(operate: string, clipUuid: string): Promise<boolean>;
    setEditClip(clipUuid: string): Promise<boolean>;
    saveClip(): Promise<boolean>;
    applyAnimationOperation(operationList: IAnimOperation[], options?: AnimationOperationOptions): Promise<import("../../../../@types/public").IAniResultBase>;
    queryAnimationNodeEditInfo(uuid: string): IAniEditInfo;
    queryEnumListWithPath(path: string): readonly cc.__private._cocos_core_value_types_enum__Enum.Enumerator<any>[] | null;
    protected reloadAfterScriptChanged(): void;
    queryScriptName(uuid: string): Promise<any>;
    queryScriptCid(uuid: string): Promise<any>;
    loadScript(uuid: string): Promise<void>;
    removeScript(info: IAssetInfo): Promise<void>;
    scriptChange(info: IAssetInfo): Promise<void>;
    investigatePackerDriver(): Promise<any>;
    querySelection(): string[];
    isSelectNode(uuid: string): boolean;
    selectNode(uuid: string): void;
    unselectNode(uuid: string): void;
    clearSelection(): void;
    registerEffects(uuids: string[]): void;
    removeEffects(uuids: string[]): void;
    updateEffect(uuid: string): void;
    onRemoveTerrain(uuid: string, info: any): void;
    createPrefab(uuid: string, url: string): Promise<any>;
    getPrefabData(uuid: string): any;
    linkPrefab(nodeUuid: string, assetUuid: string): any;
    unlinkPrefab(nodeUuid: string, removeNested: boolean): any;
    applyPrefab(nodeUuid: string): Promise<boolean>;
    applyRemovedComponent(nodeUUID: string, fileID: string): Promise<void>;
    revertRemovedComponent(nodeUUID: string, fileID: string): Promise<void>;
    distributeSelectionUI(type: string): void;
    alignSelectionUI(type: string): void;
    queryParticlePlayInfo(uuid: string): any;
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
    changePreviewPlayState(state: boolean, sceneJson?: string): Promise<void>;
    callPreviewPlayMethod<T extends keyof typeof PreviewPlay>(method: T, ...args: Parameters<typeof PreviewPlay[T]>): Promise<any>;
    updatePhysicsGroup(): void;
    onEngineUpdate(): void;
    switchGraphicalTools(bool: boolean): void;
    changeTargetResolution(deviceName?: string, isDeviceRote?: boolean): Promise<void>;
    regeneratePolygon2DPoints(uuid: string): void;
    exportParticlePlist(uuid: string): Promise<any>;
    unitTest(testInfo: UnitTestInfo): Promise<boolean | undefined>;
    setSceneLightOn(enable: boolean): void;
    querySceneLightOn(): boolean;
    changeSceneViewVisible(visible: boolean): void;
    queryPreviewData(previewName: string, info: any): Promise<any>;
    callPreviewFunction(previewName: string, funcName: string, args: any[]): Promise<any>;
    queryThumbnail(uuids: string[], types?: string[]): Promise<string[]>;
    getCurrentFacade(): import("./scene-facade-state-interface").ISceneFacadeState;
    /**
     * @description debug view
     * @param key
     * @param value
     * */
    changeDebugOption(key: string, value: any): Promise<void>;
    forceUpdatePlugin(): void;
    initSceneConfig(): Promise<void>;
    syncAfterExitEditorPreview(): Promise<void>;
    private resetLightProbeEditMode;
    toggleLightProbeEditMode(mode: boolean): boolean;
    queryLightProbeEditMode(): boolean;
    toggleLightProbeBoundingBoxEditMode(mode: boolean): boolean;
    queryLightProbeBoundingBoxEditMode(): boolean;
    queryAuxiliaryCurves(clipUUID: string): Promise<Record<string, import("../../../../@types/public").IPropCurveDumpData>>;
}
export { SceneFacadeManager };
//# sourceMappingURL=scene-facade-manager.d.ts.map