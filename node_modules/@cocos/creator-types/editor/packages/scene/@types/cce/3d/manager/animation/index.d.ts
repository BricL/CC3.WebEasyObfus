/// <reference types="node" />
import { IChangeNodeOptions, IAnimOperation, EditorAnimationClipDump, IAniResultBase, IAniEditInfo, AnimationOperationOptions } from '../../../../../@types/private';
import { AnimationClip, Node, AnimationState } from 'cc';
import { EventEmitter } from 'events';
import { IAnimData } from './type-defines';
import { ISceneEvents } from '../scene-events-interface';
declare enum PlayState {
    STOP = 0,
    PLAYING = 1,
    PAUSE = 2
}
export declare class AnimationManager extends EventEmitter implements ISceneEvents {
    get curEditClipUuid(): string;
    _lastSaveClipDump: EditorAnimationClipDump | null;
    private _curEditRootNodeUuid;
    private _curEditClipUuid;
    private _curEditAnimClip;
    private _curEditTime;
    private _animUpdateInterval;
    private _isDirty;
    private _componentDirty;
    private _isInEdit;
    private _curDefaultClip;
    private _animationStateMap;
    private _eventTarget;
    private set curEditTime(value);
    get curEditRootNodeUuid(): string;
    set curEditRootNodeUuid(value: string);
    set curDefaultClip(clip: AnimationClip | null);
    constructor();
    init(): void;
    setCurDefaultClipByUuid(uuid: string): void;
    /**
     * 打开/关闭某个节点的动画记录模式
     * @param {string} uuid 节点的 uuid
     * @param {boolean} active 打开或关闭
     * @param {string} clipUuid 动画 uuid
     */
    record(uuid: string, active: boolean, clipUuid?: string): Promise<boolean>;
    storeData(): void;
    restoreData(): void;
    private _registerAnimStateEvents;
    private _unregisterAnimStateEVents;
    isComponentDirty(): boolean;
    setComponentDirty(dirty: boolean): void;
    isDirty(): boolean;
    saveCheck(state?: AnimationState | null): Promise<boolean>;
    /**
     * 动画编辑的一些数据初始化，包含初始化 state 事件绑定，状态重置等 TODO 命名有待优化
     * @param nodeUuid
     * @param clipUuid
     * @returns
     */
    private registerAndFireEvents;
    changeAnimNode(nodeUuid: string, clipUuid: string): Promise<boolean>;
    isNewClip: boolean;
    enter(NodeUUID: string, clipUuid: string): Promise<void>;
    save(): Promise<boolean>;
    saveClip(clipUuid: string): Promise<boolean>;
    private trackUserData;
    isSkeletonClip(clipUuid: string | undefined): boolean;
    needLock(nodeUuid: string, clipUuid: string): boolean;
    /**
     * 获取当前编辑动画数据
     */
    getEditAnimationInfo(): {
        rootid: string;
        clipid: string;
    };
    getSerializedEditClip(): string | object | null;
    /**
     * 查询某个节点可以编辑的动画信息
     * @uuid 节点 uuid
     */
    queryAnimationNodeEditInfo(uuid: string): IAniEditInfo;
    /**
     * 查询当前正在编辑动画的所有动画剪辑信息
     */
    queryRecordAniClips(): (AnimationClip | null)[] | undefined;
    private queryRecordAniData;
    private queryRecordAnimState;
    queryRecordAnimData(): IAnimData;
    queryAnimationClip(clipUuid: string, nodeUuid: string): AnimationClip | null | undefined;
    /**
     * 查询一个节点的动画数据
     * @param {*} uuid
     */
    private queryNodeAnimationData;
    private queryAnimComp;
    queryAnimState(animClip: AnimationClip, useCache?: boolean): AnimationState | null | undefined;
    /**
     * 查询节点的所有clip信息
     * @param {string} nodeUuid Node的uuid
     * @param animData
     */
    queryAnimClipsInfo(nodeUuid: string, animData?: any): {
        clipsMenu: import("../../../../../@types/private").IClipInfo[];
        defaultClip: any;
    } | null;
    /**
     * 查询当前的播放状态
     */
    queryPlayState(): PlayState;
    /**
     * 设置当前编辑的Clip
     * @param {*} clipUuid Clip的uuid
     */
    setEditClip(clipUuid: string | undefined): Promise<boolean>;
    /**
     * 设置当前编辑的关键帧时间点
     * @param {number} time 时间
     */
    setCurEditTime(time: number): boolean;
    changePlayState(newState: PlayState): void;
    /**
     * 播放一个节点上的指定动画
     * @param {string} clipUuid 需要播放的动画的uuid
     */
    play(clipUuid: string): boolean;
    /**
     * 暂停一个节点上正在播放的动画
     */
    pause(): boolean;
    /**
     * 恢复一个节点上被暂停的动画
     */
    resume(): boolean;
    /**
     * 停止一个节点上所有动画
     */
    stop(): boolean;
    /**
     * 查询一个动画的 dump 数据，用于界面的显示
     * @param {string} nodeUuid 节点的uuid
     * @param {string} clipUuid clip的uuid
     */
    queryAnimationClipDump(nodeUuid: string, clipUuid: string): Promise<false | EditorAnimationClipDump | null>;
    /**
     * 用于undo,redo的dump数据
     *
     * @param nodeUuid 节点uuid
     * @param clipUuid clip的uuid
     */
    dumpClip(nodeUuid: string, clipUuid: string): EditorAnimationClipDump | null;
    /**
     * 根据一个动画的 dump 数据，还原clip数据
     * @param {string} nodeUuid 节点的uuid
     * @param {string} clipUuid clip的uuid
     * @param {object} dumpData dump数据
     */
    restoreFromDump(nodeUuid: string, clipUuid: string, dumpData: any): boolean | Promise<boolean>;
    /**
     * 查询一个节点上可以编辑动画的祖先（目前唯一与动画组件绑定的接口，其他都是可选项）
     * 如果上行查询的节点树上，没有任何一个带有动画的节点，则返回 null
     * @param {string} uuid 节点的uuid
     */
    queryAnimationRoot(uuid: string): string;
    /**
     * 查询可以编辑动画根节点的相关数据
     * 如果上行查询的节点树上，没有任何一个带有动画的节点，则返回 null
     * @param {string} uuid 节点的uuid
     */
    queryAnimationRootInfo(uuid: string): Promise<{
        root: string;
        nodeTreeDump: any;
        clipsMenu?: undefined;
        defaultClip?: undefined;
        clipDump?: undefined;
        time?: undefined;
        state?: undefined;
        useBakedAnimation?: undefined;
    } | {
        root: string;
        nodeTreeDump: any;
        clipsMenu: import("../../../../../@types/private").IClipInfo[];
        defaultClip: any;
        clipDump: boolean | EditorAnimationClipDump | null;
        time: number;
        state: PlayState;
        useBakedAnimation: boolean;
    }>;
    /**
     * 查询一个节点上，可以编辑动画的属性数组
     * @param {string} uuid 节点的uuid
     */
    queryProperties(uuid: string): any[];
    /**
     * 查询播放的clip的当前所在时间
     * @param {*} clipUuid clip的uuid
     */
    queryPlayingClipTime(clipUuid?: string | null): number;
    /**
     * 查询当前属性轨道在某一帧的值
     * @param {string} clipUuid clip的uuid
     * @param {string} nodePath node的路径
     * @param {string} propKey 属性的key
     * @param {number} frame 关键帧值
     */
    getPropValueAtFrame(clipUuid: string, nodePath: string, propKey: string, frame: number): Promise<any>;
    /**
     * 查询辅助曲线在某一帧的值
     * @param clipUuid clip的 uuid
     * @param name 辅助曲线名称
     * @param frame 关键帧值
     */
    getAuxCurveValueAtFrame(clipUuid: string, name: string, frame: number): Promise<any>;
    /**
     * 查询某个动画节点上所有属性在某一帧的值
     * @param clipUuid
     * @param nodeUuid
     * @param frame
     */
    getAllPropValueAtFrame(clipUuid: string, nodePath: string, properties: string[], frame: number): Promise<any>;
    /**
     * 动画操作组合
     * @param operationList 操作的组合数组
     */
    operation(operationList: IAnimOperation[], options?: AnimationOperationOptions): Promise<IAniResultBase>;
    /**
     * 监听节点变化
     *
     * @param {Node} node 节点
     * @param propPath 属性路径,例如：_components.0.top
     */
    onNodeChanged(node: Node, opts?: IChangeNodeOptions): Promise<void>;
    private _onAnimPlay;
    private _onAnimPause;
    private _onAnimResume;
    private _onAnimStopped;
    private _onAnimPlayEnd;
    update(): void;
    onAssetDeleted(uuid: string): void;
    onAssetRefreshed(uuid: string): void;
    /**
     * 移除某个 animationState 并做事件监听的移除以及组件销毁
     * @param clipUuid
     * @returns
     */
    private removeAnimationState;
    private clearAnimationState;
    onSceneOpened(scene: any): void;
    queryAuxiliaryCurves(clipId: string): Promise<Record<string, import("../../../../../@types/private").IPropCurveDumpData>>;
}
declare const _default: AnimationManager;
export default _default;
//# sourceMappingURL=index.d.ts.map