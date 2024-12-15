import { DirectionalLight } from 'cc';
import { SelectGizmo } from '../base';
declare class DirectionalLightComponentGizmo extends SelectGizmo<DirectionalLight> {
    private _controller;
    private _frustumCtrl;
    private _lightGizmoColor;
    init(): void;
    onShow(): void;
    onHide(): void;
    createController(): void;
    onControllerMouseDown(): void;
    onControllerMouseMove(): void;
    onControllerMouseUp(): void;
    updateDataFromController(): void;
    updateControllerTransform(): void;
    updateControllerData(): void;
    onTargetUpdate(): void;
    onNodeChanged(): void;
}
export default DirectionalLightComponentGizmo;
//# sourceMappingURL=gizmo-select.d.ts.map