import { SphereLight } from 'cc';
import { SelectGizmo } from '../base';
declare class SphereLightComponentGizmo extends SelectGizmo<SphereLight> {
    private _lightGizmoColor;
    private _lightCtrlHoverColor;
    private _range;
    private _glowSize;
    private _controller;
    private _sizeSphereCtrl;
    private _propPath;
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
    updateController(): void;
    onTargetUpdate(): void;
    onNodeChanged(): void;
}
export default SphereLightComponentGizmo;
//# sourceMappingURL=gizmo-select.d.ts.map