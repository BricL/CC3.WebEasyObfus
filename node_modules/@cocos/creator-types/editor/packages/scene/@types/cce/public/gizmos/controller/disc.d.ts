import { Node, Vec3, Color } from 'cc';
import EditableController from './editable';
import type { GizmoMouseEvent } from '../utils/defines';
declare enum DiscHandleType {
    None = "none",
    Left = "neg_x",
    Right = "x",
    Top = "y",
    Bottom = "neg_y",
    Area = "area"
}
declare class DiscController extends EditableController {
    static DiscHandleType: typeof DiscHandleType;
    private _oriDir;
    private _center;
    private _radius;
    private _arc;
    private _deltaRadius;
    private _deltaPos;
    private _circleNode;
    private _circleFromDir;
    private _circleMR;
    private _panPlane;
    private _areaNode;
    private _areaMR;
    private _areaColor;
    private _areaOpacity;
    private _mouseDeltaPos;
    private _mouseDownOnPlanePos;
    private _curDistScalar;
    private _controlDir;
    private _curHandleType;
    constructor(rootNode: Node);
    get radius(): number;
    set radius(value: number);
    setColor(color: Color): void;
    setAreaColor(color: Color): void;
    setAreaOpacity(opacity: number): void;
    showEditHandles(): void;
    hideEditHandles(): void;
    isBorder(axisName: string): boolean;
    initShape(): void;
    onInitEditHandles(): void;
    _updateEditHandle(axisName: string): void;
    updateSize(center: Readonly<Vec3>, radius: number, arc?: number): void;
    onMouseDown(event: GizmoMouseEvent): void;
    onMouseMove(event: GizmoMouseEvent): void;
    onMouseUp(event: GizmoMouseEvent): void;
    onHoverIn(event: GizmoMouseEvent): void;
    onMouseLeave(event: GizmoMouseEvent): void;
    getDeltaRadius(): number;
    getControlDir(): Vec3;
    getDeltaPos(): Vec3;
    getCurHandleType(): string;
}
export default DiscController;
//# sourceMappingURL=disc.d.ts.map