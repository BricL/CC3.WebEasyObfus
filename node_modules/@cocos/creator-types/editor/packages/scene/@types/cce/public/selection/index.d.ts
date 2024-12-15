/// <reference types="node" />
import { EventEmitter } from 'events';
import UuidArray from './uuid-array';
/**
 * 节点选择管理器
 *
 * 因为场景需要根据选中的节点去渲染 gizmo 等物体，所以需要单独管理一套。
 * 理论上应该同 Editor 内的 Selection 扩展管理的 node 数据一致。
 *
 * Event:
 * Selection.on('select', (uuid, uuids) => {
 *     // uuid 当前选中的节点
 *     // uuids 当前所有被选中的节点数据
 * });
 * Selection.on('unselect', (uuid, uuids) => {
 *     // uuid 当前取消选中的节点
 *     // uuids 当前所有被选中的节点数据
 * });
 */
declare class Selection extends EventEmitter {
    selectUuids: UuidArray;
    unselectUuids: UuidArray;
    private uuids;
    private noticeTimer;
    private _hover?;
    constructor();
    /**
     * 判断节点是否选中
     * @param {*} uuid
     */
    isSelect(uuid: string): boolean;
    /**
     * 查询所有选中的节点 uuids 数组
     */
    query(): string[];
    /**
     * 选中某个节点
     * @param {*} uuid
     */
    select(uuid: string): void;
    /**
     * 取消某个节点的选中状态
     * @param {*} uuid
     */
    unselect(uuid: string): void;
    selectGizmo(uuid: string): void;
    unselectGizmo(uuid: string): void;
    clearGizmo(): void;
    /**
     * 取消所有节点的选中状态
     */
    clear(): void;
    /**
     * 将缓存的队列通知给其他扩展
     */
    notice(): void;
    /**
     * 通知管理器，该节点已经在编辑器内被选中
     * 这时候不需要发送选中消息给编辑器
     * @param {*} uuid
     */
    _select(uuid: string): void;
    /**
     * 通知管理器，该节点已经在编辑器内被取消选中
     * 这时候不需要发送选中消息给编辑器
     * @param {*} uuid
     */
    _unselect(uuid: string): void;
}
declare const _default: Selection;
export default _default;
//# sourceMappingURL=index.d.ts.map