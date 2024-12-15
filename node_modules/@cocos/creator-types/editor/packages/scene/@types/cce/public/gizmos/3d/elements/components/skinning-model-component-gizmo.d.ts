import Gizmo from '../gizmo-base';
import LightProbeTetrahedronController from '../controller/light-probe-tetrahedron-controller';
import LightProbeEditModeListener from '../listener/light-probe-edit-mode-listener';
declare class SkinningModelComponentGizmo extends Gizmo implements LightProbeEditModeListener {
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
    onUpdate(): void;
}
export default SkinningModelComponentGizmo;
//# sourceMappingURL=skinning-model-component-gizmo.d.ts.map