import Gizmo from '../gizmo-base';
declare class UITransformComponentGizmo extends Gizmo {
    private _controller;
    init(): void;
    onShow(): void;
    onHide(): void;
    createController(): void;
    onControllerMouseDown(): void;
    onControllerMouseMove(): void;
    onControllerMouseUp(): void;
    onGizmoKeyDown(event: any): void;
    onGizmoKeyUp(event: any): void;
    updateControllerTransform(): void;
    updateControllerData(): void;
    updateController(): void;
    onTargetUpdate(): void;
    onNodeChanged(): void;
}
export default UITransformComponentGizmo;
//# sourceMappingURL=ui-transform-component-gizmo.d.ts.map