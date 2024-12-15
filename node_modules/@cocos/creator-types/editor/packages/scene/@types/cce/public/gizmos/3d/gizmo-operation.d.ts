import { ISceneKeyboardEvent, ISceneMouseEvent } from '../../../../../@types/private';
import GizmoOperationEventListener from './elements/listener/gizmo-operation-event-listener';
import LightProbeEditModeListener from './elements/listener/light-probe-edit-mode-listener';
declare class GizmoOperation implements LightProbeEditModeListener {
    private _regionSelecting;
    private _hoverinGizmo;
    private _curSelectGizmo;
    private _gizmoMouseDownEvent;
    private _noGizmoMouseDownEvent;
    private _regionSelectMode;
    /**
     * alt || shift || ctrl || meta 之中的按键是否按下
     */
    private _anyKeyDown;
    private _gizmoOperationEventListeners;
    private _gizmoSelection;
    private raycastGizmos;
    private _emitEventToNode;
    private _onNotGizmoMouseDown;
    private _onNotGizmoMouseUp;
    private _onNotGizmoMouseMove;
    /**
     *
     * @param event 鼠标事件
     * @returns false表示不再继续传播
     */
    private _onGizmoMouseDown;
    private _onGizmoMouseUp;
    private _onGizmoMouseMove;
    private _select;
    private _regionSelectNode;
    private _selectGizmo;
    private _regionSelectGizmo;
    init(gizmoMgr: any): void;
    /**
     * 点击时主要分为点中gizmo和没点中的逻辑
     * @param event
     * @returns
     */
    onMouseDown(event: ISceneMouseEvent): boolean | void;
    onMouseUp(event: ISceneMouseEvent): boolean | void;
    onMouseMove(event: ISceneMouseEvent): false | undefined;
    onMouseWheel(): void;
    clear(): void;
    onMouseLeave(): void;
    onKeyDown(event: ISceneKeyboardEvent): boolean;
    onKeyUp(event: ISceneKeyboardEvent): boolean;
    registerGizmoOperationEventListener(listener: GizmoOperationEventListener): void;
    lightProbeEditModeChanged(mode: boolean): void;
    boundingBoxEditModeChanged(mode: boolean): void;
    selectAllLightProbes(): void;
    unselectAllLightProbes(): void;
    duplicateCurrentSelectedProbes(): void;
    removeCurrentSelectedProbes(): void;
}
declare const _default: GizmoOperation;
export default _default;
//# sourceMappingURL=gizmo-operation.d.ts.map