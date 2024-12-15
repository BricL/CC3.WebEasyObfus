import ControllerBase from './controller-base';
import { IControlMouseEvent } from '../../../defines';
import { Node, Quat, Vec3, Color } from 'cc';
declare class RotationController extends ControllerBase {
    private _deltaRotation;
    private _rotFactor;
    private _baseRadius;
    private _tubeRadius;
    private _circleBorderNode;
    private _circleBorderMR;
    private _cutoffNode;
    private _cutoffMR;
    private _indicator;
    private _mouseDownRot;
    private _mouseDeltaPos;
    private _indicatorStartDir;
    private _rotateAlignDir;
    private _transformAxisDir;
    private _axisDir;
    private _deltaAngle;
    private _handleAxisDir;
    private _graduationNode;
    private _graduationMR;
    get transformAxisDir(): Vec3;
    get indicatorStartDir(): Vec3;
    constructor(rootNode: Node);
    createRotationShape(axisName: string, torusRot: Vec3, arrowRot: Vec3, arcFromDir: Vec3, arcRadian: number, color: Color): void;
    createGraduationShape(parent: Node, color?: Color): void;
    updateGraduation(normal: Vec3, fromDir: Vec3, graduationInterval: number): void;
    setGraduation(graduationInterval: number): void;
    showGraduation(): void;
    hideGraduation(): void;
    initShape(): void;
    isHitOnAxisArrow(hitNode: Node, axisName: string): boolean;
    isInCutoffBack(axisName: string, x: number, y: number): boolean;
    onMouseDown(event: IControlMouseEvent): void;
    onMouseMove(event: IControlMouseEvent): void;
    /**
     * 重置所有 handle 的节点的可见性
     */
    protected resetAllHandelNodes(): void;
    onMouseUp(event: IControlMouseEvent): void;
    onMouseLeave(event: IControlMouseEvent): void;
    onHoverIn(event: IControlMouseEvent): void;
    onHoverOut(): void;
    setNodesOpacity(nodes: Node[], opacity: number): void;
    getDeltaRotation(): Quat;
    getDeltaAngle(): number;
    getHandleAxisDir(): Vec3;
    onShow(): void;
    onHide(): void;
    updateRotationIndicator(normal: Vec3, fromDir: Vec3, radian: number): void;
    adjustControllerSize(): void;
}
export default RotationController;
//# sourceMappingURL=rotation-controller.d.ts.map