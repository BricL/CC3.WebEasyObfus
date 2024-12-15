import { IDumpType, IKeyDumpData, IPlayableInfo, IEmbeddedPlayers, IClipInfo } from '../../../../../@types/private';
import { animation, AnimationClip, Component, Node, AnimationState } from 'cc';
import { IAnimData, ICurveInfo, IPropCustomData, IPropData, IPropDumpData, IKeyframe, ICurveData } from './type-defines';
import { EmbeddedPlayable } from 'cc/editor/embedded-player';
declare const allowModifyCurveType: string[];
export declare function isSkeletonClip(uuid: string): boolean;
declare function isHierarchyPath(path: any): boolean;
export declare function getSerializedAuxCurves(clip: AnimationClip): Record<string, any>;
/**
 * 对 AnimationClips 对象数组去重（根据 `clip.uuid`）
 */
export declare function uniqAnimationClips(clips: (AnimationClip | null)[]): AnimationClip[];
export declare function copyAuxiliaryCurves(src: AnimationClip, dest: AnimationClip): void;
declare class AnimationUtil {
    cloneCCClass(ccKlassObj: any): unknown;
    getNodePathFromAnimRoot(rootNode: Node, node: Node): string | null;
    getCustomModifierData(modifier: any): any;
    decodeClipsMenu(clips: (AnimationClip | null)[]): IClipInfo[];
    /**
     * 获得属性的一些dump数据
     * @param propOwnerObject 属性所属于的Object
     * @param propObject 属性，由于有数组的关系，所以propObject不一定等于propOwnerObject[propName]
     * @param propName 属性名字
     * @param valueAdapter 属性的适配器
     */
    getPropDumpData(propOwnerObject: any, propObject: any, propName: string, valueAdapter: animation.IValueProxyFactory | undefined): IPropDumpData;
    dumpKeyframeData(keyframeData: IKeyframe[]): IKeyDumpData[];
    getKeyframeDataFromDump(dumpKeys: IKeyDumpData[]): Promise<IKeyframe[]>;
    getPartsOfType(type?: string): any;
    createPropertyCurve(curveInfo: ICurveInfo, keys: number[][], sample: number, keyframeData: IKeyframe[]): any;
    getNodePath(targetPaths: animation.TrackPath, commonTarget?: any): string;
    generateHierarchyPath(nodePath: string): animation.TrackPath | null;
    /**
     * 从路径数组中解析中属性所需的各种信息
     * @param modifiers 路径数组
     * @param rootNode 动画根节点
     */
    getPropInfo(modifiers: animation.TrackPath, rootNode?: Node): {
        nodePath: string;
        propPath: string;
        propKey: string;
        compName: string | undefined;
        propName: string;
        displayName: string;
        propObject: any;
        propOwnerObject: Node | undefined;
    };
    getCurveInfoByTrack(node: Node, track: animation.Track): ICurveInfo;
    getTypeByTrack(track: animation.Track): IDumpType;
    copyClip(dstClip: AnimationClip, srcClip: AnimationClip): void;
    /**
     * 查询当前动画的事件数组
     * @param {object} clip clip 数据
     */
    queryEvents(clip: AnimationClip): AnimationClip.IEvent[] | null;
    isObject(propObject: any): boolean;
    private isExcludeType;
    /**
     *
     * @param {*} compTypeName 组件类型名
     * @param {*} propName 属性名
     * @param {*} propType 属性类型
     * @param {*} propObject 属性值、Object
     * @param {*} propModifiers 属性路径
     * @param {*} parentTypes 一层层下来的类型集合，防止循环引用导致的死循环
     */
    handleAnimableProp(compTypeName: string, propName: string, propType: string, propObject: any, propModifiers: animation.TrackPath, parentTypes: string[]): IPropDumpData[];
    generatePropDumpData(compTypeName: string, propName: string, propModifiers: animation.TrackPath): IPropDumpData;
    handlePrimitiveProp(compTypeName: string, propName: string, propType: string, propModifiers: animation.TrackPath): IPropDumpData;
    handleObjectProp(compTypeName: string, propName: string, propType: string, propObject: any, propModifiers: animation.TrackPath, parentTypes: string[]): IPropDumpData[] | null;
    handleArrayProp(compTypeName: string, propName: string, propType: string, propObject: any, propModifiers: animation.TrackPath, parentTypes: string[]): IPropDumpData[];
    getCCClassAnimablePropType(object: any, prop: string): any;
    /**
     * 从一个属性获得可以用于制作动画的数据
     * @param {*} comp
     * @param {*} property
     */
    getAnimablePropsFromProperty(comp: Component, property: string): IPropDumpData[] | null;
    /**
     * 从 component 内获取可以用于动画制作的属性列表
     * @param {*} component
     */
    getAnimablePropsFromComponent(component: Component): IPropDumpData[];
    /**
     * 从一个 node 内获取出可以用于动画制作的属性列表
     * @param {*} node
     * @param {*} isChild
     */
    getAnimableProperties(node: Node, isChild: boolean): IPropDumpData[] | null;
    getClipName(clipUuid: string, clips: (AnimationClip | null)[]): null;
    /**
     * 查询一个节点的动画数据
     * @param {*} uuid
     * @param {*} clipUuid
     */
    queryNodeAnimationData(uuid?: string | Node, clipUuid?: string): IAnimData;
    getDefaultValue(type?: string): unknown;
    /**
     * 从轨道信息和自定义信息中获取一个数值
     * @param {*} node
     * @param {*} clipData
     * @param {*} propData
     * @param {*} customData
     */
    getValueFrom(node: Node, propData: IPropData, customData?: IPropCustomData | null): Promise<any>;
    /**
     * 加载一个json格式的clip, hack了asset-library的loadJson
     * @param uuid clip的uuid
     * @param json clip的json内容
     * @param callback 回调函数
     */
    loadJsonWithUuid(uuid: string, json: any, callback: (error: any, asset: any) => void): void;
    copyCurveData(srcData: ICurveData, dstData: ICurveData): void;
    isNumber(obj: any): boolean;
    getTrackTypeBy(typeName: string): "color" | "size" | "vec2" | "vec3" | "vec4" | null;
    /**
     * 类型是否支持曲线编辑
     * @param type
     * @returns
     */
    isTypeSupportCurve(type: string | undefined): boolean;
    calcEmbeddedPlayerKey(EmbeddedPlayerDump: IEmbeddedPlayers): string;
    initAninState(state: AnimationState, node: Node): void;
    getPlayableInfo(playable: EmbeddedPlayable | undefined): IPlayableInfo | null;
}
declare const utils: AnimationUtil;
export { utils, isHierarchyPath, allowModifyCurveType };
export declare function multiplyTrackWithTimer(category: string, value: Record<string, string | number>): void;
//# sourceMappingURL=utils.d.ts.map