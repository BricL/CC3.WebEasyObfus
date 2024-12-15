import Gizmo from '../gizmo-base';
declare class CameraComponentGizmo extends Gizmo {
    private _fov;
    private _near;
    private _far;
    private _aspect;
    private _farHalfWidth;
    private _farHalfHeight;
    private _projection;
    private _fovAxis;
    private _controller;
    private _onTargetResolutionChanged;
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
    onTargetResolutionChanged(): void;
}
export default CameraComponentGizmo;
//# sourceMappingURL=camera-component-gizmo.d.ts.map