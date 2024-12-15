import { Joint2DController } from '../../../controller/joint-2d-controller';
import GizmoBase from '../../../gizmo-base';
import { Color, Vec2 } from 'cc';
declare class Joint2DGizmo extends GizmoBase {
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
//# sourceMappingURL=joint-2d-gizmo.d.ts.map