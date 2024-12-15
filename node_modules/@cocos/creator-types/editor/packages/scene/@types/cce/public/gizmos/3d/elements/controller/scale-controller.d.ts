import ControllerBase from './controller-base';
import { IControlMouseEvent } from '../../../defines';
import { Node, Vec3, Color, Vec2 } from 'cc';
declare class ScaleController extends ControllerBase {
    private _deltaScale;
    private _scaleFactor;
    static readonly _baseCubeSize = 12.5;
    static readonly _baseAxisLength = 70;
    static readonly scale2D: Vec3;
    static readonly scale3D: Vec3;
    private _axisSliderNodes;
    private _mouseDeltaPos;
    private _cubeDragValue;
    private _moveAxisName;
    private _axisDirMap;
    get scaleFactor(): number;
    get moveAxisName(): string;
    constructor(rootNode: Node);
    onCameraFovChanged: (fov: number) => void;
    onDimensionChanged(): void;
    createAxis(axisName: string, color: Color, rotation: Vec3): void;
    initShape(): void;
    onAxisSliderMove(axisName: string, deltaDist: number): void;
    getAlignAxisDeltaScale(axisName: string, curMouseDeltaPos: Vec2): any;
    getAllAxisDeltaScale(axisName: string, moveDelta: Vec2): any;
    onMouseDown(event: IControlMouseEvent): void;
    onMouseMove(event: IControlMouseEvent): void;
    onMouseUp(event: IControlMouseEvent): void;
    onMouseLeave(event: IControlMouseEvent): void;
    onHoverIn(event: IControlMouseEvent): void;
    onHoverOut(): void;
    getDeltaScale(): Vec3;
    onShow(): void;
    onHide(): void;
}
export default ScaleController;
//# sourceMappingURL=scale-controller.d.ts.map