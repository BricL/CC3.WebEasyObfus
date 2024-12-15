/// <reference types="node" />
import { EventEmitter } from 'events';
import GizmoOperationEventListener from '../gizmos/utils/gizmo-operation-event-listener';
import GizmoSelectionLogic, { UUID } from './gizmo-selection-logic';
import SimpleSet from '../gizmos/utils/set-util';
/**
 * 用于管理gizmo内部node选中状态的管理器
 * 这是一个简化版的Selection管理器
 * gizmo-node的选中/反选状态不能破坏原来Selection的内部平衡
 *
 * Event:
 * Selection.on('select_gizmo', (uuids) => {
 *     // uuid 当前选中的节点
 *     // uuids 当前所有被选中的节点数据
 * });
 * Selection.on('unselect_gizmo', (uuids) => {
 *     // uuid 当前取消选中的节点
 *     // uuids 当前所有被选中的节点数据
 * });
 */
export default class GizmoSelection extends EventEmitter {
    private readonly gizmoOperationEventListeners;
    logic: GizmoSelectionLogic;
    constructor(gizmoOperationEventListeners: GizmoOperationEventListener[]);
    processCurrent(currents: UUID[], region?: boolean, metaKey?: boolean): void;
    select(uuids: SimpleSet<UUID>): void;
    unselect(uuids: SimpleSet<UUID>): void;
    clear(): void;
    confirm(): void;
    unselectAll(): void;
}
//# sourceMappingURL=gizmo-selection.d.ts.map