import { Component } from 'cc';
import GizmoBase from '../components/base/gizmo-select';
import { TGizmoType } from './types';
declare module 'cc' {
    interface Node {
        gizmo: GizmoBase | null;
        iconGizmo: GizmoBase | null;
        persistentGizmo: GizmoBase | null;
        noNeedCommitChanges?: boolean;
    }
    interface Component {
        gizmo: GizmoBase | null;
        iconGizmo: GizmoBase | null;
        persistentGizmo: GizmoBase | null;
    }
}
export declare function setGizmoProperty(type: TGizmoType, obj: Component, gizmo: GizmoBase | null): void;
export declare function getGizmoProperty(type: TGizmoType, obj: Component): GizmoBase | null | undefined;
//# sourceMappingURL=data.d.ts.map