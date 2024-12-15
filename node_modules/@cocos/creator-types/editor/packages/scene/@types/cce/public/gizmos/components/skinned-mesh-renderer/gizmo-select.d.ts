import { SkinningModelComponent } from 'cc';
import { SelectGizmo } from '../base';
import LightProbeTetrahedronController from '../light-probe-group/controller-light-probe-tetrahedron';
declare class SkinningModelComponentGizmo extends SelectGizmo<SkinningModelComponent> {
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
    onUpdate(): void;
}
export default SkinningModelComponentGizmo;
//# sourceMappingURL=gizmo-select.d.ts.map