import { SimplexCollider } from 'cc';
import GizmoBase from '../../gizmo-base';
import PointController from '../../controller/point-controller';
import LineController from '../../controller/line-controller';
import TriangleController from '../../controller/triangle-controller';
import TetrahedronController from '../../controller/tetrahedron-cotroller';
declare class SimplexColliderGizmo extends GizmoBase {
    private _shapeControllers;
    private _activeController;
    init(): void;
    createControllerByShape(shape: SimplexCollider.ESimplexType): LineController | PointController | TriangleController | TetrahedronController | null;
    getControllerByShape(shape: SimplexCollider.ESimplexType): any;
    onShow(): void;
    onHide(): void;
    updateControllerData(): void;
    onTargetUpdate(): void;
    onNodeChanged(): void;
}
export default SimplexColliderGizmo;
//# sourceMappingURL=simplex-collider-gizmo.d.ts.map