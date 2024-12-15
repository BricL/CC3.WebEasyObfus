/**
 * 变换工具数据管理
 * gizmo-manager 里面的一个负责管理变换工具及其数据的工具
 */
import { IVec3Like } from 'cc';
import { EventEmitter } from '@itharbors/structures';
export interface ISnapConfigData {
    position: IVec3Like;
    rotation: number;
    scale: number;
    isPositionSnapEnabled: boolean;
    isRotationSnapEnabled: boolean;
    isScaleSnapEnabled: boolean;
}
export declare class SnapConfigs extends EventEmitter<{
    'snap-position-changed': {
        params: [IVec3Like];
        result: void;
    };
    'snap-rotation-changed': {
        params: [number];
        result: void;
    };
    'snap-scale-changed': {
        params: [number];
        result: void;
    };
    'enable-snap-position-changed': {
        params: [boolean];
        result: void;
    };
    'enable-snap-rotation-changed': {
        params: [boolean];
        result: void;
    };
    'enable-snap-scale-changed': {
        params: [boolean];
        result: void;
    };
}> {
    private _position;
    get position(): IVec3Like;
    set position(value: IVec3Like);
    private _rotation;
    get rotation(): number;
    set rotation(value: number);
    private _scale;
    get scale(): number;
    set scale(value: number);
    private _isPositionSnapEnabled;
    get isPositionSnapEnabled(): boolean;
    set isPositionSnapEnabled(value: boolean);
    private _isRotationSnapEnabled;
    get isRotationSnapEnabled(): boolean;
    set isRotationSnapEnabled(value: boolean);
    private _isScaleSnapEnabled;
    get isScaleSnapEnabled(): boolean;
    set isScaleSnapEnabled(value: boolean);
    /**
     * 获取配置数据
     */
    getPureDataObject(): ISnapConfigData;
    /**
     * 从数据初始化
     */
    initFromData(data: ISnapConfigData): void;
}
export type TransformToolDataToolNameType = 'position' | 'rotation' | 'scale' | 'rect';
export type TransformToolDataCoordinateType = 'local' | 'global';
export type TransformToolDataPivotType = 'pivot' | 'center';
export declare class TransformToolData extends EventEmitter<{
    'tool-name-changed': {
        params: [TransformToolDataToolNameType];
        result: void;
    };
    'coordinate-changed': {
        params: [TransformToolDataCoordinateType];
        result: void;
    };
    'pivot-changed': {
        params: [TransformToolDataPivotType];
        result: void;
    };
    'lock-changed': {
        params: [boolean];
        result: void;
    };
    'dimension-changed': {
        params: [boolean];
        result: void;
    };
    'scale-2d-changed': {
        params: [number];
        result: void;
    };
    'camera-ortho-height-changed': {
        params: [number];
        result: void;
    };
}> {
    private _toolName;
    get toolName(): TransformToolDataToolNameType;
    set toolName(value: TransformToolDataToolNameType);
    private _coordinate;
    get coordinate(): TransformToolDataCoordinateType;
    set coordinate(value: TransformToolDataCoordinateType);
    private _pivot;
    get pivot(): TransformToolDataPivotType;
    set pivot(value: TransformToolDataPivotType);
    private _isLocked;
    get isLocked(): boolean;
    set isLocked(value: boolean);
    private _is2D;
    get is2D(): boolean;
    set is2D(value: boolean);
    private _scale2D;
    get scale2D(): number;
    set scale2D(value: number);
    snapConfigs: SnapConfigs;
    set cameraOrthoHeight(value: number);
}
//# sourceMappingURL=transform-tool.d.ts.map