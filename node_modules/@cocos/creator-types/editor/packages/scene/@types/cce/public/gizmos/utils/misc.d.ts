import { Node, Vec3 } from 'cc';
declare class GizmosUtils {
    getCenter(nodes: any): any;
    getCenterWorldPos(nodes: any[]): any;
    getCenterWorldPos3D(nodes: Node[]): Vec3;
    static LimitLerp(a: number, b: number, t: number, tMin: number, tMax: number): number;
    getMaxCompInVec3(inVec3: Vec3): number;
}
export default GizmosUtils;
//# sourceMappingURL=misc.d.ts.map