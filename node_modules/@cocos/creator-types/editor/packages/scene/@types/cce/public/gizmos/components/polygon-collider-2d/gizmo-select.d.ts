import { Vec3, PolygonCollider2D } from 'cc';
import type { GizmoMouseEvent } from '../../utils/defines';
import { ISceneKeyboardEvent } from '../../../../../../@types/private';
import { SelectGizmo } from '../base';
import { IPolygonHandleData } from './controller-polygon';
declare class PolygonCollider2DGizmo extends SelectGizmo<PolygonCollider2D> {
    private _controller;
    private _leftDeleteLine;
    private _rightDeleteLine;
    private _offset;
    private _ctrlKey;
    private _metaKey;
    private _propPath;
    private _3dPoints;
    private _points;
    private _curHoverInHandleType;
    private _curHoverInElemIndex;
    private _isDeletePointKeyDown;
    get isDeletePointKeyDown(): boolean;
    set isDeletePointKeyDown(value: boolean);
    get curHoverInHandleType(): string;
    set curHoverInHandleType(value: string);
    highlightDeleteLine(active: boolean): void;
    init(): void;
    onShow(): void;
    onHide(): void;
    createController(): void;
    onControllerMouseDown(): void;
    onControllerMouseMove(event: GizmoMouseEvent): void;
    onControllerMouseUp(): void;
    onControllerHoverIn(event: GizmoMouseEvent<{
        index: number;
    }>): void;
    onControllerHoverOut(event: GizmoMouseEvent): void;
    onKeyDown(event: ISceneKeyboardEvent): void;
    onKeyUp(event: ISceneKeyboardEvent): void;
    worldToLocalPos(out: Vec3, inPos: Vec3): void;
    handleAreaMove(delta: Vec3): void;
    handlePoints(handleMoveData: IPolygonHandleData): void;
    updateControllerData(): void;
    updateController(): void;
    onTargetUpdate(): void;
    onNodeChanged(): void;
}
export default PolygonCollider2DGizmo;
//# sourceMappingURL=gizmo-select.d.ts.map