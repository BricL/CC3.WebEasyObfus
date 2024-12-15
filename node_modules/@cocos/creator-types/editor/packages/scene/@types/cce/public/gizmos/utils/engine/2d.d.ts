/// <reference path="../../../../../../../../../resources/3d/engine/bin/.declarations/cc.d.ts" />
/// <reference path="3d.d.ts" />
/// <reference path="../../3d/gizmo-manager.d.ts" />
import EngineInterface from './engine-interface';
import { Node } from 'cc';
export declare class Engine2D implements EngineInterface {
    raycast(scene: any, camera: any, layer: any, x: number, y: number): void;
    setMaterialProperty(node: any, propName: string, value: any): void;
    updateBoundingBox(meshComp: any, minPos: any, maxPos: any): void;
    gfx: any;
    CullMode: any;
    AttributeName: any;
    PrimitiveMode: any;
    LightType: any;
    ProjectionType: any;
    constructor();
    create3DNode(name: string): Node;
    createMesh(primitive: any): any;
    addMeshToNode(node: any, mesh: any, opts?: any): void;
    setMeshColor(node: any, c: any): void;
    getMeshColor(node: any): any;
    setNodeOpacity(node: any, opacity: number): void;
    getNodeOpacity(node: any): any;
    getRaycastResults(rootNode: any, x: number, y: number): any;
    getModel(node: any): any;
    updateVBAttr(mesh: any, attr: any, data: any): void;
    updateIB(mesh: any, data: any): void;
    getBoundingBox(component: any): import("../../../../utils/aabb").default | null;
    getRootBoneNode(component: any): any;
    getRootBindPose(component: any): import("cc").math.Mat4 | null;
    getCameraData(component: any): any;
    setCameraData(component: any, cameraData: any): void;
    getLightData(component: any): any;
    setLightData(component: any, lightData: any): void;
}
declare const _default: Engine2D;
export default _default;
//# sourceMappingURL=2d.d.ts.map