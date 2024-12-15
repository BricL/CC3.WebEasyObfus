import { geometry, Node, renderer, Vec3, PhysicsRayResult } from 'cc';
type ray = geometry.Ray;
declare const ray: typeof geometry.Ray;
export interface IRaycastResult {
    node: Node;
    distance: number;
    hitPoint: Vec3;
}
export declare class Raycast {
    /**
     * @zh
     * 获取 raycastAllCanvas 后的检测结果
     */
    get rayResultCanvas(): IRaycastResult[];
    /**
     * @zh
     * 获取 raycastAllModels 后的检测结果
     */
    get rayResultModels(): IRaycastResult[];
    /**
     * @zh
     * 获取 raycastAll 后的检测结果
     */
    get rayResultAll(): IRaycastResult[];
    /**
     * @zh
     * 获取 raycastSingleModel 后的检测结果
     */
    get rayResultSingleModel(): IRaycastResult[];
    /**
     * @zh
     * 获取collider射线检测结果
     */
    get raycastColliderResults(): PhysicsRayResult[];
    /**
     * @en
     * Cast a ray into the scene, record all the intersected models and ui2d nodes in the result array
     * @param worldRay the testing ray
     * @param mask the layer mask to filter the models
     * @param distance the max distance , Infinity by default
     * @returns boolean , ray is hit or not
     * @note getter of this.rayResultAll can get recently result
     * @zh
     * 传入一条射线检测场景中所有的 3D 模型和 UI2D Node
     * @param worldRay 世界射线
     * @param mask mask 用于标记所有要检测的层，默认为 Default | UI2D
     * @param distance 射线检测的最大距离, 默认为 Infinity
     * @returns boolean , 射线是否有击中
     * @note 通过 this.rayResultAll 可以获取到最近的结果
     */
    raycastAll(renderScene: renderer.RenderScene, worldRay: ray, mask?: number, distance?: number, forSnap?: boolean, excludeMask?: number): boolean;
    private narrowPhaseStep;
    /**
     * @en
     * Cast a ray into the scene, record all the intersected models in the result array
     * @param worldRay the testing ray
     * @param mask the layer mask to filter the models
     * @param distance the max distance , Infinity by default
     * @returns boolean , ray is hit or not
     * @note getter of this.rayResultModels can get recently result
     * @zh
     * 传入一条射线检测场景中所有的 3D 模型。
     * @param worldRay 世界射线
     * @param mask 用于标记所有要检测的层，默认为 Default
     * @param distance 射线检测的最大距离, 默认为 Infinity
     * @returns boolean , 射线是否有击中
     * @note 通过 this.rayResultModels 可以获取到最近的结果
     */
    raycastAllModels(renderScene: renderer.RenderScene, worldRay: ray, mask: number | undefined, distance: number | undefined, forSnap: boolean, excludeMask?: number): boolean;
    /**
     * @en
     * Before you raycast the model, make sure the model is not null
     * @param worldRay the testing ray
     * @param model the testing model
     * @param mask the layer mask to filter the models
     * @param distance the max distance , Infinity by default
     * @returns boolean , ray is hit or not
     * @zh
     * 传入一条射线和一个 3D 模型进行射线检测。
     * @param worldRay 世界射线
     * @param model 进行检测的模型
     * @param mask 用于标记所有要检测的层，默认为 Default
     * @param distance 射线检测的最大距离, 默认为 Infinity
     * @param excludeMask 标记要排除的层
     * @returns boolean , 射线是否有击中
     */
    raycastSingleModel(worldRay: ray, model: renderer.scene.Model, mask: number | undefined, distance: number | undefined, forSnap: boolean, excludeMask?: number): boolean;
    /**
     * @en
     * Cast a ray into the scene, detect all canvas and its children
     * @param worldRay the testing ray
     * @param mask the layer mask to filter all ui2d aabb
     * @param distance the max distance , Infinity by default
     * @returns boolean , ray is hit or not
     * @note getter of this.rayResultCanvas can get recently result
     * @zh
     * 传入一条射线检测场景中所有的 Canvas 以及 Canvas 下的 Node
     * @param worldRay 世界射线
     * @param mask 用于标记所有要检测的层，默认为 UI_2D
     * @param distance 射线检测的最大距离, 默认为 Infinity
     * @param excludeMask 标记要排除的层
     * @returns boolean , 射线是否有击中
     * @note 通过 this.rayResultCanvas 可以获取到最近的结果
     */
    raycastAllCanvas(worldRay: ray, mask?: number, distance?: number, excludeMask?: number): boolean;
    /**
     * 射线检测所有colliders
     * @param worldRay
     * @param mask
     * @param distance
     */
    raycastAllColliders(worldRay: ray, mask?: number): boolean;
    private _raycastUI2DNode;
    private _raycastUI2DNodeRecursiveChildren;
}
declare const _default: Raycast;
export default _default;
//# sourceMappingURL=raycast.d.ts.map