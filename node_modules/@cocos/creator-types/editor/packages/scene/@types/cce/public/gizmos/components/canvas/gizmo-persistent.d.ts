import { Canvas } from 'cc';
import { SelectGizmo } from '../base';
import { RectangleController } from '../../node/rectangle-controller';
declare class CanvasGizmo extends SelectGizmo<Canvas> {
    protected _controller: RectangleController;
    init(): void;
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
export default CanvasGizmo;
//# sourceMappingURL=gizmo-persistent.d.ts.map