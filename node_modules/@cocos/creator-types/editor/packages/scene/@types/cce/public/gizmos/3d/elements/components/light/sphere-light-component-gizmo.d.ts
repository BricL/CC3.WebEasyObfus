import Gizmo from '../../gizmo-base';
declare class SphereLightComponentGizmo extends Gizmo {
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
//# sourceMappingURL=sphere-light-component-gizmo.d.ts.map