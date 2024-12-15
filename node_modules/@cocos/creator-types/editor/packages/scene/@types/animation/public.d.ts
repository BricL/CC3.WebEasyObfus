import { EmbeddedPlayerGroup, RealCurve } from 'cc';
import { ICurveData, ICurveDumpData, IPropCustomData } from './private';

export type IAnimationType = 'cc.Animation' | 'cc.SkeletalAnimation' | 'cc.animation.AnimationController';

export interface IKeyDumpData {
    frame: number;
    dump: any; // value的dump数据
    inTangent?: number;
    inTangentWeight?: number;
    outTangent?: number;
    outTangentWeight?: number;
    interpMode?: number;
    broken?: boolean;
    tangentWeightMode?: number;
    imgUrl?: string;
    easingMethod?: number;
}

export interface IDumpType {
    value: string;
    extends?: string[];
}

export interface IClipInfo {
    name: string;
    uuid: string | undefined;
}

// 动画相关操作的返回值结果
export interface IAniResultBase {
    state: 'success' | 'failure';
    result: any | null;
    reason?: string;
}

export interface IAniEditInfo extends IAniResultBase {
    result: null | {
        root: string;
        node?: any;
        aniComp?: IAnimationType;
        clipsMenu?: IClipInfo[];
        defaultClip?: string;
    }
}

export interface IAnimationEditData {
    root: string;
    curEditClip: AnimationClip | null;
}

export interface IPropCurveDumpData {
    nodePath: string;
    // 原始的 keyframe 数据
    keyframes: IKeyDumpData[];
    displayName: string;
    key: string;
    type?: IDumpType;
    preExtrap: number;
    postExtrap: number;
    isCurveSupport: boolean; // 是否支持贝塞尔曲线编辑
}

export interface IAnimCopyKeySrcInfo {
    curvesDump: IPropCurveDumpData[];
}

export interface IAnimCopyNodeSrcInfo {
    curvesDump: IPropCurveDumpData[];
}

export interface IAnimCopyAuxSrc {
    name: string;
    frame: number;
    data: IPropCustomData;
}
export interface IAnimCopyAuxDest {
    name: string;
    frame: number;
    data: IPropCustomData;
}

export interface IAnimCopyNodeDstInfo {
    nodePath: string;
}

interface IEventDump {
    frame: number;
    func: string;
    params: string[];
}

interface IEventDump {
    frame: number;
    func: string;
    params: string[];
}

export interface IPlayableInfo {
    type: 'animation-clip' | 'particle-system';
    clip?: string;
    path?: string;
}

export interface IEmbeddedPlayers {
    begin: number;
    end: number;
    reconciledSpeed: boolean;
    playable?: IPlayableInfo;
    group: string;
    displayName?: string;
}

export interface AnimationClipPlayerInfo extends IPlayableInfo {
    clip: string;
    path: string;
}

export interface ParticleSystemPlayerInfo extends IPlayableInfo {
    path: string;
}

export interface AuxiliaryCurveListItem {
    name: string;
    curve: ICurveDumpData;
} 

export interface EditorAnimationClipDump {
    name: string;
    duration: number;
    sample: number;
    speed: number;
    wrapMode: number;

    curves: ICurveDumpData[];
    events: IEventDump[];
    embeddedPlayers: IEmbeddedPlayers[];
    time: number;
    isLock: boolean;
    embeddedPlayerGroups: EmbeddedPlayerGroup[];

    auxiliaryCurves: Record<string, IPropCurveDumpData>;

    isSkeleton: boolean;

    // 目前因为 现有bug 如果打开baked animation选项，动画编辑器无法播放动画。
    // 所有需要在动画编辑器上加警告提示用户
    // 相关 issue：https://github.com/cocos/3d-tasks/issues/13604
    useBakedAnimation: boolean;
}

export interface EditorEmbeddedPlayer extends IEmbeddedPlayers {
    _embeddedPlayer: any;
}

export interface IAnimCopyEmbeddedPlayersSrcInfo {
    embeddedPlayersDump: IEmbeddedPlayers[];
}

export interface IAnimCopyEventSrcInfo {
    eventsDump: IEventDump[];
}

export interface IAnimCopyPropSrcInfo {
    curvesDump: IPropCurveDumpData[];
}

export interface IAnimCopyPropDstInfo {
    nodePath: string;
    propKeys?: string[];
}

export interface IAnimCopyKeyDstInfo {
    nodePath: string;
    propKeys?: string[];
    startFrame: number;
}

export interface IAnimCopyEventDstInfo {
    startFrame: number;
}

export interface AnimationOperationOptions {
    /**
     * 该次 operation 是否需要记录到场景的 undo 系统中
     */
    recordUndo?: boolean;
}
