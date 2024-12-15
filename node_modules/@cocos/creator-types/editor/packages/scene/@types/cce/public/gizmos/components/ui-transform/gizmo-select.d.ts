import { UITransform } from 'cc';
import { SelectGizmo } from '../base';
declare class UITransformComponentGizmo extends SelectGizmo<UITransform> {
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
//# sourceMappingURL=gizmo-select.d.ts.map