import ControllerBase from './controller-base';
import { IControlMouseEvent } from '../../../defines';
import { Node } from 'cc';
declare class TerrainController extends ControllerBase {
    private _quadNode;
    private _quadMR;
    private _size;
    constructor(rootNode: Node, opts?: any);
    initShape(opts: any): void;
    onMouseDown(event: IControlMouseEvent): void;
    onMouseMove(event: IControlMouseEvent): void;
    onMouseUp(event: IControlMouseEvent): void;
    onHoverIn(event: IControlMouseEvent): void;
    onHoverOut(event: IControlMouseEvent): void;
    onShow(): void;
    onHide(): void;
    updateSize(width: number, height: number): void;
}
export default TerrainController;
//# sourceMappingURL=terrain-controller.d.ts.map