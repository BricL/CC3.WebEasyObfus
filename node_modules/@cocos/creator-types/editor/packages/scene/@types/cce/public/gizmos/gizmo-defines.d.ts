import { Component } from 'cc';
import GizmoBase from './components/base/gizmo-select';
declare const GizmoDefines: {
    components: Record<string, new (target: Component | null) => GizmoBase>;
    iconGizmo: Record<string, new (target: Component | null) => GizmoBase>;
    persistentGizmo: Record<string, new (target: Component | null) => GizmoBase>;
    methods: Record<string, {
        [name: string]: (...args: any[]) => void;
    }>;
};
export default GizmoDefines;
//# sourceMappingURL=gizmo-defines.d.ts.map