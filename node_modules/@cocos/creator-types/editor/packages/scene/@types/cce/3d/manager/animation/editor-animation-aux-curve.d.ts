import { animation, Node, RealCurve } from 'cc';
import EditorAnimationCurveBase from './editor-animation-curve-base';
import { IAnimationClipData, IPropCustomData, IKeyframe, ICurveData } from './type-defines';
import { IPropCurveDumpData } from '../../../../../@types/private';
export declare function syncToRealCurve(editorCurve: EditorAnimationCurveBase, realCurve: RealCurve): RealCurve;
export declare function createEditorCurve(name: string, curve: RealCurve, rootNode: Node, clipData: IAnimationClipData): EditorAnimationAuxCurve;
export declare class EditorAnimationAuxCurve extends EditorAnimationCurveBase {
    constructor(node: Node, clipData: IAnimationClipData);
    static create(name: string, curve: RealCurve, rootNode: Node, clipData: IAnimationClipData): EditorAnimationAuxCurve;
    get targetPaths(): animation.TrackPath;
    get displayName(): string;
    getDumpData(): Promise<IPropCurveDumpData>;
    getCompName(): string | undefined;
    getPropName(): string;
    changeNodePath(path: string): void;
    queryKeyIndex(frame: number): number;
    queryKeyframe(frame: number): IKeyframe | null;
    getValidKeys(frames: number[]): number[] | null;
    hasKey(frame: number): boolean;
    /**
     * 创建一个关键帧
     * @param frame 关键帧位置
     * @param customData 特殊数据来源，比如拖入时间轴的spriteFrame
     */
    createKey(frame?: number, customData?: IPropCustomData): Promise<boolean>;
    /**
     * 移动关键帧(可以每个帧移动不同距离)
     * @param {Array} frames 要移动的关键帧数组
     * @param {Array} offsets 移动的距离数组
     */
    moveKeys(frames: number[], offsets: number[]): Promise<boolean>;
    /**
     * 删除关键帧
     * @param {number} frames 关键帧位置数组
     */
    removeKey(frames: number[]): Promise<boolean>;
    /**
     * 更新关键帧
     * @param {number} frames 关键帧位置数组
     */
    updateKey(frames: number[]): Promise<boolean>;
    /**
     * 复制关键帧数据到另一个关键帧上，如果选择了多个复制帧，则在目标帧后顺序粘贴
     * @param {Array} srcFrames 复制的关键帧数组
     * @param {number} dstFrame 目标关键帧
     */
    copyKeysTo(srcFrames: number[], dstFrame: number): Promise<boolean>;
    /**
     * 均匀的平铺关键帧
     * @param {Array} frames 待调整的关键帧数组
     * @param {number} spacingFrame 间隔帧数
     */
    spacingKeys(frames: number[], spacingFrame: number): Promise<boolean>;
    /**
     * 清空关键帧数据，但不删除Track
     */
    clearKeys(): Promise<boolean>;
    /**
     * 修改某个关键帧的曲线数据
     * @param {String} nodePath 节点路径
     * @param {Object} propKey 属性的标识（包含组件名字和属性查找路径）
     * @param {number} frame key.frame 是实际的时间，需要传入帧数
     * @param {ICurveData} data 插值曲线的相关数据
     */
    modifyCurveOfKey(frame: number, data: ICurveData): Promise<boolean>;
    getCurveDuration(): number;
    /**
     * 取得某个关键帧的值
     * @param frame
     */
    getPropValueAtFrame(frame: number): Promise<import("../../../../../@types/public").IProperty | null>;
    private _getMockCurve;
}
//# sourceMappingURL=editor-animation-aux-curve.d.ts.map