import { LightProbeGroup, Node, Vec3 } from 'cc';
import { IControlMouseEvent } from '../../../defines';
import LightProbeEditModeListener from '../listener/light-probe-edit-mode-listener';
import BoxController from './box-controller';
import { TargetDelegate } from './light-probe-controller';
export default class LightProbeBoundingBoxController extends BoxController implements LightProbeEditModeListener {
    targetDelegate: TargetDelegate<LightProbeGroup>;
    _editable: boolean;
    private _boundingBoxScale;
    private _minPos;
    private _maxPos;
    private _editMode;
    get editMode(): boolean;
    private _positionNode;
    private _positionGizmo;
    private _gizmoEventListenerIndex;
    private _positionMouseDown;
    constructor(rootNode: Node, targetDelegate: TargetDelegate<LightProbeGroup>);
    initPositionGizmo(): void;
    show(): void;
    updateController(): void;
    updatePositionGizmo(): void;
    onMouseDown(event: IControlMouseEvent): void;
    onMouseMove(event: IControlMouseEvent): void;
    onMouseUp(event: IControlMouseEvent): void;
    updateDataFromBBController(event: IControlMouseEvent): void;
    onShow(): void;
    onHide(): void;
    getBoundingBoxCenter(): Vec3;
    setBoundingBoxCenter(center: Vec3): void;
    lightProbeEditModeChanged(mode: boolean): void;
    boundingBoxEditModeChanged(mode: boolean): void;
}
//# sourceMappingURL=light-probe-bounding-box-controller.d.ts.map