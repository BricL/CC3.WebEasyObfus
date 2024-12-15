import { Camera } from 'cc';
import { SelectGizmo } from '../base';
declare class CameraComponentGizmo extends SelectGizmo<Camera> {
    private _controller;
    private _fov;
    private _near;
    private _far;
    private _aspect;
    private _farHalfWidth;
    private _farHalfHeight;
    private _projection;
    private _fovAxis;
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
//# sourceMappingURL=gizmo-select.d.ts.map