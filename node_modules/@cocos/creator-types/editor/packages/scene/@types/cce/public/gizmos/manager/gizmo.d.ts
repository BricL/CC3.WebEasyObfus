/// <reference path="../../../../../../../../resources/3d/engine/bin/.declarations/cc.d.ts" />
/// <reference path="../utils/engine/3d.d.ts" />
/// <reference path="data.d.ts" />
/// <reference path="../../../3d/manager/asset/asset-watcher.d.ts" />
/// <reference types="@cocos/creator-types/engine/cc" />
import { Camera, Component, gfx, IVec3Like, Node, Vec3 } from 'cc';
import { EventEmitter } from '@itharbors/structures';
import { IChangeNodeOptions } from '../../../../../@types/private';
import { TransformToolData, SnapConfigs, ISnapConfigData } from './transform-tool';
import GizmoBase from '../components/base/gizmo-select';
import { ISceneEvents } from '../../../3d/manager/scene-events-interface';
import { IRectSnapConfigData } from '../utils/rect-transform-snapping';
import { TGizmoType } from './pool';
type IGizmoEventTable = {
    'init': {
        params: [];
        result: void;
    };
    'info-update': {
        params: [];
        result: void;
    };
    'node-selected': {
        params: [string[]];
        result: void;
    };
    'node-unselected': {
        params: [string[]];
        result: void;
    };
};
/**
 * gizmo 对象管理器
 * 负责创建、销毁、管理 Gizmo 实例
 */
declare class GizmoPoolManager extends EventEmitter<IGizmoEventTable> {
    private _gizmoPool;
    private _iconVisible;
    protected get iconVisible(): boolean;
    protected set iconVisible(bool: boolean);
    /**
     * 循环遍历 Gizmo 实例列表
     * @param type
     * @param name
     * @param handle
     * @returns
     */
    protected forEachInstanceList(type: TGizmoType, name: string, handle: (gizmo: GizmoBase) => void): void;
    /**
     * 清空所有 Gizmo
     */
    clearAllGizmos(): void;
    /**
     * 从一个类型创建出一个 Gizmo
     * @param type
     * @param name
     * @param target
     * @returns
     */
    createGizmoFromType(type: TGizmoType, name: string, target?: Component): GizmoBase | null;
    /**
     * 创建一个 Component Gizmo
     * @param name
     * @param target
     * @returns
     */
    createGizmo(name: string, target?: Component): GizmoBase | null;
    /**
     * 销毁 Gizmo，可能有一些东西需要彻底清除
     * @param gizmo
     */
    destroyGizmo(gizmo: GizmoBase): void;
    /**
     * 显示 Gizmo
     * @param component
     * @param focusCreateGizmo
     */
    showGizmo(type: TGizmoType, component: Component, focusCreateGizmo?: boolean): void;
    /**
     * 隐藏 Gizmo
     * @param gizmo
     */
    hideGizmo(gizmo: GizmoBase | null | undefined): void;
    /**
     * 删除 Gizmo
     * @param type
     * @param component
     */
    removeGizmo(type: TGizmoType, component: Component): void;
    /**
     * 显示 Component / Node 上的 Gizmo
     * @param node
     */
    showGizmoOfNode(type: TGizmoType, node: Node): void;
    /**
     * 删除 Component / Node 上的 Gizmo
     * @param type
     * @param node
     */
    removeGizmoOfNode(type: TGizmoType, node: Node): void;
    /**
     * 显示 Component / Node 上的 Gizmo
     * @param type
     * @param node
     */
    showAllGizmoOfNode(node: Node, recursive?: boolean): void;
    /**
     * 删除 Component / Node 上的 Gizmo
     * @param type
     * @param node
     */
    removeAllGizmoOfNode(node: Node, recursive?: boolean): void;
    on<A extends keyof IGizmoEventTable>(action: A, handle: (...args: IGizmoEventTable[A]['params']) => IGizmoEventTable[A]['result']): void;
    off<A extends keyof IGizmoEventTable>(action: A, handle: (...args: IGizmoEventTable[A]['params']) => IGizmoEventTable[A]['result']): void;
    once<A extends keyof IGizmoEventTable>(action: A, handle: (...args: IGizmoEventTable[A]['params']) => IGizmoEventTable[A]['result']): void;
}
/**
 * 管理 Transform Gizmo
 */
declare class TransformGizmoManager extends GizmoPoolManager {
    transformToolData: TransformToolData;
    get transformToolName(): import("./transform-tool").TransformToolDataToolNameType;
    set transformToolName(toolName: import("./transform-tool").TransformToolDataToolNameType);
    get coordinate(): import("./transform-tool").TransformToolDataCoordinateType;
    set coordinate(value: import("./transform-tool").TransformToolDataCoordinateType);
    get pivot(): import("./transform-tool").TransformToolDataPivotType;
    set pivot(value: import("./transform-tool").TransformToolDataPivotType);
    constructor();
    private onCameraControlModeChanged;
    protected init(): void;
    protected __listenEvents(): void;
    queryTransformSnapConfigs(): ISnapConfigData;
    setTransformSnapConfigs<K extends keyof SnapConfigs>(name: K, value: SnapConfigs[K]): void;
    onUpdate(deltaTime: number): void;
}
declare class SelectionGizmoManager extends TransformGizmoManager {
    private _selection;
    protected select(ids: string[]): void;
    protected unselect(ids: string[]): void;
    /**
     * 查询当前选中的节点列表
     */
    querySelectNodes(): Node[];
    protected getSelectionUUIDs(): string[];
    protected hasSelected(id: string): boolean;
    protected onNodeSelectionChanged(node: Node, selected: boolean): void;
}
export declare class GizmoManager extends SelectionGizmoManager implements ISceneEvents {
    __EngineUtils__: import("../utils/engine/3d").Engine3D;
    __ControllerShape__: {
        calcCylinderData(radiusTop?: number, radiusBottom?: number, height?: number, opts?: any): {
            positions: any[];
            normals: any[];
            uvs: any[];
            indices: any[];
            minPos: Vec3;
            maxPos: Vec3;
        };
        calcConeData(radius: number, height: number, opts?: any): {
            positions: any[];
            normals: any[];
            uvs: any[];
            indices: any[];
            minPos: Vec3;
            maxPos: Vec3;
        };
        calcPositionData(center: Readonly<Vec3>, width: number, height: number, normal?: Readonly<Vec3>, needBoundingBox?: boolean): {
            positions: Vec3[];
            minPos: Vec3 | undefined;
            maxPos: Vec3 | undefined;
        };
        calcQuadData(center: Readonly<Vec3>, width: number, height: number, normal?: Readonly<Vec3>, needBoundingBox?: boolean): {
            positions: Vec3[];
            normals: any[];
            indices: number[];
            minPos: Vec3 | undefined;
            maxPos: Vec3 | undefined;
            uvs: any[];
            doubleSided: boolean;
        };
        lineWithBoundingBox(length: number, size?: number): {
            positions: Vec3[];
            normals: any[];
            indices: number[];
            minPos: Vec3;
            maxPos: Vec3;
            primitiveType: gfx.PrimitiveMode;
        };
        calcCubeData(width: number, height: number, length: number, center?: IVec3Like | undefined, opts?: any): {
            positions: Vec3[];
            indices: number[];
            normals: Vec3[];
            minPos: Vec3;
            maxPos: Vec3;
        };
        torus(radius: number, tube: number, opts?: any): {
            positions: Vec3[];
            indices: number[];
            normals: Vec3[];
            uvs: any[];
            minPos: Vec3;
            maxPos: Vec3;
        };
        calcArcPoints(center: Readonly<Vec3>, normal: Readonly<Vec3>, fromDir: Readonly<Vec3>, radian: number, radius: number, segments?: number): Vec3[];
        getBiNormalByNormal(normal: Readonly<Vec3>): Vec3;
        calcCirclePoints(center: Readonly<Vec3>, normal: Readonly<Vec3>, radius: number, segments?: number): Vec3[];
        calcDiscPoints(center: Readonly<Vec3>, normal: Readonly<Vec3>, radius: number, segments?: number): Readonly<Vec3>[];
        calcSectorPoints(center: Readonly<Vec3>, normal: Readonly<Vec3>, fromDir: Readonly<Vec3>, radian: number, radius: number, segments: number): Readonly<Vec3>[];
        indicesFanToList(fanIndices: number[]): any[];
        calcSectorData(center: Readonly<Vec3>, normal: Readonly<Vec3>, fromDir: Readonly<Vec3>, radian: number, radius: number, segments: number): {
            positions: Readonly<Vec3>[];
            normals: any[];
            indices: any[];
            primitiveType: gfx.PrimitiveMode;
        };
        arcDirectionLine(center: Vec3, normal: Vec3, fromDir: Vec3, radian: number, radius: number, length: number, segments: number): {
            positions: Vec3[];
            normals: any[];
            indices: number[];
            primitiveType: gfx.PrimitiveMode;
        };
        calcBoxPoints(center: Vec3, size: Vec3): Vec3[];
        wireframeBox(center: Vec3, size: Vec3): {
            positions: Vec3[];
            normals: any[];
            indices: number[];
            primitiveType: gfx.PrimitiveMode;
        };
        calcFrustum(isOrtho: boolean, orthoHeight: number, fov: number, aspect: number, near: number, far: number, isFOVY: boolean): {
            positions: Vec3[];
            indices: number[];
            normals: any[];
            primitiveType: gfx.PrimitiveMode;
        };
        calcRectanglePoints: (center: Readonly<Vec3>, rotation: Readonly<import("cc").math.Quat>, size: any) => {
            vertices: Vec3[];
            indices: number[];
        };
        calcRectangleData(center: Readonly<Vec3>, rotation: Readonly<import("cc").math.Quat>, size: any): {
            positions: Vec3[];
            normals: any[];
            indices: number[];
            primitiveType: gfx.PrimitiveMode;
        };
        calcSphereData: (center: Readonly<Vec3>, radius?: number, opts?: any) => import("../utils/defines").IMeshPrimitive;
        calcArcData(center: Readonly<Vec3>, normal: Readonly<Vec3>, fromDir: Readonly<Vec3>, radian: number, radius: number, segments?: number): {
            positions: Vec3[];
            normals: any[];
            indices: number[];
            primitiveType: gfx.PrimitiveMode;
        };
        calcCircleData(center: Readonly<Vec3>, normal: Readonly<Vec3>, radius: number, segments?: number): {
            positions: Vec3[];
            normals: any[];
            indices: number[];
            primitiveType: gfx.PrimitiveMode;
        };
        calcLinesData(vertices: Vec3[], indices: number[], needBoundingBoxData?: boolean): import("../utils/defines").IMeshPrimitive;
        calcDiscData(center: Readonly<Vec3>, normal: Readonly<Vec3>, radius: number, segments?: number): {
            positions: Readonly<Vec3>[];
            normals: any[];
            indices: any[];
            primitiveType: gfx.PrimitiveMode;
            minPos: Vec3;
            maxPos: Vec3;
        };
        calcLineData(startPos: Vec3, endPos: Vec3): {
            positions: Vec3[];
            normals: any[];
            indices: number[];
            minPos: Vec3;
            maxPos: Vec3;
            primitiveType: gfx.PrimitiveMode;
        };
        calcPolygonData(points: Vec3[], indices?: number[] | undefined): {
            positions: Vec3[];
            normals: any[];
            indices: number[];
            minPos: Vec3;
            maxPos: Vec3;
            primitiveType: gfx.PrimitiveMode;
        };
        calcOctahedronData(lowerPoint: IVec3Like, upperPoint: IVec3Like, width: number, length: number, ratio?: number): {
            primitiveType: gfx.PrimitiveMode;
            positions: Vec3[];
            normals: Vec3[];
            indices: number[];
            minPos: Vec3;
            maxPos: Vec3;
        };
    };
    sceneGizmoCamera: Camera;
    gizmoRootNode: Node;
    private _worldAxisController;
    get is2D(): boolean;
    set is2D(value: boolean);
    private saveRectSnapConfigs;
    private createSceneGizmo;
    private setSceneGizmoCameraRect;
    protected onNodeSelectionChanged(node: Node, selected: boolean): void;
    isIconGizmo3D(): boolean;
    setIconGizmo3D(value: boolean): void;
    queryIconGizmoSize(): number;
    setIconGizmoSize(size: number): void;
    queryToolsVisibility3d(): boolean;
    setToolsVisibility3d(value: boolean): void;
    queryRectSnappingConfigs(name?: keyof (IRectSnapConfigData)): number | boolean | IRectSnapConfigData;
    setRectSnappingConfigs(name: keyof (IRectSnapConfigData), value: any): void;
    init(): void;
    initFromConfig(): Promise<void>;
    saveConfig(): Promise<void>;
    lockGizmoTool(value: boolean): void;
    isGizmoToolLocked(): boolean;
    showSelectionRegion(left: number, right: number, top: number, bottom: number): void;
    hideSelectionRegion(): void;
    /**
     * 执行一个节点上所挂的 Gizmo 上的指定函数
     * 函数如果返回 false，这个函数的返回值则为 false
     * return false 代表希望阻止后续操作的流程
     *
     * @param node
     * @param funcName
     * @param params
     * @returns
     */
    callAllGizmoFuncOfNode<T extends keyof GizmoBase>(node: Node, funcName: T, ...params: Parameters<any>): boolean;
    onDimensionChanged(is2D: boolean): void;
    onResize(): void;
    onSceneOpened(): void;
    onSceneClosed(): void;
    onNodeChanged(node: Node, opts: IChangeNodeOptions): void;
    onNodeAdded(node: Node): void;
    onNodeRemoved(node: Node): void;
    onComponentAdded(comp: Component): void;
    onComponentRemoved(comp: Component): void;
    /**
     * 执行 Gizmo 管理器上实现的方法
     * @param name
     * @param funcName
     * @param params
     * @returns
     */
    execGizmoMethods(name: string, funcName: string, params?: any[]): any;
    /**
     * 更新光照探针的四面体，需要通知到 MeshRenderer Gizmo
     * @returns
     */
    updateLightProbeInnerTetrahedron(): void;
    duplicateCurrentSelectedProbes(): void;
    removeCurrentSelectedProbes(): void;
    selectAllLightProbes(): void;
    /**
     * 切换选中状态，0 是正常选中节点，1 是选中 gizmo 节点
     * @param mode
     */
    _changeRegionSelectMode(mode: number): void;
}
export declare const gizmoManager: GizmoManager;
export {};
//# sourceMappingURL=gizmo.d.ts.map