import { Node, Color } from 'cc';
import ControllerBase from './base';
import type { GizmoMouseEvent } from '../utils/defines';
declare class QuadController extends ControllerBase {
    protected _quadNode: Node | null;
    private _defaultSize;
    private _size;
    private _hoverColor;
    constructor(rootNode: Node, opts?: any);
    get hoverColor(): Color;
    set hoverColor(value: Color);
    initShape(opts?: any): void;
    onMouseDown(event: GizmoMouseEvent): void;
    onMouseMove(event: GizmoMouseEvent): void;
    onMouseUp(event: GizmoMouseEvent): void;
    onHoverIn(event: GizmoMouseEvent): void;
    onHoverOut(): void;
    onEditorCameraMoved(): void;
    onShow(): void;
    onHide(): void;
    updateSize(size: number): void;
    setMaterialProperty(name: string, value: any): void;
}
export default QuadController;
//# sourceMappingURL=quad.d.ts.map