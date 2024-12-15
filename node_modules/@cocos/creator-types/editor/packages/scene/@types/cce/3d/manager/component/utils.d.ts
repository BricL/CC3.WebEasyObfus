import { Node, SphereCollider, BoxCollider, PolygonCollider2D, MeshCollider, CapsuleCollider, CylinderCollider, TerrainCollider, ConeCollider, Camera } from 'cc';
declare class ComponentUtils {
    /**
     * 添加组件对应的内部处理方法
     */
    addComponentMap: {
        SphereCollider(component: SphereCollider, node: Node): void;
        BoxCollider(component: BoxCollider, node: Node): void;
        ConeCollider(component: ConeCollider, node: Node): void;
        CylinderCollider(component: CylinderCollider, node: Node): void;
        CapsuleCollider(component: CapsuleCollider, node: Node): void;
        MeshCollider(component: MeshCollider, node: Node): void;
        TerrainCollider(component: TerrainCollider, node: Node): void;
        BoxCollider2D(component: any, node: Node): void;
        CircleCollider2D(component: any, node: Node): void;
        PolygonCollider2D(component: PolygonCollider2D, node: Node): void;
        Camera(component: Camera, node: Node): void;
    };
}
declare const _default: ComponentUtils;
export default _default;
//# sourceMappingURL=utils.d.ts.map