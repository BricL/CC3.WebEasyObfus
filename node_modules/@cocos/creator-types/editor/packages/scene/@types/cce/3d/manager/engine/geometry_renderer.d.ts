/**
 *  对引擎geometry_renderer的封装;
 *  添加接口和引擎一致
 *  由于每帧都需要渲染，所以这个类主要是一个数据收集，在每帧渲染时，flush数据给引擎
 */
export declare const methods: readonly ["addDashedLine", "addTriangle", "addQuad", "addBoundingBox", "addCross", "addFrustum", "addCapsule", "addCylinder", "addCone", "addCircle", "addArc", "addPolygon", "addDisc", "addSector", "addSphere", "addTorus", "addOctahedron", "addBezier", "addMesh", "addIndexedMesh"];
declare class GeometryRenderer {
    private _renderer;
    private _dataMap;
    constructor();
    get renderer(): any;
    set renderer(renderer: any);
    flush(): void;
    removeData(method: string): void;
    removeDataAll(): void;
}
export { GeometryRenderer };
//# sourceMappingURL=geometry_renderer.d.ts.map