import TransformGizmo from './transform-gizmo';
import { Node, Vec3 } from 'cc';
import { IControlMouseEvent } from '../../../defines';
import { ISceneKeyboardEvent } from '../../../../../../../@types/private';
declare class ScaleGizmo extends TransformGizmo {
    private _localScaleList;
    private _offsetList;
    private _center;
    isNodeLocked(node: Node): boolean;
    init(): void;
    layer(): string;
    createController(): void;
    onControllerMouseDown(): void;
    onControllerMouseMove(event: IControlMouseEvent): void;
    onControllerMouseUp(): void;
    onGizmoKeyDown(event: ISceneKeyboardEvent): boolean;
    onGizmoKeyUp(event: ISceneKeyboardEvent): boolean;
    setScaleWithPrecision(node: Node, newScale: Vec3, precision: number): void;
    checkSnap(scaleDelta: Vec3, snapStep: number): void;
    updateDataFromController(event: IControlMouseEvent): void;
    updateControllerTransform(): void;
}
export default ScaleGizmo;
//# sourceMappingURL=scale-gizmo.d.ts.map