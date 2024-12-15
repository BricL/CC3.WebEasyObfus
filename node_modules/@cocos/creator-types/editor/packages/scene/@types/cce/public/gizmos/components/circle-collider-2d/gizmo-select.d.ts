import { Vec3, CircleCollider2D } from 'cc';
import { SelectGizmo } from '../base';
declare class CircleCollider2DGizmo extends SelectGizmo<CircleCollider2D> {
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
//# sourceMappingURL=gizmo-select.d.ts.map