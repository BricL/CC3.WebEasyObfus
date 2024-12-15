import { Color, Node, Vec3 } from 'cc';
import EditableController from '../../controller/editable';
import type { GizmoMouseEvent } from '../../utils/defines';
declare enum Joint2DControllerType {
    Revolute = 0,
    Distance = 1,
    Fixed = 2,
    Hinge = 3,
    Slider = 4,
    Spring = 5,
    Wheel = 6
}
declare class Joint2DController extends EditableController {
    private _lineNode;
    private _lineMR;
    private _anchor;
    private _panPlane;
    private _mouseDownOnPlanePos;
    private _deltaPos;
    private _type;
    private _center;
    constructor(root: Node, type?: Joint2DControllerType);
    setColor(color: Color): void;
    createEditHandle(handleName: string, color: Color): import("../../utils/defines").IHandleData;
    createHeadNode(pos: Vec3, name: string, color: Color): Node;
    createLineNode(startPos: Vec3, endPos: Vec3, name: string, color: Color): Node;
    initShape(): void;
    _updateEditHandle(handleName: string): void;
    updatePosition(center: Vec3, anchor: Vec3): void;
    onMouseDown(event: GizmoMouseEvent): void;
    onMouseMove(event: GizmoMouseEvent): void;
    onMouseUp(event: GizmoMouseEvent): void;
    onMouseLeave(event: GizmoMouseEvent): void;
    onHoverIn(event: GizmoMouseEvent): void;
    onHoverOut(event: GizmoMouseEvent<{
        hoverInNodeMap: Map<Node, boolean>;
    }>): void;
    getDeltaPos(): Vec3;
}
export { Joint2DController, Joint2DControllerType };
//# sourceMappingURL=controller-joint-2d.d.ts.map