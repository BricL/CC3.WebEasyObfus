import { geometry, Mat4, MeshRenderer, Node, Quat, Rect, renderer, Size, UITransform, Vec2, Vec3, Vec4 } from 'cc';
export declare class NodeUtils {
    getObbFromRect(mat: Mat4, rect: Rect, out_bl: Vec2, out_tl: Vec2, out_tr: Vec2, out_br: Vec2): Vec2[];
    getWorldBounds(node: Node, size?: Size, out?: Rect): any;
    getWorldOrientedBounds(node: Node, size?: Size | null, out_bl?: Vec2 | null, out_tl?: Vec2 | null, out_tr?: Vec2 | null, out_br?: Vec2 | null): Vec3[];
    getObbFromUITransform(modelComp: UITransform, mat: Mat4): Vec3[];
    getObbFromMeshRenderer(modelComp: MeshRenderer, mat: Mat4): Vec3[];
    getObbFromBound(aabb: geometry.AABB): Vec3[];
    getScenePosition(node: Node): Readonly<Vec3>;
    setScenePosition(node: Node, value: Vec3): void;
    getSceneRotation(node: Node): 0 | Quat;
    setSceneRotation(node: Node, value: Quat): void;
    getWorldPosition(node: Node): Vec3;
    setWorldPosition(node: Node, value: Vec3): void;
    getWorldRotation(node: Node): Quat;
    setWorldRotation(node: Node, value: Quat): void;
    getWorldScale(node: Node): Vec3;
    /**
     * 查找所有 Component, 看是否有任一符合标记的
     * @method _hasFlagInComponents
     * @param {Number} flag - 只能包含一个标记, 不能是复合的 mask
     * @returns {boolean}
     */
    _hasFlagInComponents(node: Node, flag: number): boolean;
    /**
     *
     * @param node
     * @param flag
     * @returns
     */
    hasComponent(node: Node, comps: string[]): boolean;
    getNodePath(node: Node | null): string;
    makeVec3InPrecision(inVec3: Vec3, precision: number): Vec3;
    makeVec2InPrecision(inVec2: Vec2, precision: number): Vec2;
    getWorldPosition3D(node: Node, out?: Vec3): Vec3;
    setWorldPosition3D(node: Node, value: Vec3, precision?: number): void;
    getWorldRotation3D(node: Node, out?: Quat): Quat;
    setWorldRotation3D(node: Node, value: Quat): void;
    getEulerAngles(node: Node): Readonly<Vec3>;
    setEulerAngles(node: Node, value: Vec3): void;
    getWorldScale3D(node: Node): Vec3;
    limitRange(distance: number): number;
    makeVec3InRange(inVec3: Vec3, min: number, max: number): Vec3;
    getCenterWorldPos3D(nodes: Node[]): Vec3;
    getMaxRangeOfNode(node: Node): number;
    getMinRangeOfNodes(nodes: Node[]): number;
    getMaxRangeOfNodes(nodes: ReadonlyArray<Node>): number;
    /**
     * 检测一个节点是否是某个节点的一部分
     * @param testNode 测试节点
     * @param rootNode 根节点
     */
    isPartOfNode(testNode: Node, rootNode: Node): boolean;
    isEditorNode(node: Node): boolean;
    private _getRangeFromParticleComp;
    /**
     * 默认在场景物体选择中只排除对SceneGizmo（右上角的坐标轴）的射线检测
     * 传入引擎的坐标系
     * @param camera
     * @param x
     * @param y
     * @param mask
     * @returns
     */
    getRaycastResultNodes(camera: renderer.scene.Camera, x: number, y: number, mask?: number): Node[];
    /**
     * 获取射线检测结果
     * 传入引擎的坐标系
     * @param camera
     * @param x
     * @param y
     * @param mask
     * @returns
     */
    getRaycastResults(camera: renderer.scene.Camera, x: number, y: number, mask?: number): import("./raycast").IRaycastResult[];
    /**
     * 获取射线检测结果
     * 传入引擎的坐标系
     * @param camera
     * @param x
     * @param y
     * @param mask
     * @returns
     */
    getRaycastResultsForSnap(camera: renderer.scene.Camera, x: number, y: number, mask?: number): import("./raycast").IRaycastResult[];
    private _collectNodesForRegion;
    isNodeInRegion(node: Node, camera: renderer.scene.Camera, left: number, right: number, top: number, bottom: number): boolean;
    isModelInRegion(m: renderer.scene.Model, camera: renderer.scene.Camera, left: number, right: number, top: number, bottom: number): boolean;
    getRegionNodes(camera: renderer.scene.Camera, left: number, right: number, top: number, bottom: number, mask?: number, shouldFilterForeground?: boolean): Node[];
    /**
    * 根据节点和路径得到组件名和属性名
    * @param node
    * @param propPath 改数组长度时：__comps__.1.clips.length 和数组元素时 __comps__.1.clips.0
    */
    getNameDataByPropPath(node: Node, propPath: string): {
        compName: string;
        propName: string;
    };
    getBoundaryOfMeshNode(node: Node): geometry.AABB | undefined | null;
    getBoundaryOfMeshNodes(nodes: ReadonlyArray<Node>): geometry.AABB | undefined | null;
    /**
     * 获取鼠标位置指向的node身上的一定距离内的mesh顶点
     * @param node 目标
     * @param camera 场景相机
     * @param mouseX 鼠标x坐标
     * @param mouseY 鼠标y坐标
     * @param distance 小于该距离才认为是鼠标附近的顶点
     * @returns 收集到的顶点列表
     */
    getMeshVertexAroundMouse(node: Node, camera: any, mouseX: number, mouseY: number, distance?: number): Vec4[];
}
declare const _default: NodeUtils;
export default _default;
//# sourceMappingURL=node.d.ts.map