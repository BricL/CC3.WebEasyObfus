import { Node, Vec3, Color } from 'cc';
import type { GizmoMouseEvent } from '../utils/defines';
import EditableController from './editable';
declare class BoxController extends EditableController {
    private _center;
    private _size;
    private _deltaSize;
    private _wireFrameBoxNode;
    private _wireFrameBoxMeshRenderer;
    private _cubeNode;
    private _cubeNodeMR;
    private _mouseDeltaPos;
    private _curDistScalar;
    constructor(rootNode: Node);
    setColor(color: Color): void;
    setOpacity(opacity: number): void;
    _updateEditHandle(axisName: string): void;
    initShape(): void;
    updateSize(center: Readonly<Vec3>, size: Vec3): void;
    onMouseDown(event: GizmoMouseEvent): void;
    onMouseMove(event: GizmoMouseEvent): void;
    onMouseUp(event: GizmoMouseEvent): void;
    onMouseLeave(event: GizmoMouseEvent): void;
    onHoverIn(event: GizmoMouseEvent): void;
    onHoverOut(event: GizmoMouseEvent<{
        hoverInNodeMap: Map<Node, boolean>;
    }>): void;
    getDeltaSize(): Vec3;
    showEditHandles(): void;
    hideEditHandles(): void;
}
export default BoxController;
//# sourceMappingURL=box.d.ts.map