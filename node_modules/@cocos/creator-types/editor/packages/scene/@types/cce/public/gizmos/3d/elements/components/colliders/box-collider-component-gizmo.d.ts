import Gizmo from '../../gizmo-base';
declare class BoxColliderComponentGizmo extends Gizmo {
    private _size;
    private _scale;
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
}
export default BoxColliderComponentGizmo;
//# sourceMappingURL=box-collider-component-gizmo.d.ts.map