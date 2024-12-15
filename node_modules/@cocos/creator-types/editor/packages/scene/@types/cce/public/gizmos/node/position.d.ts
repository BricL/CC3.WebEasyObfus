import { IVec3Like, Node, physics, Vec3 } from 'cc';
import { ISceneKeyboardEvent } from '../../../../../@types/private';
import { IRaycastResult } from '../../../utils/raycast';
import type { GizmoMouseEvent } from '../utils/defines';
import PositionController from './position-controller';
import GizmoEventListener from '../utils/gizmo-event-listener';
import TransformGizmo from './transform-base';
declare class PositionGizmo extends TransformGizmo {
    protected _controller: PositionController;
    disableUndo: boolean;
    disableSnap: boolean;
    private readonly _nodesWorldPosList;
    private _snapMode;
    private _snapMouseDown;
    private _handler;
    private _event;
    private _mouseDown;
    /** 顶点吸附时选中的顶点，相对于节点的位置 */
    private _nodeToSnapVertex;
    private _gizmoMouseEventListeners;
    getFirstLockNode(): Node | undefined;
    isNodeLocked(node: Node): boolean;
    init(): void;
    layer(): string;
    onTargetUpdate(): void;
    createController(): void;
    get controller(): PositionController;
    set controller(val: PositionController);
    addMouseEventListener(listener: GizmoEventListener): string;
    removeMouseEventListener(id: string): void;
    checkLock(event: GizmoMouseEvent): void;
    onControllerMouseDown(event: GizmoMouseEvent): void;
    onControllerMouseMove(event: GizmoMouseEvent): void;
    onControllerMouseUp(event: GizmoMouseEvent): void;
    onKeyDown(event: ISceneKeyboardEvent): undefined | false | true;
    onKeyUp(event: ISceneKeyboardEvent): boolean;
    applySnapIncrement(out: Vec3 | undefined, snapStep: IVec3Like, controllerName: string): Vec3;
    /** 获取某一轴向应用了单位捕捉增量的值 */
    applySnapIncrementForAxis(out: Vec3 | undefined, deltaPosOfAxis: Readonly<Vec3>, snapStep: IVec3Like, axis: 'x' | 'y' | 'z'): Vec3;
    updateDataFromController(event: GizmoMouseEvent): void;
    updateControllerTransform(force?: boolean): void;
    /**
     *
     * @param event
     * @returns 返回false打断传递
     */
    onArrowDown(event: ISceneKeyboardEvent): boolean;
    onArrowUp(event: ISceneKeyboardEvent): boolean;
    onSurfaceSnapDown(event: ISceneKeyboardEvent): boolean;
    onSurfaceSnapUp(event: ISceneKeyboardEvent): boolean;
    onVertexSnapDown(event: ISceneKeyboardEvent): boolean;
    onVertexSnapUp(event: ISceneKeyboardEvent): boolean;
    updateSnapUI(isSnaping: boolean): void;
    /**
     * 计算吸附模式下的实际偏移值
     * @param pos 节点待添加的偏移量
     * @param event
     */
    updateSnapPosition(pos: Vec3, event: GizmoMouseEvent): true | undefined;
    /**
     * 顶点吸附模式下，左键没按下时，鼠标移动可以修改想要拖动的顶点
     * @param event
     */
    updateVertexPos(event: GizmoMouseEvent): void;
    onVertexSnapMove(event: GizmoMouseEvent): boolean | undefined;
    /**
     * 修改gizmo的位置
     * @param pos 新的位置
     */
    setGizmoPosition(pos: Vec3): void;
    /**
     * 计算吸附到目标点需要的delta
     * @param out 输出结果
     * @param snapWorldPos 目标节点的世界坐标
     */
    calculateDeltaPos(out: Vec3, snapWorldPos: Vec3): void;
    /**
     * 获取非target中的节点(吸附时需要排除自身)
     * @param resultNodes 射线检测结果，有两种1.无处理的结果 2.整理成nodeArray
     * @returns result nodes 中符合条件的元素
     */
    getNodeExcludeTarget(resultNodes: Node[]): Node | null;
    getNodeExcludeTarget(resultNodes: IRaycastResult[]): IRaycastResult | null;
    getNodeExcludeTarget(resultNodes: physics.PhysicsRayResult[]): physics.PhysicsRayResult | null;
    drawHitPoint(hitPoint: Vec3): void;
}
export default PositionGizmo;
//# sourceMappingURL=position.d.ts.map