import { Node } from 'cc';
import { ISceneMouseEvent } from '../../../../../../../@types/private';
import SimpleSet from '../../../utils/set-util';
export default interface GizmoOperationEventListener {
    /**
     * @return Set<string> all nodes uuid
     */
    shouldEmitNodes(): SimpleSet<string>;
    select(nodes: SimpleSet<Node>): void;
    selectAll(): void;
    unselect(nodes: SimpleSet<Node>): void;
    unselectAll(): void;
    currentSelectedNodes(): SimpleSet<Node>;
    duplicateCurrentSelectedProbes(): SimpleSet<Node>;
    deleteCurrentSelectedProbes(): SimpleSet<Node>;
    onNotGizmoMouseDown(event: ISceneMouseEvent): void;
    onNotGizmoMouseUp(event: ISceneMouseEvent): void;
    onNotGizmoMouseMove(event: ISceneMouseEvent): void;
}
//# sourceMappingURL=gizmo-operation-event-listener.d.ts.map