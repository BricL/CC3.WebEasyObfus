import { Color, Vec2, Joint2D } from 'cc';
import { SelectGizmo } from '../base';
import { Joint2DController } from './controller-joint-2d';
declare class Joint2DGizmo<T extends Joint2D = Joint2D> extends SelectGizmo<T> {
    protected _anchorController: Joint2DController;
    protected _connectedAnchorController: Joint2DController;
    protected _anchor: Vec2;
    protected _connectedAnchor: Vec2;
    protected _propPath: string | null;
    protected _anchorColor: Color;
    protected _connectedAnchorColor: Color;
    init(): void;
    createController(): void;
    onShow(): void;
    onHide(): void;
    onAnchorControllerMouseDown(): void;
    onAnchorControllerMouseMove(): void;
    onAnchorControllerMouseUp(): void;
    onConnectedAnchorControllerMouseDown(): void;
    onConnectedAnchorControllerMouseMove(): void;
    updateControllerData(): void;
    updateAnchorControllerData(): void;
    onTargetUpdate(): void;
    onNodeChanged(): void;
}
export default Joint2DGizmo;
//# sourceMappingURL=gizmo-select.d.ts.map