/**
 * 用来管理日益复杂的 Gizmo 鼠标逻辑
 */
import { Node, Vec3, Event as CCEvent } from 'cc';
import { ISceneKeyboardEvent, ISceneMouseEvent } from '../../../../@types/private';
import GizmoOperationEventListener from './utils/gizmo-operation-event-listener';
export declare class GizmoMouseEvent<T extends {
    [key: string]: any;
} = {}> extends CCEvent implements ISceneMouseEvent {
    ctrlKey: boolean;
    shiftKey: boolean;
    altKey: boolean;
    metaKey: boolean;
    x: number;
    y: number;
    clientX: number;
    clientY: number;
    deltaX: number;
    deltaY: number;
    wheelDeltaX: number;
    wheelDeltaY: number;
    moveDeltaX: number;
    moveDeltaY: number;
    leftButton: boolean;
    middleButton: boolean;
    rightButton: boolean;
    button: number;
    buttons: number;
    movementX: number;
    movementY: number;
    hitPoint?: Vec3;
    handleName: string;
    node?: Node;
    customData?: T;
    constructor(type: string, event: ISceneMouseEvent, bubbles?: boolean);
}
declare enum SelectMode {
    Node = 0,
    Gizmo = 1
}
declare class GizmoOperation {
    private _regionSelecting;
    private _gizmoMoved;
    private _selectMode;
    private _hoverInNodeMap;
    private _curMouseDownInfos;
    private _gizmoMouseDownEvent;
    private _noGizmoMouseDownEvent;
    private _mouseDownRaycastGizmos?;
    private _anyKeyDown;
    private _gizmoOperationEventListeners;
    private _gizmoSelection;
    /**
     * 检查命中了什么节点
     * @param x
     * @param y
     * @returns
     */
    private raycastGizmos;
    private _emitEventToNode;
    /**
     * 当鼠标左键按下，但是没有按到 Gizmo 节点的时候触发
     * @param event
     * @returns
     */
    private _onNotGizmoMouseDown;
    /**
     * 当鼠标左键按下，但是没有按到 Gizmo 节点之后抬起鼠标的时候触发
     * @param event
     * @returns
     */
    private _onNotGizmoMouseUp;
    /**
     * 当鼠标左键按下，但是没有按到 Gizmo 节点之后移动鼠标的时候触发
     * @param event
     * @returns
     */
    private _onNotGizmoMouseMove;
    /**
     * 鼠标左键按到了 Gizmo 的时候触发
     * @param event 鼠标事件
     * @returns false 表示不再继续传播
     */
    private _onGizmoMouseDown;
    /**
     * 当鼠标左键按到了 Gizmo 之后抬起鼠标的时候触发
     * @param event
     * @returns
     */
    private _onGizmoMouseUp;
    /**
     * 当鼠标左键按下按到了 Gizmo 节点后，鼠标移动的时候触发
     * @param event
     */
    private _onGizmoMouseMove;
    /**
     * 鼠标按下的时候触发的函数，在这个函数内，会分成点中了 Gizmo 节点和没有点中 Gizmo 两种情况进行后续处理
     * 返回 false 会中断事件的继续传播
     * @param event
     * @returns
     */
    onMouseDown(event: ISceneMouseEvent): boolean | void;
    /**
     * 鼠标抬起的时候触发的函数，在这个函数内，会分成点中了 Gizmo 节点和没有点中 Gizmo 两种情况进行后续处理
     * @param event
     * @returns
     */
    onMouseUp(event: ISceneMouseEvent): boolean | void;
    /**
     * 鼠标移动的时候触发的函数，在这个函数内，会分成点中了 Gizmo 节点和没有点中 Gizmo 两种情况进行后续处理
     * @param event
     * @returns
     */
    onMouseMove(event: ISceneMouseEvent): boolean | void;
    onMouseWheel(): void;
    /**
     * 在 mouse move 的时候，如果没有事先触发 mouse down，则触发这个函数
     * @param event
     * @param results
     * @returns
     */
    private _changeMouseHover;
    private _select;
    private _selectNode;
    private _selectGizmo;
    private _regionSelect;
    private _regionSelectNode;
    private _regionSelectGizmo;
    init(gizmoMgr: any): void;
    clear(): void;
    onKeyDown(event: ISceneKeyboardEvent): boolean;
    onKeyUp(event: ISceneKeyboardEvent): boolean;
    registerGizmoOperationEventListener(listener: GizmoOperationEventListener): void;
    changeRegionSelectMode(mode: SelectMode): void;
    selectAllLightProbes(): void;
    unselectAllLightProbes(): void;
    duplicateCurrentSelectedProbes(): void;
    removeCurrentSelectedProbes(): void;
}
declare const _default: GizmoOperation;
export default _default;
//# sourceMappingURL=gizmo-operation.d.ts.map