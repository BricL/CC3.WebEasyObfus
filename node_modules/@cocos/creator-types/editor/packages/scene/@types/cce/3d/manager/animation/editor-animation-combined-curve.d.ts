import { IDumpType } from '../../../../../@types/private';
import { animation, Node } from 'cc';
import EditorAnimationCurve from './editor-animation-curve';
import EditorAnimationCurveBase from './editor-animation-curve-base';
import { IAnimationClipData, ICurveInfo, IPropCustomData } from './type-defines';
/**
 * 用于带分量的曲线类型，如Vec3,Color等。它并不产生对应的clip中的数据，只是起到一个显示和操作的中转作用，
 * 它把分量曲线的信息综合起来显示，并把对它的操作数据转发到分量曲线上。
 */
declare class EditorAnimationCombinedCurve extends EditorAnimationCurveBase {
    get maxPartNumber(): number;
    set maxPartNumber(value: number);
    canMerge: boolean;
    private _partEditorAnimCurves;
    private _maxPartNumber;
    get curveInfo(): ICurveInfo;
    set curveInfo(value: ICurveInfo);
    constructor(node: Node, clipData: IAnimationClipData);
    updateType(type?: IDumpType): void;
    getDumpData(): Promise<{
        nodePath: string;
        keyframes: import("../../../../../@types/private").IKeyDumpData[];
        displayName: string;
        key: string;
        type: IDumpType | undefined;
        isCurveSupport: boolean;
    }>;
    getClipSample(): number;
    getClipDuration(): number;
    changeNodePath(path: string): void;
    initFromTrack(curveInfo: ICurveInfo, track: animation.VectorTrack | animation.ColorTrack | animation.SizeTrack): void;
    updateCurveData(): Promise<void>;
    separateDataIntoParts(): void;
    addPartEditorAnimCurve(partCurve: EditorAnimationCurve): void;
    getPartEditorAnimCurves(): EditorAnimationCurve[];
    iteratorPartAnimCurves(callBack: (partCurve: EditorAnimationCurve, part: string) => void): Promise<void>;
    hasKey(frame: number): boolean;
    createKey(frame: number | undefined, customData: IPropCustomData): Promise<boolean>;
    moveKeys(frames: number[], offsets: number[]): Promise<boolean>;
    removeKey(frames: number[]): Promise<boolean>;
    updateKey(frames: number[]): Promise<boolean>;
    copyKeysTo(srcFrames: number[], dstFrame: number): Promise<boolean>;
    spacingKeys(frames: number[], spacingFrames: number): Promise<boolean>;
    clearKeys(): Promise<boolean>;
    modifyCurveOfKey(frame: number, data: any): Promise<boolean>;
    /**
     * 取得某个关键帧的值
     * @param frame
     */
    getPropValueAtFrame(frame: number): Promise<import("../../../../../@types/public").IProperty | null>;
}
export default EditorAnimationCombinedCurve;
//# sourceMappingURL=editor-animation-combined-curve.d.ts.map