import { MeshRenderer } from 'cc';
import { SelectGizmo } from '../base';
import LightProbeTetrahedronController from '../light-probe-group/controller-light-probe-tetrahedron';
declare class ModelComponentGizmo extends SelectGizmo<MeshRenderer> {
    private _controller;
    tetrahedronController: LightProbeTetrahedronController;
    init(): void;
    onShow(): void;
    onHide(): void;
    createController(): void;
    updateControllerTransform(): void;
    updateControllerData(): void;
    onTargetUpdate(): void;
    onNodeChanged(): void;
}
export default ModelComponentGizmo;
//# sourceMappingURL=gizmo-select.d.ts.map