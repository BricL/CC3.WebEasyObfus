import SimpleSet from '../gizmos/utils/set-util';
export type UUID = string;
export type ProcessResult = {
    shouldSelects: SimpleSet<UUID>;
    shouldUnselects: SimpleSet<UUID>;
};
/**
 * GizmoSelectionLogic的任意修改都必须保证
 * 9.gizmo-selection.spec.js的测试通过
 */
export default class GizmoSelectionLogic {
    /**
     * 用于记录被处理过的节点
     */
    buffer: SimpleSet<UUID>;
    /**
     * 表示本次从鼠标按下到抬起之前，被选中的节点
     */
    selected: SimpleSet<UUID>;
    /**
     * 表示上一次鼠标抬起后，被选中的节点
     */
    lastSelects: SimpleSet<UUID>;
    process(currents: UUID[], metaKey?: boolean): ProcessResult;
    select(uuids: SimpleSet<UUID>): void;
    clear(): void;
    confirm(): void;
}
//# sourceMappingURL=gizmo-selection-logic.d.ts.map