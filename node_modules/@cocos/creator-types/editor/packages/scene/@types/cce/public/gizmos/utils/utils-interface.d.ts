import GizmoUtils from './misc';
declare class UtilsInterface {
    GizmoUtils: GizmoUtils;
    baseDist: number;
    constructor();
    /**
     * 锁定并隐藏鼠标
     */
    requestPointerLock(): void;
    /**
     * 退出鼠标的锁定
     */
    exitPointerLock(): void;
    /**
     * 发送消息
     * @param {消息内容} message
     * @param {参数} params
     */
    emitNodeMessage(message: string, ...params: any[]): void;
    /**
     * 广播消息
     * @param {消息内容} message
     * @param {参数} params
     */
    broadcastMessage(message: string, ...params: any[]): void;
    /**
     * 当Gizmo操作的结点数据改变时
     * @param {节点} node
     */
    onNodeChanged(node: string, ...params: any[]): void;
    /**
     * 获取Gizmo的根节点
     */
    getGizmoRoot(): void;
    /**
     * 通知引擎立刻刷新，用于2dx中
     */
    repaintEngine(): void;
    /**
     * 记录结点当前信息
     * @param {节点} nodes
     */
    recordChanges(nodes: string[]): string;
    /**
     * 提交结点变化信息
     * @param {*} nodes
     */
    commitChanges(undoID: string): void;
    clampSize(inSize: any, precision?: number): void;
    /**
     * 选中某个节点
     * @param {*} uuid
     */
    select(uuid: string): void;
    changePointer(type: string): void;
}
export default UtilsInterface;
//# sourceMappingURL=utils-interface.d.ts.map