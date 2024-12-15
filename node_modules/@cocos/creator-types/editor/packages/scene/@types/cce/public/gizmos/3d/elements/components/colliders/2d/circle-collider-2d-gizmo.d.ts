import GizmoBase from '../../../gizmo-base';
import { Vec3 } from 'cc';
declare class CircleCollider2DGizmo extends GizmoBase {
    private _controller;
    private _radius;
    private _offset;
    private _propRadiusPath;
    private _propOffsetPath;
    private _curHandleType;
    private _maxScale;
    init(): void;
    onShow(): void;
    onHide(): void;
    createController(): void;
    onControllerMouseDown(): void;
    onControllerMouseMove(): void;
    onControllerMouseUp(): void;
    handleAreaMove(delta: Vec3): void;
    handleRadius(deltaRadius: number): void;
    updateControllerData(): void;
    updateController(): void;
    onTargetUpdate(): void;
    onNodeChanged(): void;
}
export default CircleCollider2DGizmo;
//# sourceMappingURL=circle-collider-2d-gizmo.d.ts.map