import { DistanceJoint2D } from 'cc';
import { SelectGizmo } from '../joint-2d';
declare class DistanceJoint2DGizmo extends SelectGizmo<DistanceJoint2D> {
    private _lineController;
    createController(): void;
    onHide(): void;
    updateAnchorControllerData(): void;
}
export default DistanceJoint2DGizmo;
//# sourceMappingURL=gizmo-select.d.ts.map