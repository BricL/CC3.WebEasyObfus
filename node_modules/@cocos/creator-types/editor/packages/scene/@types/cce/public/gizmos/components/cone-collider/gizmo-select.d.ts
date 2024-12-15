import { ConeCollider } from 'cc';
import { SelectGizmo } from '../base';
declare class ConeColliderComponentGizmo extends SelectGizmo<ConeCollider> {
    private _controller;
    private _maxScale;
    private _radius;
    private _height;
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
export default ConeColliderComponentGizmo;
//# sourceMappingURL=gizmo-select.d.ts.map