import type { GizmoMouseEvent } from './defines';
export default interface GizmoEventListener {
    onControllerMouseDown?(event: GizmoMouseEvent): void;
    onControllerMouseMove?(event: GizmoMouseEvent): void;
    onControllerMouseUp?(event: GizmoMouseEvent): void;
    onControllerHoverIn?(event: GizmoMouseEvent): void;
    onControllerHoverOut?(event: GizmoMouseEvent): void;
}
//# sourceMappingURL=gizmo-event-listener.d.ts.map