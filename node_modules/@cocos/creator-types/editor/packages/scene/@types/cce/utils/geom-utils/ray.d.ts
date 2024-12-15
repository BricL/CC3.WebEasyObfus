/**
 * @category geometry
 */
import { Vec3 } from 'cc';
import { IVec3Like } from '../math/type-define';
/**
 * @zh
 * 基础几何 射线。
 */
export default class ray {
    /**
     * @en
     * create a new ray
     * @zh
     * 创建一条射线。
     * @param {number} ox 起点的 x 部分。
     * @param {number} oy 起点的 y 部分。
     * @param {number} oz 起点的 z 部分。
     * @param {number} dx 方向的 x 部分。
     * @param {number} dy 方向的 y 部分。
     * @param {number} dz 方向的 z 部分。
     * @return {ray} 射线。
     */
    static create(ox?: number, oy?: number, oz?: number, dx?: number, dy?: number, dz?: number): ray;
    /**
     * @en
     * Creates a new ray initialized with values from an existing ray
     * @zh
     * 从一条射线克隆出一条新的射线。
     * @param {ray} a 克隆的目标。
     * @return {ray} 克隆出的新对象。
     */
    static clone(a: ray): ray;
    /**
     * @en
     * Copy the values from one ray to another
     * @zh
     * 将从一个 ray 的值复制到另一个 ray。
     * @param {ray} out 接受操作的 ray。
     * @param {ray} a 被复制的 ray。
     * @return {ray} out 接受操作的 ray。
     */
    static copy(out: ray, a: ray): ray;
    /**
     * @en
     * create a ray from two points
     * @zh
     * 用两个点创建一条射线。
     * @param {ray} out 接受操作的射线。
     * @param {Vec3} origin 射线的起点。
     * @param {Vec3} target 射线上的一点。
     * @return {ray} out 接受操作的射线。
     */
    static fromPoints(out: ray, origin: Vec3, target: Vec3): ray;
    /**
     * @en
     * Set the components of a ray to the given values
     * @zh
     * 将给定射线的属性设置为给定的值。
     * @param {ray} out 接受操作的射线。
     * @param {number} ox 起点的 x 部分。
     * @param {number} oy 起点的 y 部分。
     * @param {number} oz 起点的 z 部分。
     * @param {number} dx 方向的 x 部分。
     * @param {number} dy 方向的 y 部分。
     * @param {number} dz 方向的 z 部分。
     * @return {ray} out 接受操作的射线。
     */
    static set(out: ray, ox: number, oy: number, oz: number, dx: number, dy: number, dz: number): ray;
    /**
     * @zh
     * 起点。
     */
    o: Vec3;
    /**
     * @zh
     * 方向。
     */
    d: Vec3;
    private _type;
    /**
     * 构造一条射线。
     * @param {number} ox 起点的 x 部分。
     * @param {number} oy 起点的 y 部分。
     * @param {number} oz 起点的 z 部分。
     * @param {number} dx 方向的 x 部分。
     * @param {number} dy 方向的 y 部分。
     * @param {number} dz 方向的 z 部分。
     */
    constructor(ox?: number, oy?: number, oz?: number, dx?: number, dy?: number, dz?: number);
    computeHit(out: IVec3Like, distance: number): void;
}
//# sourceMappingURL=ray.d.ts.map