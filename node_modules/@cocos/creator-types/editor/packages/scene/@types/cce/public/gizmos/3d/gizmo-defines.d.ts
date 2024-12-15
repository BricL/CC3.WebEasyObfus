import PositionGizmo from './elements/transform/position-gizmo';
import RotationGizmo from './elements/transform/rotation-gizmo';
import ScaleGizmo from './elements/transform/scale-gizmo';
import RectGizmo from './elements/transform/rect-gizmo';
import SceneGizmo from './elements/scene-gizmo';
import GizmoBase from './elements/gizmo-base';
declare const GizmoDefines: {
    'cc.Scene': typeof SceneGizmo;
    position: typeof PositionGizmo;
    rotation: typeof RotationGizmo;
    scale: typeof ScaleGizmo;
    rect: typeof RectGizmo;
    components: Record<string, typeof GizmoBase>;
    iconGizmo: Record<string, typeof GizmoBase>;
    persistentGizmo: Record<string, typeof GizmoBase>;
};
export default GizmoDefines;
//# sourceMappingURL=gizmo-defines.d.ts.map