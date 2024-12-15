import Gizmo from '../../gizmo-base';
declare class CapsuleColliderComponentGizmo extends Gizmo {
    private _maxScale;
    private _radius;
    private _height;
    private _controller;
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
    onTargetUpdate(): void;
    onNodeChanged(): void;
    private getMaxScale;
}
export default CapsuleColliderComponentGizmo;
//# sourceMappingURL=capsule-collider-component-gizmo.d.ts.map