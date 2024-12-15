import { Vec2, Vec3 } from 'cc';
import { IMat3Like, IMat4Like, IVec2Like } from './type-define';
interface IWritableArrayLike<T> {
    length: number;
    [index: number]: T;
}
export declare class MVec2 {
    static ZERO: Readonly<Vec2>;
    static ONE: Readonly<Vec2>;
    static NEG_ONE: Readonly<Vec2>;
    static UNIT_X: Readonly<Vec2>;
    static UNIT_Y: Readonly<Vec2>;
    /**
     * @zh 获得指定向量的拷贝
     */
    static clone<Out extends IVec2Like>(a: Out): Vec2;
    /**
     * @zh 复制目标向量
     */
    static copy<Out extends IVec2Like>(out: Out, a: Out): Out;
    /**
     * @zh 设置向量值
     */
    static set<Out extends IVec2Like>(out: Out, x: number, y: number): Out;
    /**
     * @zh 逐元素向量加法
     */
    static add<Out extends IVec2Like>(out: Out, a: Out, b: Out): Out;
    /**
     * @zh 逐元素向量减法
     */
    static subtract<Out extends IVec2Like>(out: Out, a: Out, b: Out): Out;
    /**
     * @zh 逐元素向量乘法
     */
    static multiply<Out extends IVec2Like>(out: Out, a: Out, b: Out): Out;
    /**
     * @zh 逐元素向量除法
     */
    static divide<Out extends IVec2Like>(out: Out, a: Out, b: Out): Out;
    /**
     * @zh 逐元素向量向上取整
     */
    static ceil<Out extends IVec2Like>(out: Out, a: Out): Out;
    /**
     * @zh 逐元素向量向下取整
     */
    static floor<Out extends IVec2Like>(out: Out, a: Out): Out;
    /**
     * @zh 逐元素向量最小值
     */
    static min<Out extends IVec2Like>(out: Out, a: Out, b: Out): Out;
    /**
     * @zh 逐元素向量最大值
     */
    static max<Out extends IVec2Like>(out: Out, a: Out, b: Out): Out;
    /**
     * @zh 逐元素向量四舍五入取整
     */
    static round<Out extends IVec2Like>(out: Out, a: Out): Out;
    /**
     * @zh 向量标量乘法
     */
    static multiplyScalar<Out extends IVec2Like>(out: Out, a: Out, b: number): Out;
    /**
     * @zh 逐元素向量乘加: A + B * scale
     */
    static scaleAndAdd<Out extends IVec2Like>(out: Out, a: Out, b: Out, scale: number): Out;
    /**
     * @zh 求两向量的欧氏距离
     */
    static distance<Out extends IVec2Like>(a: Out, b: Out): number;
    /**
     * @zh 求两向量的欧氏距离平方
     */
    static squaredDistance<Out extends IVec2Like>(a: Out, b: Out): number;
    /**
     * @zh 求向量长度
     */
    static len<Out extends IVec2Like>(a: Out): number;
    /**
     * @zh 求向量长度平方
     */
    static lengthSqr<Out extends IVec2Like>(a: Out): number;
    /**
     * @zh 逐元素向量取负
     */
    static negate<Out extends IVec2Like>(out: Out, a: Out): Out;
    /**
     * @zh 逐元素向量取倒数，接近 0 时返回 Infinity
     */
    static inverse<Out extends IVec2Like>(out: Out, a: Out): Out;
    /**
     * @zh 逐元素向量取倒数，接近 0 时返回 0
     */
    static inverseSafe<Out extends IVec2Like>(out: Out, a: Out): Out;
    /**
     * @zh 归一化向量
     */
    static normalize<Out extends IVec2Like, Vec2Like extends IVec2Like>(out: Out, a: Vec2Like): Out;
    /**
     * @zh 向量点积（数量积）
     */
    static dot<Out extends IVec2Like>(a: Out, b: Out): number;
    /**
     * @zh 向量叉积（向量积），注意二维向量的叉积为与 Z 轴平行的三维向量
     */
    static cross<Out extends IVec2Like>(out: Vec3, a: Out, b: Out): Vec3;
    /**
     * @zh 逐元素向量线性插值： A + t * (B - A)
     */
    static lerp<Out extends IVec2Like>(out: Out, a: Out, b: Out, t: number): Out;
    /**
     * @zh 生成一个在单位圆上均匀分布的随机向量
     * @param scale 生成的向量长度
     */
    static random<Out extends IVec2Like>(out: Out, scale?: number): Out;
    /**
     * @zh 向量与三维矩阵乘法，默认向量第三位为 1。
     */
    static transformMat3<Out extends IVec2Like, MatLike extends IMat3Like>(out: Out, a: Out, m: IMat3Like): Out;
    /**
     * @zh 向量与四维矩阵乘法，默认向量第三位为 0，第四位为 1。
     */
    static transformMat4<Out extends IVec2Like, MatLike extends IMat4Like>(out: Out, a: Out, m: IMat4Like): Out;
    /**
     * @zh 返回向量的字符串表示
     */
    static str<Out extends IVec2Like>(a: Out): string;
    /**
     * @zh 向量转数组
     * @param ofs 数组起始偏移量
     */
    static toArray<Out extends IWritableArrayLike<number>>(out: Out, v: IVec2Like, ofs?: number): Out;
    /**
     * @zh 数组转向量
     * @param ofs 数组起始偏移量
     */
    static fromArray<Out extends IVec2Like>(out: Out, arr: IWritableArrayLike<number>, ofs?: number): Out;
    /**
     * @zh 向量等价判断
     */
    static strictEquals<Out extends IVec2Like>(a: Out, b: Out): boolean;
    /**
     * @zh 排除浮点数误差的向量近似等价判断
     */
    static equals<Out extends IVec2Like>(a: Out, b: Out, epsilon?: number): boolean;
    /**
     * @zh 求两向量夹角弧度
     */
    static angle<Out extends IVec2Like>(a: Out, b: Out): number;
}
export {};
//# sourceMappingURL=vec2.d.ts.map