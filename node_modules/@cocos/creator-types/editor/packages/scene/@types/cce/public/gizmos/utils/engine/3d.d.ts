declare module 'cc' {
    interface Node {
        modelComp?: ModelComponent;
        modelColor?: Color;
    }
    interface RenderingSubMesh {
        iBuffer?: ArrayBuffer;
        vBuffer?: ArrayBuffer;
    }
}
import { Camera, Color, Component, geometry, gfx, IVec3Like, Light, math, MeshRenderer, ModelComponent, Node, primitives, Material, Mesh, Layers, physics } from 'cc';
import { IRaycastResult } from '../../../../utils/raycast';
import type { IAddMeshToNodeOption, ICreateMeshOption, IMeshPrimitive, DynamicMeshPrimitive } from '../defines';
import EngineInterface from './engine-interface';
export declare const ray: geometry.Ray;
export declare class RaycastResults extends Array<IRaycastResult> {
    ray: geometry.Ray;
    constructor(ray: geometry.Ray);
}
export declare enum HighlightFace {
    NONE = 0,
    UP = 1,
    DOWN = 2,
    LEFT = 3,
    RIGHT = 4,
    FRONT = 5,
    BACK = 6
}
export declare class Engine3D implements EngineInterface {
    static instance: Engine3D;
    static createInstance(): Engine3D;
    readonly panPlaneLayer: Readonly<Layers.Enum>;
    readonly CullMode: Readonly<typeof gfx.CullMode>;
    readonly AttributeName: Readonly<typeof gfx.AttributeName>;
    readonly PrimitiveMode: Readonly<typeof gfx.PrimitiveMode>;
    readonly LightType: Readonly<typeof Light.Type>;
    readonly ProjectionType: Readonly<typeof Camera.ProjectionType>;
    readonly FOVAxis: Readonly<typeof Camera.FOVAxis>;
    protected constructor();
    create3DNode(name?: string): Node;
    createMesh(primitive: IMeshPrimitive, opts?: ICreateMeshOption): Mesh;
    transformToDynamicGeometry(primitive: IMeshPrimitive): primitives.IDynamicGeometry;
    createDynamicMesh(primitive: DynamicMeshPrimitive, opts: (primitives.ICreateDynamicMeshOptions & ICreateMeshOption)): Mesh;
    updateDynamicMesh(meshRenderer: MeshRenderer, subIndex: number, primitive: DynamicMeshPrimitive): void;
    addMeshToNode(node: Node, mesh: any, opts?: IAddMeshToNodeOption, reuseMaterial?: Material): void;
    setMeshSHCoefficients(node: Node, coefficients: Float32Array): void;
    setMeshColor(node: Node, c: Color): void;
    getMeshColor(node: Node): Color | undefined;
    setNodeOpacity(node: Node, opacity: number): void;
    getNodeOpacity(node: Node): number;
    setMaterialProperty(node: Node, propName: string, value: any): void;
    /**
     * 返回射线检测查到的数据
     *   需要注意，这里返回的对象，可能会在对象池里复用，最终会导致数据变化
     * @param rootNode
     * @param x
     * @param y
     * @param distance
     * @param excludeMask
     * @returns
     */
    getRaycastResults(rootNode: Node, x: number, y: number, distance?: number, excludeMask?: number): RaycastResults;
    getRaycastResultsByNodes(nodes: Node[], x: number, y: number, distance: number | undefined, forSnap: boolean, excludeMask?: number): RaycastResults;
    raycast(scene: any, camera: any, layer: any, x: number, y: number, distance?: number, excludeMask?: number): RaycastResults | null;
    raycastAllColliders(camera: any, x: number, y: number): physics.PhysicsRayResult[] & {
        ray?: geometry.Ray;
    };
    getModel(node: Node): MeshRenderer | null;
    updatePositions(comp: MeshRenderer, data: IVec3Like[]): void;
    updateVBAttr(comp: MeshRenderer, attr: string, data: number[]): void;
    updateIB(comp: MeshRenderer, data: number[]): void;
    updateBoundingBox(meshComp: MeshRenderer, minPos?: math.Vec3, maxPos?: math.Vec3): void;
    getBoundingBox(component: Component): import("../../../../utils/aabb").default | geometry.AABB | null;
    getRootBoneNode(component: any): Node | null;
    getRootBindPose(component: any): math.Mat4 | null;
    getCameraData(component: Camera): any;
    setCameraData(component: any, cameraData: any): void;
    getLightData(component: any): any;
    setLightData(component: any, lightData: any): void;
}
declare const _default: Engine3D;
export default _default;
//# sourceMappingURL=3d.d.ts.map