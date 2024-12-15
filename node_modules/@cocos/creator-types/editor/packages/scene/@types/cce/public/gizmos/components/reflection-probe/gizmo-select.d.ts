import { Material, IMaterialInfo } from 'cc';
import type { GizmoMouseEvent } from '../../utils/defines';
import { SelectGizmo } from '../base';
declare class ReflectionProbeGizmo extends SelectGizmo {
    private _controller;
    static readonly SPHERE_NODE_NAME = "Reflection Probe Sphere";
    static readonly PLANE_NODE_NAME = "Reflection Probe Plane";
    private static _PLANE_PREFAB;
    private static _SPHERE_PREFAB;
    private _bbHalfSize;
    private _sphereMeshRenderer;
    private _planeMeshRenderer;
    private _sphere;
    private _plane;
    protected _loadModelState: 'loading' | 'completed' | 'idle';
    onBBControllerMouseDown(event: GizmoMouseEvent): void;
    onBBControllerMouseMove(event: GizmoMouseEvent): void;
    onBBControllerMouseUp(event: GizmoMouseEvent): void;
    init(): void;
    onShow(): void;
    generateMaterial(options?: IMaterialInfo): Material;
    onHide(): void;
    createController(): void;
    loadModel(): void;
    private loadSphere;
    private loadPlane;
    updateControllerTransform(): void;
    updateControllerData(): void;
    onTargetUpdate(): void;
    onNodeChanged(): void;
}
export default ReflectionProbeGizmo;
//# sourceMappingURL=gizmo-select.d.ts.map