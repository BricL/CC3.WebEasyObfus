import EditableController from './editable-controller';
import { IControlMouseEvent } from '../../../defines';
import { Node } from 'cc';
declare class FrustumController extends EditableController {
    private _aspect;
    private _near;
    private _far;
    private _cameraProjection;
    private _fov;
    private _fovAxis;
    private _orthoHeight;
    private _oriDir;
    private _deltaWidth;
    private _deltaHeight;
    private _deltaDistance;
    private _mouseDeltaPos;
    private _curDistScalar;
    private _frustumNode;
    private _frustumMeshRenderer;
    constructor(rootNode: Node);
    getFarClipSize(isOrtho: boolean, orthoHeight: number, fov: number, aspect: number, far: number, fovAxis: number): {
        farHalfHeight: number;
        farHalfWidth: number;
    };
    _updateEditHandle(axisName: string): void;
    initShape(): void;
    updateSize(camProj: number, orthoHeight: number, fov: number, aspect: number, near: number, far: number, fovAxis: number): void;
    onMouseDown(event: IControlMouseEvent): void;
    onMouseMove(event: IControlMouseEvent): void;
    onMouseUp(event: IControlMouseEvent): void;
    onMouseLeave(event: IControlMouseEvent): void;
    getDeltaWidth(): number;
    getDeltaHeight(): number;
    getDeltaDistance(): number;
}
export default FrustumController;
//# sourceMappingURL=frustum-controller.d.ts.map