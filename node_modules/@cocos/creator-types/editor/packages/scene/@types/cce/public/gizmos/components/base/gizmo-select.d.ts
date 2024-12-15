import { Node, Component } from 'cc';
import { IChangeNodeOptions, ISceneKeyboardEvent } from '../../../../../../@types/private';
declare class GizmoBase<T extends Component = Component> {
    private _hidden;
    private _target;
    protected _isInitialized: boolean;
    protected _isControlBegin: boolean;
    protected _recorded: boolean;
    protected _nodeSelected: boolean;
    protected init?(): void;
    protected onShow?(): void;
    protected onHide?(): void;
    protected onTargetUpdate?(): void;
    onUpdate?(deltaTime: number): void;
    onDestroy?(): void;
    onNodeChanged?(event: IChangeNodeOptions): void;
    onKeyDown?(event: ISceneKeyboardEvent): boolean | void;
    onKeyUp?(event: ISceneKeyboardEvent): boolean | void;
    onCameraControlModeChanged?(mode: number): void;
    shouldRegisterGizmoOperationEvent: boolean;
    undoID: string;
    constructor(target: T | null);
    get target(): T | null;
    set target(value: T | null);
    get nodes(): Node[];
    layer(): string;
    protected getGizmoRoot(): Node;
    onControlBegin(propPath: string | null): void;
    onControlUpdate(propPath: string | null): void;
    onControlEnd(propPath: string | null): void;
    recordChanges(): void;
    commitChanges(): void;
    /**
     * 返回当前 Gizmo 是否可以显示
     */
    checkVisible(): boolean;
    visible(): boolean;
    initialize(): void;
    destroy(): void;
    show(): void;
    hide(): void;
    update(deltaTime: number): void;
    getCompPropPath(propName: string): string | null;
    protected onComponentChanged(node: Node): void;
    onEditorCameraMoved(): void;
    registerCameraMovedEvent(): void;
    unregisterCameraMoveEvent(): void;
    onNodeSelectionChanged(selection: boolean): void;
}
export default GizmoBase;
//# sourceMappingURL=gizmo-select.d.ts.map