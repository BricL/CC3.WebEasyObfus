import { IDumpType, IKeyDumpData } from '../../../../../@types/private';
import { animation, AnimationClip, Animation, Node, RealInterpolationMode, TangentWeightMode, RealKeyframeValue } from 'cc';
type IValueProxyFactory = animation.IValueProxyFactory;
type CompressedEasingMethods = Record<number, any>;
type TargetModifier = animation.TargetPath;
interface IPropData {
    combinedType?: IDumpType;
    type?: IDumpType;
    targetPaths?: animation.TrackPath;
    valueAdapter?: IValueProxyFactory;
    commonTarget?: any;
}
interface IPropDumpData {
    key?: string;
    category?: string;
    type?: IDumpType;
    displayName?: string;
    name?: string;
    comp?: string;
    propData?: IPropData;
    menuName?: string;
}
interface ICurveDumpData extends IPropDumpData {
    nodePath: string;
    keyframes: IKeyDumpData[] | null;
    parentPropKey?: string;
    partKeys?: string[];
}
interface IEventDumpData {
    frame: number;
    func: string;
    params: string[];
}
interface IDumpClip {
    name: string;
    duration: number;
    sample: number;
    speed: number;
    wrapMode: number;
    curves: ICurveDumpData[];
    events: IEventDumpData[];
}
interface IAnimData {
    node?: Node;
    animComp?: Animation | animation.AnimationController;
    clips?: (AnimationClip | null)[];
    defaultClip: AnimationClip | null;
}
interface ISharedClipData {
    sample: number;
    duration: number;
}
interface IAnimationClipData {
    sharedData: ISharedClipData;
}
interface ICurveData {
    inTangent?: number;
    inTangentWeight?: number;
    outTangent?: number;
    outTangentWeight?: number;
    interpMode?: RealInterpolationMode;
    tangentWeightMode?: TangentWeightMode;
    tangentMode?: TangentMode;
    easingMethod?: RealKeyframeValue['easingMethod'];
    broken?: boolean;
}
interface IPropCustomData extends ICurveData {
    newValue?: any;
}
interface IKeyframe extends ICurveData {
    frame: number;
    value: any;
}
interface ICurveInfo {
    nodePath: string;
    propKey: string;
    combinedType?: IDumpType;
    type?: IDumpType;
    targetPaths: animation.TrackPath;
    valueAdapter?: IValueProxyFactory;
    displayName: string;
    propName: string;
    compName?: string;
    partName?: string;
    commonTarget?: any;
}
interface IPassDumpData {
    name: string;
    type: IDumpType;
    passIndex: number;
    uniformAdapter: animation.UniformProxyFactory;
}
declare enum TangentMode {
    AUTO = 0,
    USER = 1,
    BREAK = 2,
    NONE = 3
}
export { IPropData, IPropDumpData, ICurveDumpData, IPassDumpData, IAnimData, IDumpClip, TargetModifier, IValueProxyFactory, IAnimationClipData, IPropCustomData, CompressedEasingMethods, IKeyframe, ISharedClipData, ICurveInfo, ICurveData, TangentMode, };
//# sourceMappingURL=type-defines.d.ts.map