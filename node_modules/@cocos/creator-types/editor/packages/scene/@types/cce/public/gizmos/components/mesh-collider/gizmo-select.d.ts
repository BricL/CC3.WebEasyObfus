import { Mesh } from 'cc';
import { SelectGizmo } from '../base';
declare class MeshColliderGizmo extends SelectGizmo {
    private _controller;
    init(): void;
    onShow(): void;
    onHide(): void;
    updateControllerData(): void;
    calcMeshData(mesh: Mesh): {
        points: number[];
        indices: number[];
    };
    private _generateWireFrameData;
    onTargetUpdate(): void;
    onNodeChanged(): void;
}
export default MeshColliderGizmo;
//# sourceMappingURL=gizmo-select.d.ts.map