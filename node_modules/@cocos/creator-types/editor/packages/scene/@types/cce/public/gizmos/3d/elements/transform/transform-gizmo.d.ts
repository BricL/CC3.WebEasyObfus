import Gizmo from '../gizmo-base';
import ControllerBase from '../controller/controller-base';
import { Node } from 'cc';
import { IControlMouseEvent } from '../../../defines';
import { ISceneKeyboardEvent } from '../../../../../../../@types/private';
declare class TransformGizmo extends Gizmo {
    protected _controller: ControllerBase | null;
    protected updateControllerTransform?(): void;
    constructor(target: any);
    onShow(): void;
    onHide(): void;
    onTargetUpdate(): void;
    onNodeChanged(): void;
    protected broadcastNodeChangeMessage(node: Node): void;
    getSnappedValue(inNumber: number, snapStep: number): number;
    isControlKeyPressed(event: IControlMouseEvent): boolean;
    /**
     * 默认行为是 controller 被按下就打断
     * @param event
     * @returns
     */
    onGizmoKeyDown(event: ISceneKeyboardEvent): boolean;
    /**
     * 默认行为是 controller 被按下就打断
     * @param event
     * @returns
     */
    onGizmoKeyUp(event: ISceneKeyboardEvent): boolean;
}
export default TransformGizmo;
//# sourceMappingURL=transform-gizmo.d.ts.map