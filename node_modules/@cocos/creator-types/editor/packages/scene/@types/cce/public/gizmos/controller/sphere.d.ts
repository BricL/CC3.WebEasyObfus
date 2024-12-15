import { Node, Vec3, Color, MeshRenderer } from 'cc';
import EditableController from './editable';
import type { GizmoMouseEvent } from '../utils/defines';
declare class SphereController extends EditableController {
    private _center;
    private _radius;
    private _deltaRadius;
    private _circleDataMap;
    private _borderCircle;
    private _borderCircelMR;
    private _mouseDeltaPos;
    private _curDistScalar;
    private _controlDir;
    constructor(rootNode: Node);
    get radius(): number;
    set radius(value: number);
    setColor(color: Color): void;
    createCircleByAxis(axisName: string, fromAxisName: string, color: Color): void;
    createBorderCircle(): void;
    _updateEditHandle(axisName: string): void;
    initShape(): void;
    updateSize(center: Vec3, radius: number): void;
    updateShape(): void;
    updateArcMesh(model: MeshRenderer, center: Vec3, normal: Vec3, from: Vec3, radian: number, radius: number): void;
    onEditorCameraMoved(): void;
    onMouseDown(event: GizmoMouseEvent): void;
    onMouseMove(event: GizmoMouseEvent): void;
    onMouseUp(event: GizmoMouseEvent): void;
    onMouseLeave(event: GizmoMouseEvent): void;
    getDeltaRadius(): number;
    getControlDir(): Vec3;
}
export default SphereController;
//# sourceMappingURL=sphere.d.ts.map