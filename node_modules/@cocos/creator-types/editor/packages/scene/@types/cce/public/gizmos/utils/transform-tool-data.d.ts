import { IVec3Like } from 'cc';
declare const EventEmitter: any;
export interface ISnapConfigData {
    position: IVec3Like;
    rotation: number;
    scale: number;
    isPositionSnapEnabled: boolean;
    isRotationSnapEnabled: boolean;
    isScaleSnapEnabled: boolean;
}
declare class SnapConfigs extends EventEmitter {
    private _position;
    private _rotation;
    private _scale;
    private _isPositionSnapEnabled;
    private _isRotationSnapEnabled;
    private _isScaleSnapEnabled;
    get position(): IVec3Like;
    set position(value: IVec3Like);
    get rotation(): number;
    set rotation(value: number);
    get scale(): number;
    set scale(value: number);
    get isPositionSnapEnabled(): boolean;
    set isPositionSnapEnabled(value: boolean);
    get isRotationSnapEnabled(): boolean;
    set isRotationSnapEnabled(value: boolean);
    get isScaleSnapEnabled(): boolean;
    set isScaleSnapEnabled(value: boolean);
    getPureDataObject(): ISnapConfigData;
    initFromData(data: ISnapConfigData): void;
}
declare type TransformToolDataToolNameType = 'position' | 'rotation' | 'scale' | 'rect';
declare type TransformToolDataCoordinateType = 'local' | 'global';
declare type TransformToolDataPivotType = 'pivot' | 'center';
declare class TransformToolData extends EventEmitter {
    private _toolName;
    private _coordinate;
    private _pivot;
    private _isLocked;
    private _is2D;
    private _scale2D;
    private _snapConfigs;
    constructor();
    get toolName(): TransformToolDataToolNameType;
    set toolName(value: TransformToolDataToolNameType);
    get coordinate(): TransformToolDataCoordinateType;
    set coordinate(value: TransformToolDataCoordinateType);
    get pivot(): TransformToolDataPivotType;
    set pivot(value: TransformToolDataPivotType);
    get isLocked(): boolean;
    set isLocked(value: boolean);
    get is2D(): boolean;
    set is2D(value: boolean);
    get scale2D(): number;
    set scale2D(value: number);
    set cameraOrthoHeight(value: number);
    get snapConfigs(): SnapConfigs;
    set snapConfigs(value: SnapConfigs);
}
declare const transformToolData: TransformToolData;
export { TransformToolData, transformToolData, SnapConfigs, TransformToolDataCoordinateType, TransformToolDataPivotType, TransformToolDataToolNameType };
//# sourceMappingURL=transform-tool-data.d.ts.map