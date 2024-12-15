import { IMat4Like, IVec3Like, IQuatLike } from './type-define';
import { Mat4 } from 'cc';
interface IWritableArrayLike<T> {
    length: number;
    [index: number]: T;
}
export declare class MMat4 {
    static IDENTITY: Readonly<Mat4>;
    /**
     * @zh 获得指定矩阵的拷贝
     */
    static clone<Out extends IMat4Like>(a: Out): Mat4;
    /**
     * @zh 复制目标矩阵
     */
    static copy<Out extends IMat4Like>(out: Out, a: Out): Out;
    /**
     * @zh 设置矩阵值
     */
    static set<Out extends IMat4Like>(out: Out, m00: number, m01: number, m02: number, m03: number, m10: number, m11: number, m12: number, m13: number, m20: number, m21: number, m22: number, m23: number, m30: number, m31: number, m32: number, m33: number): Out;
    /**
     * @zh 将目标赋值为单位矩阵
     */
    static identity<Out extends IMat4Like>(out: Out): Out;
    /**
     * @zh 转置矩阵
     */
    static transpose<Out extends IMat4Like>(out: Out, a: Out): Out;
    /**
     * @zh 矩阵求逆
     */
    static invert<Out extends IMat4Like>(out: Out, a: Out): Out;
    /**
     * @zh 矩阵行列式
     */
    static determinant<Out extends IMat4Like>(a: Out): number;
    /**
     * @zh 矩阵乘法
     */
    static multiply<Out extends IMat4Like>(out: Out, a: Out, b: Out): Out;
    /**
     * @zh 在给定矩阵变换基础上加入变换
     */
    static transform<Out extends IMat4Like, VecLike extends IVec3Like>(out: Out, a: Out, v: VecLike): Out;
    /**
     * @zh 在给定矩阵变换基础上加入新位移变换
     */
    static translate<Out extends IMat4Like, VecLike extends IVec3Like>(out: Out, a: Out, v: VecLike): Out;
    /**
     * @zh 在给定矩阵变换基础上加入新缩放变换
     */
    static scale<Out extends IMat4Like, VecLike extends IVec3Like>(out: Out, a: Out, v: VecLike): Out;
    /**
     * @zh 在给定矩阵变换基础上加入新旋转变换
     * @param rad 旋转角度
     * @param axis 旋转轴
     */
    static rotate<Out extends IMat4Like, VecLike extends IVec3Like>(out: Out, a: Out, rad: number, axis: VecLike): Out | null;
    /**
     * @zh 在给定矩阵变换基础上加入绕 X 轴的旋转变换
     * @param rad 旋转角度
     */
    static rotateX<Out extends IMat4Like>(out: Out, a: Out, rad: number): Out;
    /**
     * @zh 在给定矩阵变换基础上加入绕 Y 轴的旋转变换
     * @param rad 旋转角度
     */
    static rotateY<Out extends IMat4Like>(out: Out, a: Out, rad: number): Out;
    /**
     * @zh 在给定矩阵变换基础上加入绕 Z 轴的旋转变换
     * @param rad 旋转角度
     */
    static rotateZ<Out extends IMat4Like>(out: Out, a: Out, rad: number): Out;
    /**
     * @zh 计算位移矩阵
     */
    static fromTranslation<Out extends IMat4Like, VecLike extends IVec3Like>(out: Out, v: VecLike): Out;
    /**
     * @zh 计算缩放矩阵
     */
    static fromScaling<Out extends IMat4Like, VecLike extends IVec3Like>(out: Out, v: VecLike): Out;
    /**
     * @zh 计算旋转矩阵
     */
    static fromRotation<Out extends IMat4Like, VecLike extends IVec3Like>(out: Out, rad: number, axis: VecLike): Out | null;
    /**
     * @zh 计算绕 X 轴的旋转矩阵
     */
    static fromXRotation<Out extends IMat4Like>(out: Out, rad: number): Out;
    /**
     * @zh 计算绕 Y 轴的旋转矩阵
     */
    static fromYRotation<Out extends IMat4Like>(out: Out, rad: number): Out;
    /**
     * @zh 计算绕 Z 轴的旋转矩阵
     */
    static fromZRotation<Out extends IMat4Like>(out: Out, rad: number): Out;
    /**
     * @zh 根据旋转和位移信息计算矩阵
     */
    static fromRT<Out extends IMat4Like, QuatLike extends IQuatLike, VecLike extends IVec3Like>(out: Out, q: QuatLike, v: VecLike): Out;
    /**
     * @zh 提取矩阵的位移信息, 默认矩阵中的变换以 S->R->T 的顺序应用
     */
    static getTranslation<Out extends IMat4Like, VecLike extends IVec3Like>(out: VecLike, mat: Out): VecLike;
    /**
     * @zh 提取矩阵的缩放信息, 默认矩阵中的变换以 S->R->T 的顺序应用
     */
    static getScaling<Out extends IMat4Like, VecLike extends IVec3Like>(out: VecLike, mat: Out): VecLike;
    /**
     * @zh 提取矩阵的旋转信息, 默认输入矩阵不含有缩放信息，如考虑缩放应使用 `toRTS` 函数。
     */
    static getRotation<Out extends IMat4Like>(out: IQuatLike, mat: Out): IQuatLike;
    /**
     * @zh 提取旋转、位移、缩放信息， 默认矩阵中的变换以 S->R->T 的顺序应用
     */
    static toRTS<Out extends IMat4Like, VecLike extends IVec3Like>(m: Out, q: IQuatLike, v: VecLike, s: VecLike): void;
    /**
     * @zh 根据旋转、位移、缩放信息计算矩阵，以 S->R->T 的顺序应用
     */
    static fromRTS<Out extends IMat4Like, VecLike extends IVec3Like>(out: Out, q: IQuatLike, v: VecLike, s: VecLike): Out;
    /**
     * @zh 根据指定的旋转、位移、缩放及变换中心信息计算矩阵，以 S->R->T 的顺序应用
     * @param q 旋转值
     * @param v 位移值
     * @param s 缩放值
     * @param o 指定变换中心
     */
    static fromRTSOrigin<Out extends IMat4Like, VecLike extends IVec3Like>(out: Out, q: IQuatLike, v: VecLike, s: VecLike, o: VecLike): Out;
    /**
     * @zh 根据指定的旋转信息计算矩阵
     */
    static fromQuat<Out extends IMat4Like>(out: Out, q: IQuatLike): Out;
    /**
     * @zh 根据指定的视锥体信息计算矩阵
     * @param left 左平面距离
     * @param right 右平面距离
     * @param bottom 下平面距离
     * @param top 上平面距离
     * @param near 近平面距离
     * @param far 远平面距离
     */
    static frustum<Out extends IMat4Like>(out: Out, left: number, right: number, bottom: number, top: number, near: number, far: number): Out;
    /**
     * @zh 计算透视投影矩阵
     * @param fovy 纵向视角高度
     * @param aspect 长宽比
     * @param near 近平面距离
     * @param far 远平面距离
     */
    static perspective<Out extends IMat4Like>(out: Out, fovy: number, aspect: number, near: number, far: number): Out;
    /**
     * @zh 计算正交投影矩阵
     * @param left 左平面距离
     * @param right 右平面距离
     * @param bottom 下平面距离
     * @param top 上平面距离
     * @param near 近平面距离
     * @param far 远平面距离
     */
    static ortho<Out extends IMat4Like>(out: Out, left: number, right: number, bottom: number, top: number, near: number, far: number): Out;
    /**
     * @zh 根据视点计算矩阵，注意 `eye - center` 不能为零向量或与 `up` 向量平行
     * @param eye 当前位置
     * @param center 目标视点
     * @param up 视口上方向
     */
    static lookAt<Out extends IMat4Like, VecLike extends IVec3Like>(out: Out, eye: VecLike, center: VecLike, up: VecLike): Out;
    /**
     * @zh 计算逆转置矩阵
     */
    static inverseTranspose<Out extends IMat4Like>(out: Out, a: Out): Out | null;
    /**
     * @zh 矩阵转数组
     * @param ofs 数组内的起始偏移量
     */
    static toArray<Out extends IWritableArrayLike<number>>(out: Out, m: IMat4Like, ofs?: number): Out;
    /**
     * @zh 数组转矩阵
     * @param ofs 数组起始偏移量
     */
    static fromArray<Out extends IMat4Like>(out: Out, arr: IWritableArrayLike<number>, ofs?: number): Out;
    /**
     * @zh 逐元素矩阵加法
     */
    static add<Out extends IMat4Like>(out: Out, a: Out, b: Out): Out;
    /**
     * @zh 逐元素矩阵减法
     */
    static subtract<Out extends IMat4Like>(out: Out, a: Out, b: Out): Out;
    /**
     * @zh 矩阵标量乘法
     */
    static multiplyScalar<Out extends IMat4Like>(out: Out, a: Out, b: number): Out;
    /**
     * @zh 逐元素矩阵标量乘加: A + B * scale
     */
    static multiplyScalarAndAdd<Out extends IMat4Like>(out: Out, a: Out, b: Out, scale: number): Out;
    /**
     * @zh 矩阵等价判断
     */
    static strictEquals<Out extends IMat4Like>(a: Out, b: Out): boolean;
    /**
     * @zh 排除浮点数误差的矩阵近似等价判断
     */
    static equals<Out extends IMat4Like>(a: Out, b: Out, epsilon?: number): boolean;
}
export {};
//# sourceMappingURL=mat4.d.ts.map