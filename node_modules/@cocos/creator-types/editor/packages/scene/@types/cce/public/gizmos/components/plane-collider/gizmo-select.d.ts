import { SelectGizmo } from '../base';
declare class PlaneColliderGizmo extends SelectGizmo {
    private _controller;
    init(): void;
    onShow(): void;
    onHide(): void;
    updateControllerData(): void;
    onTargetUpdate(): void;
    onNodeChanged(): void;
}
export default PlaneColliderGizmo;
//# sourceMappingURL=gizmo-select.d.ts.map