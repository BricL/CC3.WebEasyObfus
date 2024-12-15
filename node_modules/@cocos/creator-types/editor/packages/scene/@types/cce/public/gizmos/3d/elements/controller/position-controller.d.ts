import ControllerBase from './controller-base';
import { IControlMouseEvent } from '../../../defines';
import { Vec3, Node, Color, Vec2 } from 'cc';
declare class PositionController extends ControllerBase {
    private _deltaPosition;
    private _mouseDownPos;
    private _ctrlPlaneGroup;
    private _mouseDownAxis;
    private _curDistScalar;
    private _dragPanPlane;
    private _isInPanDrag;
    private _mouseDownOnPlanePos;
    private _snapDragPlane;
    static readonly baseArrowHeadHeight = 12.5;
    static readonly baseArrowHeadRadius = 5;
    static readonly baseArrowBodyHeight = 70;
    static readonly planeWidth = 12.5;
    static readonly scale2D: Vec3;
    static readonly scale3D: Vec3;
    constructor(rootNode: Node);
    onCameraFovChanged: (fov: number) => void;
    onDimensionChanged(): void;
    createAxis(axisName: string, color: Color, rotation: Vec3): void;
    createControlPlane(axisName: string, color: Color, rotation: Vec3): void;
    createSnapPlane(): void;
    initShape(): void;
    /** 获取偏移值在 controller 的某一轴的投影 */
    getDeltaPositionOfAxis(out: Vec3 | undefined, name: 'x' | 'y' | 'z'): Vec3;
    /** 获取偏移值 */
    getDeltaPosition(): Vec3;
    onMouseDown(event: IControlMouseEvent): void;
    getPanPlane(axisName: string): Node | null | undefined;
    static isXYZ(controllerName: string): controllerName is 'x' | 'y' | 'z';
    static isPlane(controllerName: string): controllerName is 'xy' | 'yz' | 'xz';
    getAlignAxisDeltaPosition(axisName: string, curMouseDeltaPos: Vec2): any;
    getPositionOnPanPlane(hitPos: Vec3, x: number, y: number, panPlane: Node): boolean;
    onMouseMove(event: IControlMouseEvent): void;
    onMouseUp(event: IControlMouseEvent): void;
    onMouseLeave(event: IControlMouseEvent): void;
    onHoverIn(event: IControlMouseEvent): void;
    onHoverOut(): void;
    onShow(): void;
    onHide(): void;
    isSnaping(): boolean;
    updateSnapUI(active: boolean): void;
}
export default PositionController;
//# sourceMappingURL=position-controller.d.ts.map