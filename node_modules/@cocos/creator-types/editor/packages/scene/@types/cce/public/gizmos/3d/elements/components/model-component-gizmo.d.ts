import { MeshRenderer } from 'cc';
import Gizmo from '../gizmo-base';
import LightProbeTetrahedronController from '../controller/light-probe-tetrahedron-controller';
import { TargetDelegate } from '../controller/light-probe-controller';
import LightProbeEditModeListener from '../listener/light-probe-edit-mode-listener';
declare class ModelComponentGizmo extends Gizmo implements TargetDelegate<MeshRenderer>, LightProbeEditModeListener {
    private _controller;
    tetrahedronController: LightProbeTetrahedronController | null;
    init(): void;
    lightProbeInfoChanged(): void;
    onShow(): void;
    onHide(): void;
    createController(): void;
    updateControllerTransform(): void;
    updateControllerData(): void;
    onTargetUpdate(): void;
    onNodeChanged(): void;
}
export default ModelComponentGizmo;
//# sourceMappingURL=model-component-gizmo.d.ts.map