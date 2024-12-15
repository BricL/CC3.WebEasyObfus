import GizmoBase from '../gizmo-base';
import ImageController from '../controller/image-controller';
import { RectangleController } from '../controller/rectangle-controller';
declare class WebviewGizmo extends GizmoBase {
    protected _controller: ImageController;
    protected _rectController: RectangleController;
    init(): void;
    onShow(): void;
    onHide(): void;
    onDestroy(): void;
    createController(): void;
    onControllerMouseDown(): void;
    onControllerMouseMove(): void;
    onControllerMouseUp(): void;
    syncImageControllerData(): void;
    syncRectControllerData(): void;
    updateControllerData(): void;
    updateControllerTransform(): void;
    updateController(): void;
    onTargetUpdate(): void;
    onNodeChanged(): void;
}
export default WebviewGizmo;
//# sourceMappingURL=webview-gizmo.d.ts.map