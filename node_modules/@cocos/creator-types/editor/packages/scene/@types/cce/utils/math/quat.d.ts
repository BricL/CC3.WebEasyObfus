import { IQuatLike, IVec3Like } from './type-define';
import { Quat, Vec3, Mat3 } from 'cc';
interface IWritableArrayLike<T> {
    length: number;
    [index: number]: T;
}
export declare class MQuat {
    static IDENTITY: Readonly<Quat>;
    /**
     * @zh 获得指定四元数的拷贝
     */
    static clone<Out extends IQuatLike>(a: Out): Quat;
    /**
     * @zh 复制目标四元数
     */
    static copy<Out extends IQuatLike, QuatLike extends IQuatLike>(out: Out, a: QuatLike): Out;
    /**
     * @zh 设置四元数值
     */
    static set<Out extends IQuatLike>(out: Out, x: number, y: number, z: number, w: number): Out;
    /**
     * @zh 将目标赋值为单位四元数
     */
    static identity<Out extends IQuatLike>(out: Out): Out;
    /**
     * @zh 设置四元数为两向量间的最短路径旋转，默认两向量都已归一化
     */
    static rotationTo<Out extends IQuatLike, VecLike extends IVec3Like>(out: Out, a: VecLike, b: VecLike): Out;
    /**
     * @zh 获取四元数的旋转轴和旋转弧度
     * @param outAxis 旋转轴输出
     * @param q 源四元数
     * @return 旋转弧度
     */
    static getAxisAngle<Out extends IQuatLike, VecLike extends IVec3Like>(outAxis: VecLike, q: Out): number;
    /**
     * @zh 四元数乘法
     */
    static multiply<Out extends IQuatLike, QuatLike_1 extends IQuatLike, QuatLike_2 extends IQuatLike>(out: Out, a: QuatLike_1, b: QuatLike_2): Out;
    /**
     * @zh 四元数标量乘法
     */
    static multiplyScalar<Out extends IQuatLike>(out: Out, a: Out, b: number): Out;
    /**
     * @zh 四元数乘加：A + B * scale
     */
    static scaleAndAdd<Out extends IQuatLike>(out: Out, a: Out, b: Out, scale: number): Out;
    /**
     * @zh 绕 X 轴旋转指定四元数
     * @param rad 旋转弧度
     */
    static rotateX<Out extends IQuatLike>(out: Out, a: Out, rad: number): Out;
    /**
     * @zh 绕 Y 轴旋转指定四元数
     * @param rad 旋转弧度
     */
    static rotateY<Out extends IQuatLike>(out: Out, a: Out, rad: number): Out;
    /**
     * @zh 绕 Z 轴旋转指定四元数
     * @param rad 旋转弧度
     */
    static rotateZ<Out extends IQuatLike>(out: Out, a: Out, rad: number): Out;
    /**
     * @zh 绕世界空间下指定轴旋转四元数
     * @param axis 旋转轴，默认已归一化
     * @param rad 旋转弧度
     */
    static rotateAround<Out extends IQuatLike, VecLike extends IVec3Like>(out: Out, rot: Out, axis: VecLike, rad: number): Out;
    /**
     * @zh 绕本地空间下指定轴旋转四元数
     * @param axis 旋转轴
     * @param rad 旋转弧度
     */
    static rotateAroundLocal<Out extends IQuatLike, VecLike extends IVec3Like>(out: Out, rot: Out, axis: VecLike, rad: number): Out;
    /**
     * @zh 根据 xyz 分量计算 w 分量，默认已归一化
     */
    static calculateW<Out extends IQuatLike>(out: Out, a: Out): Out;
    /**
     * @zh 四元数点积（数量积）
     */
    static dot<Out extends IQuatLike>(a: Out, b: Out): number;
    /**
     * @zh 逐元素线性插值： A + t * (B - A)
     */
    static lerp<Out extends IQuatLike>(out: Out, a: Out, b: Out, t: number): Out;
    /**
     * @zh 四元数球面插值
     */
    static slerp<Out extends IQuatLike, QuatLike_1 extends IQuatLike, QuatLike_2 extends IQuatLike>(out: Out, a: QuatLike_1, b: QuatLike_2, t: number): Out;
    /**
     * @zh 带两个控制点的四元数球面插值
     */
    static sqlerp<Out extends IQuatLike>(out: Out, a: Out, b: Out, c: Out, d: Out, t: number): Out;
    /**
     * @zh 四元数求逆
     */
    static invert<Out extends IQuatLike, QuatLike extends IQuatLike>(out: Out, a: QuatLike): Out;
    /**
     * @zh 求共轭四元数，对单位四元数与求逆等价，但更高效
     */
    static conjugate<Out extends IQuatLike>(out: Out, a: Out): Out;
    /**
     * @zh 求四元数长度
     */
    static len<Out extends IQuatLike>(a: Out): number;
    /**
     * @zh 求四元数长度平方
     */
    static lengthSqr<Out extends IQuatLike>(a: Out): number;
    /**
     * @zh 归一化四元数
     */
    static normalize<Out extends IQuatLike>(out: Out, a: Out): Out;
    /**
     * @zh 根据本地坐标轴朝向计算四元数，默认三向量都已归一化且相互垂直
     */
    static fromAxes<Out extends IQuatLike, VecLike extends IVec3Like>(out: Out, xAxis: VecLike, yAxis: VecLike, zAxis: VecLike): Out;
    /**
     * @zh 根据视口的前方向和上方向计算四元数
     * @param view 视口面向的前方向，必须归一化
     * @param up 视口的上方向，必须归一化，默认为 (0, 1, 0)
     */
    static fromViewUp<Out extends IQuatLike, VecLike extends IVec3Like>(out: Out, view: VecLike, up?: Vec3): Out;
    /**
     * @zh 根据旋转轴和旋转弧度计算四元数
     */
    static fromAxisAngle<Out extends IQuatLike, VecLike extends IVec3Like>(out: Out, axis: VecLike, rad: number): Out;
    /**
     * @zh 根据三维矩阵信息计算四元数，默认输入矩阵不含有缩放信息
     */
    static fromMat3<Out extends IQuatLike>(out: Out, m: Mat3): Out;
    /**
     * @zh 根据欧拉角信息计算四元数，旋转顺序为 YZX
     */
    static fromEuler<Out extends IQuatLike>(out: Out, x: number, y: number, z: number): Out;
    /**
     * @en Set a quaternion from the given euler angle (0, 0, z).
     * @zh 根据欧拉角（0, 0, z）计算四元数
     */
    static fromAngleZ<Out extends IQuatLike>(out: Out, z: number): void;
    /**
     * @zh 返回定义此四元数的坐标系 X 轴向量
     */
    static toAxisX<Out extends IQuatLike, VecLike extends IVec3Like>(out: VecLike, q: Out): VecLike;
    /**
     * @zh 返回定义此四元数的坐标系 Y 轴向量
     */
    static toAxisY<Out extends IQuatLike, VecLike extends IVec3Like>(out: VecLike, q: Out): VecLike;
    /**
     * @zh 返回定义此四元数的坐标系 Z 轴向量
     */
    static toAxisZ<Out extends IQuatLike, VecLike extends IVec3Like>(out: VecLike, q: Out): VecLike;
    /**
     * @zh 根据四元数计算欧拉角，返回角度 x, y 在 [-180, 180] 区间内, z 默认在 [-90, 90] 区间内，旋转顺序为 YZX
     * @param outerZ z 取值范围区间改为 [-180, -90] U [90, 180]
     */
    static toEuler<Out extends IVec3Like>(out: Out, q: IQuatLike, outerZ?: boolean): Out;
    /**
     * @zh 四元数转数组
     * @param ofs 数组内的起始偏移量
     */
    static toArray<Out extends IWritableArrayLike<number>>(out: Out, q: IQuatLike, ofs?: number): Out;
    /**
     * @zh 数组转四元数
     * @param ofs 数组起始偏移量
     */
    static fromArray<Out extends IQuatLike>(out: Out, arr: IWritableArrayLike<number>, ofs?: number): Out;
    /**
     * @zh 四元数等价判断
     */
    static strictEquals<Out extends IQuatLike>(a: Out, b: Out): boolean;
    /**
     * @zh 排除浮点数误差的四元数近似等价判断
     */
    static equals<Out extends IQuatLike>(a: Out, b: Out, epsilon?: number): boolean;
}
export {};
//# sourceMappingURL=quat.d.ts.map