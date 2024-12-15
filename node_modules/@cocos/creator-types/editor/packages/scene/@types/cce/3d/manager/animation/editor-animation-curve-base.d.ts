import { ExtrapolationMode, Node, ObjectCurve, QuatCurve, RealCurve } from 'cc';
import { IAnimationClipData, ICurveDumpData, ICurveInfo, IKeyframe, IPropCustomData, IPropData, ICurveData } from './type-defines';
declare abstract class EditorAnimationCurveBase {
    protected _node: Node;
    protected _clipData: IAnimationClipData;
    protected _curveInfo: ICurveInfo;
    protected _keyframeData: IKeyframe[];
    protected _isDirty: boolean;
    protected _preExtrap: ExtrapolationMode;
    protected _postExtrap: ExtrapolationMode;
    set node(node: Node);
    get dirty(): boolean;
    set dirty(value: boolean);
    get curveInfo(): ICurveInfo;
    set curveInfo(value: ICurveInfo);
    get keyframeData(): IKeyframe[];
    set keyframeData(value: IKeyframe[]);
    get nodePath(): string;
    get propKey(): string;
    get propData(): IPropData;
    get preExtrap(): ExtrapolationMode;
    set preExtrap(value: ExtrapolationMode);
    get postExtrap(): ExtrapolationMode;
    set postExtrap(value: ExtrapolationMode);
    getClipSample(): number;
    getClipDuration(): number;
    initFromCurve(curveInfo: ICurveInfo, curve: RealCurve | QuatCurve | ObjectCurve<unknown>): void;
    /**
     * 取得某个关键帧的值
     * @param frame
     */
    abstract getPropValueAtFrame(frame: number): Promise<any>;
    decodeDump(dump: ICurveDumpData): Promise<void>;
    abstract getDumpData(): Promise<ICurveDumpData>;
    abstract changeNodePath(path: string): void;
    autoSetTangents(): void;
    calculateCurveTangent(preTime: number, preValue: any, currTime: number, currValue: any, nextTime: number, nextValue: any): number | undefined;
    abstract hasKey(frame: number): any;
    abstract createKey(frame: number, customData?: IPropCustomData): Promise<boolean>;
    abstract moveKeys(frames: number[], offsets: number[]): Promise<boolean>;
    abstract removeKey(frames: number[]): Promise<boolean>;
    abstract updateKey(frames: number[]): Promise<boolean>;
    abstract copyKeysTo(srcFrames: number[], dstFrame: number): Promise<boolean>;
    abstract spacingKeys(frames: number[], spacingFrames: number): Promise<boolean>;
    abstract clearKeys(): Promise<boolean>;
    abstract modifyCurveOfKey(frame: number, data: ICurveData): Promise<boolean>;
}
export default EditorAnimationCurveBase;
//# sourceMappingURL=editor-animation-curve-base.d.ts.map