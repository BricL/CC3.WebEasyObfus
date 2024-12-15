import { SelectGizmo } from '../base';
import LODController from './controller-lod';
declare class LODGroupGizmo extends SelectGizmo {
    protected _controller: LODController;
    init(): void;
    onEditorCameraMoved(): void;
    onShow(): void;
    onHide(): void;
    createController(): void;
    onControllerMouseDown(): void;
    onControllerMouseMove(): void;
    onControllerMouseUp(): void;
    updateControllerData(): void;
    updateControllerTransform(): void;
    updateController(): void;
    onTargetUpdate(): void;
    onNodeChanged(): void;
}
export default LODGroupGizmo;
//# sourceMappingURL=gizmo-select.d.ts.map