import { Vec3 } from 'cc';
import { IMat3Like, IMat4Like, IQuatLike, IVec3Like } from './type-define';
interface IWritableArrayLike<T> {
    length: number;
    [index: number]: T;
}
export declare class MVec3 {
    static UNIT_X: Readonly<Vec3>;
    static UNIT_Y: Readonly<Vec3>;
    static UNIT_Z: Readonly<Vec3>;
    static ZERO: Readonly<Vec3>;
    static ONE: Readonly<Vec3>;
    static NEG_ONE: Readonly<Vec3>;
    /**
     * @zh 将目标赋值为零向量
     */
    static zero<Out extends IVec3Like>(out: Out): Out;
    /**
     * @zh 获得指定向量的拷贝
     */
    static clone<Out extends IVec3Like>(a: Out): Vec3;
    /**
     * @zh 复制目标向量
     */
    static copy<Out extends IVec3Like, Vec3Like extends IVec3Like>(out: Out, a: Vec3Like): Out;
    /**
     * @zh 设置向量值
     */
    static set<Out extends IVec3Like>(out: Out, x: number, y: number, z: number): Out;
    /**
     * @zh 逐元素向量加法
     */
    static add<Out extends IVec3Like>(out: Out, a: Out, b: Out): Out;
    /**
     * @zh 逐元素向量减法
     */
    static subtract<Out extends IVec3Like>(out: Out, a: Out, b: Out): Out;
    /**
     * @zh 逐元素向量乘法 (分量积)
     */
    static multiply<Out extends IVec3Like, Vec3Like_1 extends IVec3Like, Vec3Like_2 extends IVec3Like>(out: Out, a: Vec3Like_1, b: Vec3Like_2): Out;
    /**
     * @zh 逐元素向量除法
     */
    static divide<Out extends IVec3Like>(out: Out, a: Out, b: Out): Out;
    /**
     * @zh 逐元素向量向上取整
     */
    static ceil<Out extends IVec3Like>(out: Out, a: Out): Out;
    /**
     * @zh 逐元素向量向下取整
     */
    static floor<Out extends IVec3Like>(out: Out, a: Out): Out;
    /**
     * @zh 逐元素向量最小值
     */
    static min<Out extends IVec3Like>(out: Out, a: Out, b: Out): Out;
    /**
     * @zh 逐元素向量最大值
     */
    static max<Out extends IVec3Like>(out: Out, a: Out, b: Out): Out;
    /**
     * @zh 逐元素向量四舍五入取整
     */
    static round<Out extends IVec3Like>(out: Out, a: Out): Out;
    /**
     * @zh 向量标量乘法
     */
    static multiplyScalar<Out extends IVec3Like, Vec3Like extends IVec3Like>(out: Out, a: Vec3Like, b: number): Out;
    /**
     * @zh 逐元素向量乘加: A + B * scale
     */
    static scaleAndAdd<Out extends IVec3Like>(out: Out, a: Out, b: Out, scale: number): Out;
    /**
     * @zh 求两向量的欧氏距离
     */
    static distance<Out extends IVec3Like>(a: Out, b: Out): number;
    /**
     * @zh 求两向量的欧氏距离平方
     */
    static squaredDistance<Out extends IVec3Like>(a: Out, b: Out): number;
    /**
     * @zh 求向量长度
     */
    static len<Out extends IVec3Like>(a: Out): number;
    /**
     * @zh 求向量长度平方
     */
    static lengthSqr<Out extends IVec3Like>(a: Out): number;
    /**
     * @zh 逐元素向量取负
     */
    static negate<Out extends IVec3Like>(out: Out, a: Out): Out;
    /**
     * @zh 逐元素向量取倒数，接近 0 时返回 Infinity
     */
    static invert<Out extends IVec3Like>(out: Out, a: Out): Out;
    /**
     * @zh 逐元素向量取倒数，接近 0 时返回 0
     */
    static invertSafe<Out extends IVec3Like>(out: Out, a: Out): Out;
    /**
     * @zh 归一化向量
     */
    static normalize<Out extends IVec3Like, Vec3Like extends IVec3Like>(out: Out, a: Vec3Like): Out;
    /**
     * @zh 向量点积（数量积）
     */
    static dot<Out extends IVec3Like>(a: Out, b: Out): number;
    /**
     * @zh 向量叉积（向量积）
     */
    static cross<Out extends IVec3Like>(out: Out, a: Readonly<IVec3Like>, b: Readonly<IVec3Like>): Out;
    /**
     * @zh 逐元素向量线性插值： A + t * (B - A)
     */
    static lerp<Out extends IVec3Like>(out: Out, a: Out, b: Out, t: number): Out;
    /**
     * @zh 生成一个在单位球体上均匀分布的随机向量
     * @param scale 生成的向量长度
     */
    static random<Out extends IVec3Like>(out: Out, scale?: number): Out;
    /**
     * @zh 向量与四维矩阵乘法，默认向量第四位为 1。
     */
    static transformMat4<Out extends IVec3Like, Vec3Like extends IVec3Like, MatLike extends IMat4Like>(out: Out, a: Vec3Like, m: MatLike): Out;
    /**
     * @zh 向量与四维矩阵乘法，默认向量第四位为 0。
     */
    static transformMat4Normal<Out extends IVec3Like, MatLike extends IMat4Like>(out: Out, a: Out, m: MatLike): Out;
    /**
     * @zh 向量与三维矩阵乘法
     */
    static transformMat3<Out extends IVec3Like, MatLike extends IMat3Like>(out: Out, a: Out, m: MatLike): Out;
    /**
     * @zh 向量仿射变换
     */
    static transformAffine<Out extends IVec3Like, VecLike extends IVec3Like, MatLike extends IMat4Like>(out: Out, v: VecLike, m: MatLike): Out;
    /**
     * @zh 向量四元数乘法
     */
    static transformQuat<Out extends IVec3Like, VecLike extends IVec3Like, QuatLike extends IQuatLike>(out: Out, a: VecLike, q: QuatLike): Out;
    /**
     * @zh 以缩放 -> 旋转 -> 平移顺序变换向量
     */
    static transformRTS<Out extends IVec3Like, VecLike extends IVec3Like, QuatLike extends IQuatLike>(out: Out, a: VecLike, r: QuatLike, t: VecLike, s: VecLike): Out;
    /**
     * @zh 以平移 -> 旋转 -> 缩放顺序逆变换向量
     */
    static transformInverseRTS<Out extends IVec3Like, VecLike extends IVec3Like, QuatLike extends IQuatLike>(out: Out, a: VecLike, r: QuatLike, t: VecLike, s: VecLike): Out;
    /**
     * @zh 绕 X 轴旋转向量指定弧度
     * @param v 待旋转向量
     * @param o 旋转中心
     * @param a 旋转弧度
     */
    static rotateX<Out extends IVec3Like>(out: Out, v: Out, o: Out, a: number): Out;
    /**
     * @zh 绕 Y 轴旋转向量指定弧度
     * @param v 待旋转向量
     * @param o 旋转中心
     * @param a 旋转弧度
     */
    static rotateY<Out extends IVec3Like>(out: Out, v: Out, o: Out, a: number): Out;
    /**
     * @zh 绕 Z 轴旋转向量指定弧度
     * @param v 待旋转向量
     * @param o 旋转中心
     * @param a 旋转弧度
     */
    static rotateZ<Out extends IVec3Like>(out: Out, v: Out, o: Out, a: number): Out;
    /**
     * @zh 向量转数组
     * @param ofs 数组起始偏移量
     */
    static toArray<Out extends IWritableArrayLike<number>>(out: Out, v: IVec3Like, ofs?: number): Out;
    /**
     * @zh 数组转向量
     * @param ofs 数组起始偏移量
     */
    static fromArray<Out extends IVec3Like>(out: Out, arr: IWritableArrayLike<number>, ofs?: number): Out;
    /**
     * @zh 向量等价判断
     */
    static strictEquals<Out extends IVec3Like>(a: Out, b: Out): boolean;
    /**
     * @zh 排除浮点数误差的向量近似等价判断
     */
    static equals<Out extends IVec3Like>(a: Out, b: Out, epsilon?: number): boolean;
    /**
     * @zh 求两向量夹角弧度
     */
    static angle<Out extends IVec3Like>(a: Out, b: Out): number;
    /**
     * @zh 计算向量在指定平面上的投影
     * @param a 待投影向量
     * @param n 指定平面的法线
     */
    static projectOnPlane<Out extends IVec3Like>(out: Out, a: Out, n: Out): Out;
    /**
     * @zh 计算向量在指定向量上的投影
     * @param a 待投影向量
     * @param n 目标向量
     */
    static project<Out extends IVec3Like>(out: Out, a: Out, b: Out): Out;
}
export {};
//# sourceMappingURL=vec3.d.ts.map