import { SelectGizmo } from '../base';
import ImageController from '../../controller/image';
import { RectangleController } from '../../node/rectangle-controller';
declare class WebviewGizmo extends SelectGizmo {
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
//# sourceMappingURL=gizmo-persistent.d.ts.map