import { Vec3, Vec2, primitives, Node, Color, MeshRenderer, IVec3Like } from 'cc';
export interface IMeshPrimitive {
    primitiveType?: number;
    positions: Readonly<IVec3Like>[];
    normals?: Vec3[];
    uvs?: Vec2[];
    indices?: number[];
    minPos?: Vec3;
    maxPos?: Vec3;
    boundingRadius?: number;
    doubleSided?: boolean;
}
export declare class DynamicMeshPrimitive implements IMeshPrimitive {
    boundingRadius?: number;
    doubleSided?: boolean;
    indices?: number[];
    maxPos?: Vec3;
    minPos?: Vec3;
    normals?: Vec3[];
    positions: Readonly<IVec3Like>[];
    primitiveType?: number;
    uvs?: Vec2[];
    constructor(primitive: IMeshPrimitive);
    transformToDynamicGeometry(): primitives.IDynamicGeometry;
}
export interface ICreateMeshOption {
    dashed?: boolean;
}
export interface IMaterialOption {
    /** 使用的effect名字 */
    effectName?: string;
    /** 剔除类型 */
    cullMode?: number;
    /** 图元类型 */
    primitive?: number;
    /** 渲染优先级 */
    priority?: number;
    /** 透明度值 */
    alpha?: number;
    /** 使用第几个technique */
    technique?: number;
    /** 使用无光照的technique */
    unlit?: boolean;
    /** 使用带贴图的technique */
    texture?: boolean;
    /** 使用纯颜色的 technique */
    pureColor?: boolean;
    /** 使用不进行深度测试的technique */
    noDepthTestForLines?: boolean;
    /** 使用深度测试的technique */
    depthTestForTriangles?: boolean;
    /** 使用虚线 */
    dashed?: boolean;
    /** 使用球谐渲染 */
    useLightProbe?: boolean;
}
export interface IAddMeshToNodeOption extends IMaterialOption {
    forwardPipeline?: boolean;
    /** 节点名称 */
    name?: string;
    instancing?: boolean;
}
export interface IAddQuadToNodeOptions extends IAddMeshToNodeOption {
    needBoundingBox?: boolean;
}
export interface IAddLineToNodeOptions extends IAddMeshToNodeOption {
    bodyBBSize?: number;
}
export interface IRectangleControllerOption {
    needAnchor?: boolean;
}
export interface IControlMouseEvent {
    x: number;
    y: number;
    altKey: boolean;
    metaKey: boolean;
    ctrlKey: boolean;
    shiftKey: boolean;
    moveDeltaX: number;
    moveDeltaY: number;
    hitPoint: Vec3;
    node: Node;
    handleName: string;
    customData?: any;
}
export interface IHandleData {
    name: string;
    topNode: Node;
    rendererNodes: Node[];
    oriColors: Color[];
    oriOpacities: number[];
    normalTorusNode?: Node | null;
    indicatorCircle?: Node | null;
    arrowNode?: Node | null;
    normalTorusMR?: MeshRenderer;
    panPlane?: Node;
    customData?: any;
}
//# sourceMappingURL=defines.d.ts.map