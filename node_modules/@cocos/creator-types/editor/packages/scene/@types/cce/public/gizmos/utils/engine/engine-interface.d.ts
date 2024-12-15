import { Node } from 'cc';
interface EngineInterface {
    create3DNode(name: string): Node;
    createMesh(primitive: any): void;
    addMeshToNode(node: any, mesh: any, opts: any, reuseMaterial?: any): void;
    setMeshColor(node: any, c: any): void;
    getMeshColor(node: any): any;
    setNodeOpacity(node: any, opacity: number): void;
    getNodeOpacity(node: any): number;
    setMaterialProperty(node: any, propName: string, value: any): void;
    getRaycastResults(rootNode: any, x: number, y: number): any;
    raycast(scene: any, camera: any, layer: any, x: number, y: number): any;
    getModel(node: any): any;
    updateVBAttr(mesh: any, attr: any, data: any): void;
    updateIB(mesh: any, data: any): void;
    updateBoundingBox(meshComp: any, minPos: any, maxPos: any): void;
    /**
     * 获得模型相关组件的包围盒
     * @param {*} component: any
     */
    getBoundingBox(component: any): any;
    getRootBoneNode(component: any): any;
    getRootBindPose(component: any): any;
    getCameraData(component: any): any;
    setCameraData(component: any, cameraData: any): void;
    getLightData(component: any): any;
    setLightData(component: any, lightData: any): void;
}
export default EngineInterface;
//# sourceMappingURL=engine-interface.d.ts.map