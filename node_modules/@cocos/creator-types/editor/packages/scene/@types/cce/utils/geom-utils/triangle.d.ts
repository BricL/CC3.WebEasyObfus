/**
 * @category geometry
 */
import { Vec3 } from 'cc';
/**
 * @zh
 * 基础几何 三角形。
 */
export default class triangle {
    /**
     * @en
     * create a new triangle
     * @zh
     * 创建一个新的 triangle。
     * @param {number} ax a 点的 x 部分。
     * @param {number} ay a 点的 y 部分。
     * @param {number} az a 点的 z 部分。
     * @param {number} bx b 点的 x 部分。
     * @param {number} by b 点的 y 部分。
     * @param {number} bz b 点的 z 部分。
     * @param {number} cx c 点的 x 部分。
     * @param {number} cy c 点的 y 部分。
     * @param {number} cz c 点的 z 部分。
     * @return {triangle} 一个新的 triangle。
     */
    static create(ax?: number, ay?: number, az?: number, bx?: number, by?: number, bz?: number, cx?: number, cy?: number, cz?: number): triangle;
    /**
     * @en
     * clone a new triangle
     * @zh
     * 克隆一个新的 triangle。
     * @param {triangle} t 克隆的目标。
     * @return {triangle} 克隆出的新对象。
     */
    static clone(t: triangle): triangle;
    /**
     * @en
     * copy the values from one triangle to another
     * @zh
     * 将一个 triangle 的值复制到另一个 triangle。
     * @param {triangle} out 接受操作的 triangle。
     * @param {triangle} t 被复制的 triangle。
     * @return {triangle} out 接受操作的 triangle。
     */
    static copy(out: triangle, t: triangle): triangle;
    /**
     * @en
     * Create a triangle from three points
     * @zh
     * 用三个点创建一个 triangle。
     * @param {triangle} out 接受操作的 triangle。
     * @param {Vec3} a a 点。
     * @param {Vec3} b b 点。
     * @param {Vec3} c c 点。
     * @return {triangle} out 接受操作的 triangle。
     */
    static fromPoints(out: triangle, a: Vec3, b: Vec3, c: Vec3): triangle;
    /**
     * @en
     * Set the components of a triangle to the given values
     * @zh
     * 将给定三角形的属性设置为给定值。
     * @param {triangle} out 给定的三角形。
     * @param {number} ax a 点的 x 部分。
     * @param {number} ay a 点的 y 部分。
     * @param {number} az a 点的 z 部分。
     * @param {number} bx b 点的 x 部分。
     * @param {number} by b 点的 y 部分。
     * @param {number} bz b 点的 z 部分。
     * @param {number} cx c 点的 x 部分。
     * @param {number} cy c 点的 y 部分。
     * @param {number} cz c 点的 z 部分。
     * @return {triangle}
     * @function
     */
    static set(out: triangle, ax: number, ay: number, az: number, bx: number, by: number, bz: number, cx: number, cy: number, cz: number): triangle;
    /**
     * @zh
     * 点 a。
     */
    a: Vec3;
    /**
     * @zh
     * 点 b。
     */
    b: Vec3;
    /**
     * @zh
     * 点 c。
     */
    c: Vec3;
    private _type;
    /**
     * 构造一个三角形。
     * @param {number} ax a 点的 x 部分。
     * @param {number} ay a 点的 y 部分。
     * @param {number} az a 点的 z 部分。
     * @param {number} bx b 点的 x 部分。
     * @param {number} by b 点的 y 部分。
     * @param {number} bz b 点的 z 部分。
     * @param {number} cx c 点的 x 部分。
     * @param {number} cy c 点的 y 部分。
     * @param {number} cz c 点的 z 部分。
     */
    constructor(ax?: number, ay?: number, az?: number, bx?: number, by?: number, bz?: number, cx?: number, cy?: number, cz?: number);
}
//# sourceMappingURL=triangle.d.ts.map