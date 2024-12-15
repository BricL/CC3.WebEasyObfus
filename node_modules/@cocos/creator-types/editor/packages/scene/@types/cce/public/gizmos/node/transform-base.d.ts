import Gizmo from '../components/base/gizmo-select';
import ControllerBase from '../controller/base';
import { Node, Component } from 'cc';
import type { GizmoMouseEvent } from '../utils/defines';
import { ISceneKeyboardEvent } from '../../../../../@types/private';
declare class TransformGizmo extends Gizmo<Component> {
    protected _controller: ControllerBase;
    protected updateControllerTransform?(): void;
    protected isNodeLocked(node: Node): boolean;
    get nodes(): Node[];
    onShow(): void;
    onHide(): void;
    onTargetUpdate(): void;
    onNodeChanged(): void;
    protected broadcastNodeChangeMessage(node: Node): void;
    getSnappedValue(inNumber: number, snapStep: number): number;
    isControlKeyPressed(event: GizmoMouseEvent): boolean;
    /**
     * 默认行为是 controller 被按下就打断
     * @param event
     * @returns
     */
    onKeyDown(event: ISceneKeyboardEvent): boolean | undefined;
    /**
     * 默认行为是 controller 被按下就打断
     * @param event
     * @returns
     */
    onKeyUp(event: ISceneKeyboardEvent): boolean;
}
export default TransformGizmo;
//# sourceMappingURL=transform-base.d.ts.map