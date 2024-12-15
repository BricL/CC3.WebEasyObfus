import GizmoBase from '../../../gizmo-base';
import { Vec3, Vec2 } from 'cc';
import { ISceneKeyboardEvent } from '../../../../../../../../../@types/private';
declare class BoxCollider2DGizmo extends GizmoBase {
    private _controller;
    private _size;
    private _offset;
    private _anchor;
    private _altKey;
    private _propPath;
    init(): void;
    onShow(): void;
    onHide(): void;
    createController(): void;
    onControllerMouseDown(): void;
    onControllerMouseMove(): void;
    onControllerMouseUp(): void;
    onKeyDown(event: ISceneKeyboardEvent): void;
    onKeyUp(event: ISceneKeyboardEvent): void;
    handleAreaMove(delta: Vec3): void;
    modifyPosDeltaWithAnchor(type: any, posDelta: Vec3, sizeDelta: Vec2, anchor: Vec2, keepCenter: boolean): void;
    handleTargetSize(type: any, delta: Vec3, keepCenter: boolean): void;
    updateControllerData(): void;
    updateController(): void;
    onTargetUpdate(): void;
    onNodeChanged(): void;
}
export default BoxCollider2DGizmo;
//# sourceMappingURL=box-collider-2d-gizmo.d.ts.map