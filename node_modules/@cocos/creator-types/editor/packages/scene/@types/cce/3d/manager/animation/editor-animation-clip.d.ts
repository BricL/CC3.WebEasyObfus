import { IAnimCopyNodeSrcInfo, IAnimCopyNodeDstInfo, IAnimCopyPropSrcInfo, IAnimCopyPropDstInfo, IAnimCopyKeySrcInfo, IAnimCopyKeyDstInfo, IAnimCopyEventSrcInfo, IAnimCopyEventDstInfo, IEmbeddedPlayers, EditorAnimationClipDump, IPropCurveDumpData, IAnimCopyAuxSrc } from '../../../../../@types/private';
import { IAnimCopyAuxDest } from '../../../../../@types/public';
import { animation, EmbeddedPlayerGroup, AnimationClip, AnimationState, Node } from 'cc';
import { EditorAnimationCurve } from './editor-animation-curve';
import EditorAnimationCombinedCurve from './editor-animation-combined-curve';
import { IAnimationClipData, ICurveData, ICurveInfo, IPropCustomData, IPropDumpData } from './type-defines';
import EditorAnimationCurveBase from './editor-animation-curve-base';
/**
 * 编辑器使用的AnimationClip，对引擎的AnimationClip数据进行一层封装，方便编辑
 */
declare class EditorAnimationClip {
    private _rootNode;
    private _clipUuid;
    private _animComp;
    private _animState;
    private _editorSharedClipData;
    private _initPropDataMap;
    private _createdCurveMap;
    private _editorCurves;
    private _editEmbeddedPlayerMap;
    private _createdAuxCurveMap;
    private _auxCurves;
    constructor(node: Node, clipUuid: string, state: AnimationState);
    refreshData(node: Node, clipUuid: string): void;
    init(): void;
    get rootNode(): Node;
    get clipUUID(): string;
    generateClipData(clip: AnimationClip): IAnimationClipData;
    createCombinedAndPartsAnimCurve(clipData: IAnimationClipData, curveInfo: ICurveInfo, track: animation.VectorTrack | animation.ColorTrack | animation.SizeTrack): void;
    addInitPropDataMap(nodePath: string, animableProps: IPropDumpData[]): void;
    getInitPropData(nodePath: string, propKey: string): IPropDumpData | null | undefined;
    getCreatedCurve(nodePath: string, propKey: string): EditorAnimationCurveBase | null | undefined;
    getCreatedAuxCurve(name: string, throwIfNotFound: true): EditorAnimationCurveBase;
    getCreatedAuxCurve(name: string): EditorAnimationCurveBase | undefined;
    addEditorCurve(editorCurve: EditorAnimationCurveBase): void;
    addAuxCurve(curve: EditorAnimationCurveBase): void;
    addToCreatedCurveMap(editorCurve: EditorAnimationCurveBase): void;
    addToAuxCurveMap(curve: EditorAnimationCurveBase): void;
    rebuildCreatedCurveMap(): void;
    getDumpData(): Promise<EditorAnimationClipDump | null>;
    /**
     * 重新计算clip的总时长
     */
    recalculateDuration(): void;
    /**
     * 将编辑曲线数据应用到clip中
     */
    applyEditorCurvesToClip(): Promise<void>;
    applyAuxCurvesToClip(): void;
    /**
     * 将编辑的通知数据应用到clip中
     */
    applyEditorEmbeddedPlayersToClip(): Promise<void>;
    private updateEditorEmbeddedPlayers;
    private _ensureEditorExtras;
    private _getRealKeyframeData;
    protected createTrack(editorCurve: EditorAnimationCombinedCurve | EditorAnimationCurve, sample: number): animation.VectorTrack | animation.RealTrack | animation.QuatTrack | animation.ColorTrack | animation.SizeTrack | animation.ObjectTrack<unknown> | null;
    /**
     * 更新曲线数据到运行时
     */
    updateCurveData(): Promise<void>;
    /**
     * 更新事件数据
     */
    updateEventData(): void;
    /**
     * 更改动画的 sample 值
     * @param {Number} sample 动画的帧率
     */
    changeSample(sample: number): Promise<boolean>;
    /**
     * 更改动画的 speed 值
     * @param speed
     */
    changeSpeed(speed: number): Promise<boolean>;
    /**
     * 更改动画的播放模式
     * @param {Number} mode 动画的播放模式
     */
    changeWrapMode(mode: number): Promise<boolean>;
    /**
     * 删除动画的节点数据
     * @param {String} nodePath 被清除的节点路径
     */
    removeNode(nodePath: string | undefined): Promise<boolean>;
    /**
     * 更改一个节点上某个动画的节点数据到另一个节点上
     * @param {String} srcPath 待转移的节点路径
     * @param {String} dstPath 目标的节点路径
     */
    changeNodeDataPath(srcPath: string | undefined, dstPath: string | undefined): Promise<boolean>;
    /**
     *
     * @param srcInfo 源数据相关信息
     * @param dstInfo 目标相关信息
     */
    copyNode(srcInfo: IAnimCopyNodeSrcInfo, dstInfo: IAnimCopyNodeDstInfo): Promise<boolean>;
    /**
     *
     * @param srcInfo 源数据相关信息
     * @param dstInfo 目标相关信息
     */
    copyProp(srcInfo: IAnimCopyPropSrcInfo, dstInfo: IAnimCopyPropDstInfo): Promise<boolean>;
    /**
     *
     * @param srcInfo 源数据相关信息
     * @param dstInfo 目标相关信息
     */
    copyKey(srcInfo: IAnimCopyKeySrcInfo, dstInfo: IAnimCopyKeyDstInfo): Promise<boolean>;
    /**
     *
     * @param srcInfo 源数据相关信息
     * @param dstInfo 目标相关信息
     */
    copyEvent(srcInfo: IAnimCopyEventSrcInfo, dstInfo: IAnimCopyEventDstInfo): boolean;
    /**
     *
     * @param srcNodePath 源节点路径
     * @param srcPropKey 源属性标识
     * @param dstNodePath 目标节点路径
     * @param dstPropKey 目标属性标识
     */
    copyPropTo(srcNodePath: string, srcPropKey: string, dstNodePath: string, dstPropKey: string): Promise<boolean>;
    /**
     * 新增一条属性轨道
     * @param {String} nodePath 节点路径
     * @param {String} propKey 属性的标识（包含组件名字和属性查找路径）
     */
    createProp(nodePath: string, propKey: string): Promise<boolean>;
    /**
     * 删除一条属性轨道
     * @param {String} nodePath 节点路径
     * @param {String} propKey 属性的标识（包含组件名字和属性查找路径）
     */
    removeProp(nodePath: string, propKey: string): Promise<boolean>;
    /**
     * 创建一个关键帧
     * @param {String} nodePath 节点路径
     * @param {String} propKey 属性的标识（包含组件名字和属性查找路径）
     * @param {number} frame 关键帧位置
     * @param {Object} customData 特殊数据来源，比如拖入时间轴的spriteFrame
     */
    createKey(nodePath: string, propKey: string, frame: number | undefined, customData: any): Promise<boolean>;
    /**
     * 移动关键帧(可以每个帧移动不同距离)
     * @param {string} nodePath 节点路径
     * @param {string} propKey 属性的标识（包含组件名字和属性查找路径）
     * @param {Array} frames 要移动的关键帧数组
     * @param {Array} offsets 移动的距离数组,如果为数组，则可以设置每个帧的移动距离，如果为一个数则表示移动相同距离
     */
    moveKeys(nodePath: string, propKey: string, frames: number[], offsets: number | number[]): Promise<boolean>;
    /**
     * 删除关键帧
     * @param {string} nodePath 节点路径
     * @param {string} propKey 属性的标识（包含组件名字和属性查找路径）
     * @param {number} frames 关键帧位置数组
     */
    removeKey(nodePath: string, propKey: string, frames: number[]): Promise<boolean>;
    /**
     * 更新关键帧
     * @param {String} nodePath 节点路径
     * @param {String} propKey 属性的标识（包含组件名字和属性查找路径）
     * @param {number} frames 关键帧位置数组
     */
    updateKey(nodePath: string, propKey: string, frames: number[]): Promise<boolean>;
    /**
     * 复制关键帧数据到另一个关键帧上，如果选择了多个复制帧，则在目标帧后顺序粘贴
     * @param {String} nodePath 节点路径
     * @param {String} propKey 属性的标识（包含组件名字和属性查找路径）
     * @param {Array} srcFrames 复制的关键帧数组
     * @param {number} dstFrame 目标关键帧
     */
    copyKeysTo(nodePath: string, propKey: string, srcFrames: number[], dstFrame: number): Promise<boolean>;
    /**
     * 均匀的平铺关键帧
     * @param {String} nodePath 节点路径
     * @param {String} propKey 属性的标识（包含组件名字和属性查找路径）
     * @param {Array} frames 待调整的关键帧数组
     * @param {number} spacingFrames 间隔帧数
     */
    spacingKeys(nodePath: string, propKey: string, frames: number[], spacingFrames: number): Promise<boolean>;
    /**
     * 清空关键帧数据，但不删除Track
     * @param {String} nodePath 节点路径
     * @param {String} propKey 属性的标识（包含组件名字和属性查找路径）
     */
    clearKeys(nodePath: string, propKey: string): Promise<boolean>;
    /**
     * 插入事件关键帧
     * @param {number} frame 关键帧所在的位置
     * @param {string} funcName 事件回调函数的名字
     * @param {array} params 参数数组
     */
    addEvent(frame: number, funcName: string, params: string[]): boolean | null;
    private _getEditClip;
    /**
     * 添加嵌入播放器分组
     * @param groupInfo
     * @returns
     */
    addEmbeddedPlayerGroup(groupInfo: EmbeddedPlayerGroup): boolean;
    /**
     * 添加嵌入播放器分组及分组下的所有数据
     * @param groupKey
     * @returns
     */
    removeEmbeddedPlayerGroup(groupKey: string): Promise<boolean>;
    /**
     * 添加嵌入播放器分组及分组下的所有数据
     * @param groupKey
     * @returns
     */
    _clearEmbeddedPlayerGroup(groupKey: string): boolean;
    /**
     * 添加嵌入播放器分组及分组下的所有数据
     * @param groupKey
     * @returns
     */
    clearEmbeddedPlayerGroup(groupKey: string): Promise<boolean>;
    /**
     * 添加嵌入播放器
     * @param EmbeddedPlayerDump
     * @returns boolean
     */
    addEmbeddedPlayer(EmbeddedPlayerDump: IEmbeddedPlayers): Promise<boolean>;
    private _addEmbeddedPlayer;
    /**
     * 删除某个嵌入播放器
     * @param EmbeddedPlayerDump
     * @returns
     */
    deleteEmbeddedPlayer(EmbeddedPlayerDump: IEmbeddedPlayers): Promise<boolean>;
    /**
     * 清空嵌入播放器数据
     * @param nodePath
     */
    clearEmbeddedPlayer(nodePath: string): Promise<void>;
    _deleteEmbeddedPlayer(EmbeddedPlayerDump: IEmbeddedPlayers): boolean;
    /**
     * 更新某个嵌入播放器
     * @param rawEmbeddedPlayer
     * @param newEmbeddedPlayer
     * @returns
     */
    updateEmbeddedPlayer(rawEmbeddedPlayer: IEmbeddedPlayers, newEmbeddedPlayer: IEmbeddedPlayers): Promise<boolean>;
    /**
     * 删除事件关键帧,内部使用，不直接更新到clips中
     * @param {object} frames 事件帧所在位置数组
     */
    private _deleteEvent;
    /**
     * 删除事件关键帧
     * @param {object} frames 事件帧所在位置数组
     */
    deleteEvent(frames: number[]): boolean;
    /**
     * 更新事件关键帧
     * @param {number} frames 关键帧所在的位置数组
     * @param {object} events 事件帧数据
     */
    updateEvent(frames: number[], events: any[]): boolean;
    /**
     * 移动事件关键帧
     * @param {Array} frames 要移动的关键帧数组
     * @param {number} offset 偏移帧数
     */
    moveEvents(frames: number[], offset: number): boolean;
    /**
     * 拷贝事件关键帧
     * @param {Array} srcFrames 要复制的关键帧数组
     * @param {number} dstFrame 目标帧位置
     */
    copyEventsTo(srcFrames: number[], dstFrame: number): boolean;
    /**
     * 修改某个关键帧的曲线数据
     * @param {string} nodePath 节点路径
     * @param {string} propKey 属性的标识（包含组件名字和属性查找路径）
     * @param {number} frame 帧数
     * @param {*} data 曲线描述，可能是字符串和数组
     */
    modifyCurveOfKey(nodePath: string, propKey: string, frame: number, data: any): Promise<boolean>;
    /**
     * 取得轨迹上某个关键帧的值
     * @param {String} nodePath 节点路径
     * @param {String} propKey 属性的标识（包含组件名字和属性查找路径）
     * @param frame 帧数
     */
    getPropValueAtFrame(nodePath: string, propKey: string, frame: number): Promise<any>;
    private _getRawAuxiliaryCurves;
    private _initAuxCurves;
    getAuxiliaryCurves(): Promise<Record<string, IPropCurveDumpData>>;
    addAuxiliaryCurve(name: string): boolean;
    renameAuxiliaryCurve(oldName: string, newName: string): boolean;
    removeAuxiliaryCurve(name: string): boolean;
    createAuxKey(name: string, frame: number, customData?: IPropCustomData): Promise<boolean>;
    removeAuxKey(name: string, frame: number): Promise<boolean>;
    moveAuxKeys(name: string, frames: number[], offset: number | number[]): Promise<boolean>;
    copyAuxKey(src: IAnimCopyAuxSrc, dest: IAnimCopyAuxDest): Promise<boolean>;
    modifyAuxCurveOfKey(name: string, frame: number, data: ICurveData): Promise<boolean>;
    getAuxCurveValueAtFrame(name: string, frame: number): Promise<any>;
    private _getAnimState;
}
export default EditorAnimationClip;
//# sourceMappingURL=editor-animation-clip.d.ts.map