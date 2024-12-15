import EditableController from './editable-controller';
import { Node, Vec3, Color } from 'cc';
import { IControlMouseEvent } from '../../../defines';
declare class BoxController extends EditableController {
    private _center;
    private _size;
    private _deltaSize;
    private _wireframeBoxNode;
    private _wireframeBoxMeshRenderer;
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
    onMouseDown(event: IControlMouseEvent): void;
    onMouseMove(event: IControlMouseEvent): void;
    onMouseUp(event: IControlMouseEvent): void;
    onMouseLeave(event: IControlMouseEvent): void;
    onHoverIn(event: IControlMouseEvent): void;
    onHoverOut(): void;
    getDeltaSize(): Vec3;
    showEditHandles(): void;
    hideEditHandles(): void;
}
export default BoxController;
//# sourceMappingURL=box-controller.d.ts.map