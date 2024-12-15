import { Mesh } from 'cc';
import GizmoBase from '../../gizmo-base';
declare class MeshColliderGizmo extends GizmoBase {
    private _controller;
    init(): void;
    onShow(): void;
    onHide(): void;
    updateControllerData(): void;
    calcMeshData(mesh: Mesh): {
        points: number[];
        indices: number[];
    };
    private _generateWireframeData;
    onTargetUpdate(): void;
    onNodeChanged(): void;
}
export default MeshColliderGizmo;
//# sourceMappingURL=mesh-collider-gizmo.d.ts.map