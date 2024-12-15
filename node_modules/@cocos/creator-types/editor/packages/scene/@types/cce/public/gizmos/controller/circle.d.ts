import { Node, Vec3, Color } from 'cc';
import EditableController from './editable';
import type { GizmoMouseEvent } from '../utils/defines';
declare class CircleController extends EditableController {
    private _oriDir;
    private _center;
    private _radius;
    private _arc;
    private _deltaRadius;
    private _circleNode;
    private _circleFromDir;
    private _circleMR;
    private _mouseDeltaPos;
    private _curDistScalar;
    private _controlDir;
    constructor(rootNode: Node);
    get radius(): number;
    set radius(value: number);
    setColor(color: Color): void;
    _updateEditHandle(axisName: string): void;
    initShape(): void;
    updateSize(center: Vec3, radius: number, arc: number): void;
    onMouseDown(event: GizmoMouseEvent): void;
    onMouseMove(event: GizmoMouseEvent): void;
    onMouseUp(event: GizmoMouseEvent): void;
    onMouseLeave(event: GizmoMouseEvent): void;
    getDeltaRadius(): number;
    getControlDir(): Vec3;
}
export default CircleController;
//# sourceMappingURL=circle.d.ts.map