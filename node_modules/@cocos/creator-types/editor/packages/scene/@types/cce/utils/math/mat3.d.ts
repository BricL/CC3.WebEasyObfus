import { IMat3Like, IMat4Like, IQuatLike, IVec2Like, IVec3Like } from './type-define';
import { Mat3, Vec3 } from 'cc';
interface IWritableArrayLike<T> {
    length: number;
    [index: number]: T;
}
export declare class MMat3 {
    static IDENTITY: Readonly<Mat3>;
    /**
     * @zh 获得指定矩阵的拷贝
     */
    static clone<Out extends IMat3Like>(a: Out): Mat3;
    /**
     * @zh 复制目标矩阵
     */
    static copy<Out extends IMat3Like>(out: Out, a: Out): Out;
    /**
     * @zh 设置矩阵值
     */
    static set<Out extends IMat3Like>(out: Out, m00: number, m01: number, m02: number, m10: number, m11: number, m12: number, m20: number, m21: number, m22: number): Out;
    /**
     * @zh 将目标赋值为单位矩阵
     */
    static identity<Out extends IMat3Like>(out: Out): Out;
    /**
     * @zh 转置矩阵
     */
    static transpose<Out extends IMat3Like>(out: Out, a: Out): Out;
    /**
     * @zh 矩阵求逆
     */
    static invert<Out extends IMat3Like>(out: Out, a: Out): Out;
    /**
     * @zh 矩阵行列式
     */
    static determinant<Out extends IMat3Like>(a: Out): number;
    /**
     * @zh 矩阵乘法
     */
    static multiply<Out extends IMat3Like>(out: Out, a: Out, b: Out): Out;
    /**
     * @zh 取四阶矩阵的前三阶，与三阶矩阵相乘
     */
    static multiplyMat4<Out extends IMat3Like>(out: Out, a: Out, b: IMat4Like): Out;
    /**
     * @zh 在给定矩阵变换基础上加入变换
     */
    static transfrom<Out extends IMat3Like, VecLike extends IVec3Like>(out: Out, a: Out, v: VecLike): Out;
    /**
     * @zh 在给定矩阵变换基础上加入新缩放变换
     */
    static scale<Out extends IMat3Like, VecLike extends IVec3Like>(out: Out, a: Out, v: VecLike): Out;
    /**
     * @zh 在给定矩阵变换基础上加入新旋转变换
     * @param rad 旋转弧度
     */
    static rotate<Out extends IMat3Like>(out: Out, a: Out, rad: number): Out;
    /**
     * @zh 取四阶矩阵的前三阶
     */
    static fromMat4<Out extends IMat3Like>(out: Out, a: IMat4Like): Out;
    /**
     * @zh 根据视口前方向和上方向计算矩阵
     * @param view 视口面向的前方向，必须归一化
     * @param up 视口的上方向，必须归一化，默认为 (0, 1, 0)
     */
    static fromViewUp<Out extends IMat3Like>(out: Out, view: Readonly<IVec3Like>, up?: Vec3): Out;
    /**
     * @zh 计算位移矩阵
     */
    static fromTranslation<Out extends IMat3Like, VecLike extends IVec2Like>(out: Out, v: VecLike): Out;
    /**
     * @zh 计算缩放矩阵
     */
    static fromScaling<Out extends IMat3Like, VecLike extends IVec2Like>(out: Out, v: VecLike): Out;
    /**
     * @zh 计算旋转矩阵
     */
    static fromRotation<Out extends IMat3Like>(out: Out, rad: number): Out;
    /**
     * @zh 根据四元数旋转信息计算矩阵
     */
    static fromQuat<Out extends IMat3Like>(out: Out, q: IQuatLike): Out;
    /**
     * @zh 计算指定四维矩阵的逆转置三维矩阵
     */
    static inverseTransposeMat4<Out extends IMat3Like>(out: Out, a: IMat4Like): Out | null;
    /**
     * @zh 矩阵转数组
     * @param ofs 数组内的起始偏移量
     */
    static toArray<Out extends IWritableArrayLike<number>>(out: Out, m: IMat3Like, ofs?: number): Out;
    /**
     * @zh 数组转矩阵
     * @param ofs 数组起始偏移量
     */
    static fromArray<Out extends IMat3Like>(out: Out, arr: IWritableArrayLike<number>, ofs?: number): Out;
    /**
     * @zh 逐元素矩阵加法
     */
    static add<Out extends IMat3Like>(out: Out, a: Out, b: Out): Out;
    /**
     * @zh 逐元素矩阵减法
     */
    static subtract<Out extends IMat3Like>(out: Out, a: Out, b: Out): Out;
    /**
     * @zh 矩阵标量乘法
     */
    static multiplyScalar<Out extends IMat3Like>(out: Out, a: Out, b: number): Out;
    /**
     * @zh 逐元素矩阵标量乘加: A + B * scale
     */
    static multiplyScalarAndAdd<Out extends IMat3Like>(out: Out, a: Out, b: Out, scale: number): Out;
    /**
     * @zh 矩阵等价判断
     */
    static strictEquals<Out extends IMat3Like>(a: Out, b: Out): boolean;
    /**
     * @zh 排除浮点数误差的矩阵近似等价判断
     */
    static equals<Out extends IMat3Like>(a: Out, b: Out, epsilon?: number): boolean;
}
export {};
//# sourceMappingURL=mat3.d.ts.map