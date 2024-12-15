import { Node, PolygonCollider2D } from 'cc';
export declare class Physics2DManager {
    getContourPoints(node: Node, opts?: {
        threshold: number;
        loop: boolean;
    }, cb?: Function): Promise<any>;
    resetPoints(comp: PolygonCollider2D): void;
    resetPointsByUuid(uuid: string): void;
}
declare const _default: Physics2DManager;
export default _default;
//# sourceMappingURL=index.d.ts.map