import { SimplexCollider } from 'cc';
import { SelectGizmo } from '../base';
import PointController from '../../controller/point';
import LineController from '../../controller/line';
import TriangleController from '../../controller/triangle';
import TetrahedronController from '../../controller/tetrahedron';
declare class SimplexColliderGizmo extends SelectGizmo {
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
//# sourceMappingURL=gizmo-select.d.ts.map