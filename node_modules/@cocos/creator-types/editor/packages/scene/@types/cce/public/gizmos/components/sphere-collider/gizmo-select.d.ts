import { Vec3, SphereCollider } from 'cc';
import { SelectGizmo } from '../base';
declare class SphereColliderComponentGizmo extends SelectGizmo<SphereCollider> {
    private _controller;
    private _radius;
    private _maxScale;
    private _propPath;
    init(): void;
    onShow(): void;
    onHide(): void;
    createController(): void;
    onControllerMouseDown(): void;
    onControllerMouseMove(): void;
    onControllerMouseUp(): void;
    getMaxScale(inScale: Vec3): number;
    updateDataFromController(): void;
    updateControllerData(): void;
    updateControllerTransform(): void;
    onTargetUpdate(): void;
    onNodeChanged(): void;
}
export default SphereColliderComponentGizmo;
//# sourceMappingURL=gizmo-select.d.ts.map