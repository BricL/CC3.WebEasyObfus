import { Color, Node, Vec3 } from 'cc';
import EditableController from './editable-controller';
import { IControlMouseEvent } from '../../../defines';
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
    createEditHandle(handleName: string, color: Color): import("../../../defines").IHandleData;
    createHeadNode(pos: Vec3, name: string, color: Color): Node;
    createLineNode(startPos: Vec3, endPos: Vec3, name: string, color: Color): Node;
    initShape(): void;
    _updateEditHandle(handleName: string): void;
    updatePosition(center: Vec3, anchor: Vec3): void;
    onMouseDown(event: IControlMouseEvent): void;
    onMouseMove(event: IControlMouseEvent): void;
    onMouseUp(event: IControlMouseEvent): void;
    onMouseLeave(event: IControlMouseEvent): void;
    onHoverIn(event: IControlMouseEvent): void;
    onHoverOut(event: IControlMouseEvent): void;
    getDeltaPos(): Vec3;
}
export { Joint2DController, Joint2DControllerType };
//# sourceMappingURL=joint-2d-controller.d.ts.map