import { Mat4, Quat, Vec3 } from 'cc';
/**
 * @zh
 * 基础几何  轴对齐包围盒。
 */
export default class aabb {
    /**
     * @en
     * create a new aabb
     * @zh
     * 创建一个新的 aabb 实例。
     * @param px - aabb 的原点的 X 坐标。
     * @param py - aabb 的原点的 Y 坐标。
     * @param pz - aabb 的原点的 Z 坐标。
     * @param hw - aabb 宽度的一半。
     * @param hh - aabb 高度的一半。
     * @param hl - aabb 长度的一半。
     * @returns 返回新创建的 aabb 实例。
     */
    static create(px?: number, py?: number, pz?: number, hw?: number, hh?: number, hl?: number): aabb;
    /**
     * @en
     * clone a new aabb
     * @zh
     * 克隆一个 aabb。
     * @param a - 克隆的目标。
     * @returns 克隆出的 aabb。
     */
    static clone(a: aabb): aabb;
    /**
     * @en
     * copy the values from one aabb to another
     * @zh
     * 将从一个 aabb 的值复制到另一个 aabb。
     * @param {aabb} out 接受操作的 aabb。
     * @param {aabb} a 被复制的 aabb。
     * @return {aabb} out 接受操作的 aabb。
     */
    static copy(out: aabb, a: aabb): aabb;
    /**
     * @en
     * create a new aabb from two corner points
     * @zh
     * 从两个点创建一个新的 aabb。
     * @param out - 接受操作的 aabb。
     * @param minPos - aabb 的最小点。
     * @param maxPos - aabb 的最大点。
     * @returns {aabb} out 接受操作的 aabb。
     */
    static fromPoints(out: aabb, minPos: Vec3, maxPos: Vec3): aabb;
    /**
     * @en
     * Set the components of a aabb to the given values
     * @zh
     * 将 aabb 的属性设置为给定的值。
     * @param {aabb} out 接受操作的 aabb。
     * @param px - aabb 的原点的 X 坐标。
     * @param py - aabb 的原点的 Y 坐标。
     * @param pz - aabb 的原点的 Z 坐标。
     * @param hw - aabb 宽度的一半。
     * @param hh - aabb 高度的一半。
     * @param hl - aabb 长度度的一半。
     * @return {aabb} out 接受操作的 aabb。
     */
    static set(out: aabb, px: number, py: number, pz: number, hw: number, hh: number, hl: number): aabb;
    /**
     * @zh
     * 合并两个 aabb 到 out。
     * @param out 接受操作的 aabb。
     * @param a 输入的 aabb。
     * @param b 输入的 aabb。
     * @returns {aabb} out 接受操作的 aabb。
     */
    static merge(out: aabb, a: aabb, b: aabb): aabb;
    /**
     * @zh
     * 变换一个 aabb 到 out 中。
     * @param out 接受操作的 aabb。
     * @param a 输入的源 aabb。
     * @param matrix 矩阵。
     * @returns {aabb} out 接受操作的 aabb。
     */
    static transform(out: aabb, a: aabb, matrix: Readonly<Mat4>): aabb;
    /**
     * @zh
     * 本地坐标的中心点。
     */
    center: Vec3;
    /**
     * @zh
     * 长宽高的一半。
     */
    halfExtents: Vec3;
    constructor(px?: number, py?: number, pz?: number, hw?: number, hh?: number, hl?: number);
    /**
     * @en
     * Get the bounding points of this shape
     * @zh
     * 获取 aabb 的最小点和最大点。
     * @param {Vec3} minPos 最小点。
     * @param {Vec3} maxPos 最大点。
     */
    getBoundary(minPos: Vec3, maxPos: Vec3): void;
    /**
     * @en
     * Transform this shape
     * @zh
     * 将 out 根据这个 aabb 的数据进行变换。
     * @param m 变换的矩阵。
     * @param pos 变换的位置部分。
     * @param rot 变换的旋转部分。
     * @param scale 变换的缩放部分。
     * @param out 变换的目标。
     */
    transform(m: Mat4, pos: Vec3 | null, rot: Quat | null, scale: Vec3 | null, out: aabb): void;
    /**
     * @zh
     * 获得克隆。
     * @returns {aabb}
     */
    clone(): aabb;
    /**
     * @zh
     * 拷贝对象。
     * @param a 拷贝的目标。
     * @returns {aabb}
     */
    copy(a: aabb): aabb;
}
//# sourceMappingURL=aabb.d.ts.map