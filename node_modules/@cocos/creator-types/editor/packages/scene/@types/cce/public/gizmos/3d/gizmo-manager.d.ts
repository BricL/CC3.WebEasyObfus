/// <reference types="node" />
import { IChangeNodeOptions } from '../../../../../@types/private';
import { EventEmitter } from 'events';
import { Component, Node, Scene, Canvas } from 'cc';
import { TransformToolData, SnapConfigs, TransformToolDataToolNameType, TransformToolDataCoordinateType, TransformToolDataPivotType } from '../utils/transform-tool-data';
import GizmoBase from './elements/gizmo-base';
import { ISceneEvents } from '../../../3d/manager/scene-events-interface';
import IconGizmoBase from './elements/icon-gizmo/icon-gizmo-base';
import { IRectSnapConfigData } from '../utils/rect-transform-snapping';
import LightProbeEditModeListener from './elements/listener/light-probe-edit-mode-listener';
import TransformGizmo from './elements/transform/transform-gizmo';
import LightProbeGizmo from './elements/components/light/light-probe-gizmo';
import { NodeProbe } from './elements/controller/light-probe-controller';
declare module 'cc' {
    interface Node {
        gizmo: GizmoBase | null;
        iconGizmo: IconGizmoBase | null;
        persistentGizmo: GizmoBase | null;
        noNeedCommitChanges?: boolean;
    }
    interface Component {
        gizmo: GizmoBase | null;
        iconGizmo: IconGizmoBase | null;
        persistentGizmo: GizmoBase | null;
    }
}
export declare class GizmoManager extends EventEmitter implements ISceneEvents, LightProbeEditModeListener {
    static readonly GIZMO_CANVAS_NODE_NAME = "Gizmo Canvas Node";
    transformToolData: TransformToolData;
    private rootCanvas?;
    private rootCanvasNode?;
    private _isIconGizmoVisible;
    private _worldAxisController;
    private _sceneGizmoCamera;
    private gizmoRootNode;
    private _gizmoToolMap;
    private _selection;
    private _gizmosPool;
    private _iconGizmoPool;
    private _persistentGizmoPool;
    private _transformTool;
    /**
     * 存放探针编辑模式变化的监听器
     * 需要监听的gizmo需要自身实现下面接口
     * 其它监听器需要从数组头部插入
     * @see LightProbeEditModeListener
     * 注册方式位于
     * @see registerLightProbeEditModeListener
     */
    _lightProbeEditModeListener: LightProbeEditModeListener[];
    private _lightProbeEditMode;
    private _lightProbeBoundingBoxEditMode;
    queryToolName(): TransformToolDataToolNameType;
    setTransformToolName(name: TransformToolDataToolNameType): void;
    queryCoordinate(): TransformToolDataCoordinateType;
    setCoordinate(name: TransformToolDataCoordinateType): void;
    queryPivot(): TransformToolDataPivotType;
    setPivot(name: TransformToolDataPivotType): void;
    queryIs2D(): boolean;
    setIs2D(value: boolean): void;
    isIconGizmoVisible(): boolean;
    setIconGizmoVisible(value: boolean): void;
    isIconGizmo3D(): boolean;
    setIconGizmo3D(value: boolean): void;
    queryIconGizmoSize(): number;
    setIconGizmoSize(size: number): void;
    queryToolsVisibility3d(): boolean;
    setToolsVisibility3d(value: boolean): void;
    queryTransformSnapConfigs(): import("../utils/transform-tool-data").ISnapConfigData;
    setTransformSnapConfigs(name: keyof (SnapConfigs), value: any): void;
    queryRectSnappingConfigs(name?: keyof (IRectSnapConfigData)): number | boolean | IRectSnapConfigData;
    setRectSnappingConfigs(name: keyof (IRectSnapConfigData), value: any): void;
    init(): void;
    initFromConfig(): Promise<void>;
    saveRectSnapConfigs(): void;
    saveConfig(): Promise<void>;
    createSceneGizmo(): void;
    setSceneGizmoCameraRect(): void;
    onSceneOpened(): void;
    onSceneClosed(): void;
    initNodeGizmo(): void;
    get transformTool(): TransformGizmo | null;
    get transformToolName(): TransformToolDataToolNameType;
    set transformToolName(toolName: TransformToolDataToolNameType);
    get coordinate(): TransformToolDataCoordinateType;
    set coordinate(value: TransformToolDataCoordinateType);
    get pivot(): TransformToolDataPivotType;
    set pivot(value: TransformToolDataPivotType);
    lockGizmoTool(value: boolean): void;
    isGizmoToolLocked(): boolean;
    getGizmoToolByName(toolName: 'position' | 'rotation' | 'scale' | 'rect'): any;
    destroyGizmoInPool(pool: Record<string, GizmoBase[]>): void;
    clearAllGizmos(): void;
    createGizmoFromPool(pool: any, name: string, gizmoDef: any, target?: any): any;
    createGizmo(name: string, gizmoDef: any, target?: any): GizmoBase;
    destroyGizmo(gizmo: GizmoBase): void;
    hideGizmo(gizmo: GizmoBase | null | undefined): void;
    hideComponentGizmo(comp: Component): void;
    createIconGizmo(name: string, gizmoDef: any, target?: any): IconGizmoBase;
    createPersistentGizmo(name: string, gizmoDef: any, target?: any): GizmoBase;
    showAllGizmoOfNode(node: Node, recursive?: boolean): void;
    showNodeGizmoOfNode(node: Node): void;
    showComponentGizmo(component: Component, focusCreateGizmo?: boolean): void;
    showComponentIconGizmo(component: Component): void;
    showComponentPersistentGizmo(component: Component): void;
    showComponentIconGizmoOfNode(node: Node): void;
    showComponentPersistentGizmoOfNode(node: Node): void;
    showAllComponentsGizmoOfNode(node: Node): void;
    removeAllGizmoOfNode(node: Node, recursive?: boolean): void;
    removeNodeGizmoOfNode(node: Node): void;
    removeComponentGizmo(component: Component): void;
    removeComponentIconGizmo(component: Component): void;
    removeComponentPersistentGizmo(component: Component): void;
    removeComponentsGizmoOfNode(node: Node): void;
    removeComponentsIconGizmoOfNode(node: Node): void;
    removeAllComponentsGizmoOfNode(node: Node): void;
    showSceneNodeGizmo(node: Scene, show: boolean): void;
    showSelectionRegion(left: number, right: number, top: number, bottom: number): void;
    hideSelectionRegion(): void;
    onComponentEnable(id: string): void;
    onComponentDisable(id: string): void;
    /**
     * 选中节点
     * @param {*} newId
     * @param {*} ids
     */
    select(newId: string, ids: string[]): void;
    /**
     * 取消选中
     * @param {*} ids
     */
    unselect(ids: string[]): void;
    check(nodes: Node[]): Node[];
    edit(nodes: Node[]): void;
    onMouseLeave(): void;
    callAllGizmoFuncOfNode<T extends keyof GizmoBase>(node: Node, funcName: keyof GizmoBase, ...params: Parameters<GizmoBase[T]>): boolean;
    notifyNodeChanged(node: Node, recursive: boolean): void;
    onNodeChanged(node: Node, opts: IChangeNodeOptions): void;
    onNodeAdded(node: Node): void;
    onNodeRemoved(node: Node): void;
    onComponentAdded(comp: Component): void;
    onComponentRemoved(comp: Component): void;
    onResize(): void;
    onUpdate(deltaTime: number): void;
    onEditorCameraProjectionChanged(projection: number): void;
    private onCameraControlModeChanged;
    onDimensionChanged(is2D: boolean): void;
    get2DCanvas(): Canvas;
    registerLightProbeEditModeListener(listener: LightProbeEditModeListener): void;
    /**
     * 光照探针编辑模式改变，需要通知到GizmoOperation和LightProbeGizmo
     * 调用方在GeneralSceneManager的changeLightProbeEditMode方法中调用
     * @param mode
     */
    lightProbeEditModeChanged(mode: boolean): void;
    get globalSelectProbes(): NodeProbe[];
    /**
     * 遍历所有正常显示的光照探针
     */
    walkAllLightProbeGizmoListener(callback: (e: LightProbeGizmo) => void): void;
    /**
     * 更新光照探针的四面体，需要通知到MeshRendererGizmo
     * @returns
     */
    updateLightProbeInnerTetrahedron(): void;
    /**
     * 引擎更新了光照探针的数据，需要通知到LightProbeGizmo
     * @param mode
     */
    lightProbeInfoChanged(): void;
    /**
     * 包围盒编辑模式改变，需要通知到GizmoOperation和LightProbeGizmo
     * @param mode
     */
    boundingBoxEditModeChanged(mode: boolean): void;
    duplicateCurrentSelectedProbes(): void;
    removeCurrentSelectedProbes(): void;
    selectAllLightProbes(): void;
}
declare const _default: GizmoManager;
export default _default;
//# sourceMappingURL=gizmo-manager.d.ts.map