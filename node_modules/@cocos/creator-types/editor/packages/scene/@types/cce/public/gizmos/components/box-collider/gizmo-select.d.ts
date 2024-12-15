import { BoxCollider } from 'cc';
import { SelectGizmo } from '../base';
declare class BoxColliderComponentGizmo extends SelectGizmo<BoxCollider> {
    private _controller;
    private _size;
    private _scale;
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
//# sourceMappingURL=gizmo-select.d.ts.map