import { Node, Size, Vec2, Vec3 } from 'cc';
interface IWorldRect {
    minPos: Vec3;
    maxPos: Vec3;
    center: Vec3;
    width: number;
    height: number;
}
interface IDistanceInfo {
    left: IRectDistInfo[];
    right: IRectDistInfo[];
    top: IRectDistInfo[];
    bottom: IRectDistInfo[];
}
interface IShapeInfo {
    worldRect: IWorldRect;
    distInfo: IDistanceInfo;
}
interface IRectDistInfo {
    minDist: number;
    minDistPosA: Vec3;
    minDistPosB: Vec3;
    axis: string;
    targetShapeInfo?: IShapeInfo;
}
interface IRectSnapConfigData {
    enableSnapping: boolean;
    snapThreshold: number;
}
declare class SnapGuideline {
    value: number;
    lineVertices: Vec3[];
    axis: keyof (Vec3);
    checkNode?: Node;
    constructor(value: number, axis: keyof (Vec3), vertices: Vec3[]);
}
declare class SnapGuidelineGroup {
    currentGuidelines: SnapGuideline[];
    guidelines: Map<number, SnapGuideline[]>;
    clear(): void;
    addGuideline(guideline: SnapGuideline): void;
    snapToGuidelines(value: number, snapDist: number): number;
}
declare class RectTransformSnapping implements IRectSnapConfigData {
    enableSnapping: boolean;
    enableGridSnapping: boolean;
    snapThreshold: number;
    nodeSnapGuidelineGroups: SnapGuidelineGroup[];
    sidesAndMiddle: number[];
    guidelineColor: any;
    canvasSnapColor: any;
    canvasSnapGuidelineGroups: SnapGuidelineGroup[];
    shapeInfos: IShapeInfo[];
    currentMatchMinDistInfos: IRectDistInfo[];
    gridSpacingX: number;
    gridSpacingY: number;
    gridColor: any;
    gridSnapGuidelineGroups: SnapGuidelineGroup[];
    getPureDataObject(): IRectSnapConfigData;
    initFromData(data: IRectSnapConfigData): void;
    lerp(from: number, to: number, ratio: number): number;
    getWorldRectEx(node: Node): IWorldRect;
    snapToGuidelinesOnAxis(guidelineGroups: SnapGuidelineGroup[], value: number, snapDist: number, axis: string): number;
    getNodeGuidelinePos(node: Node, axis: keyof (Vec3), side: number): Vec3[];
    getNodeSnapGuidelines(parentNode: Node, node: Node, axis: keyof (Vec3), side: number): SnapGuideline[];
    clearCurrentNodeGuidelines(): void;
    snapToNodeGuidelinesOnAxis(value: number, snapDist: number, axis: string): number;
    snapPosToNodeGuidelines(worldPos: Vec3, worldSize: Size, snapDist: Vec2): Vec3;
    snapSizeToNodeGuidelines(oriSizePos: Vec2, deltaSize: Vec2, snapDist: Vec2): Vec2;
    calculateNodeSnapGuidelines(parentNode: Node, node: Node): void;
    generateWorldRect(worldPos: Vec3, worldSize: Size): {
        minPos: any;
        maxPos: any;
        center: Vec3;
        width: number;
        height: number;
    };
    checkEqualSpacingOnSide(checkDistInfo: IDistanceInfo, side: keyof (IDistanceInfo), snapValue: number): {
        matchDist: number;
        matchDeltaDist: number;
        sideMinDistShapeInfo: IShapeInfo | undefined;
        matchSideDistInfos: IRectDistInfo[];
    } | null | undefined;
    checkEqualSpacingOnAxis(distInfo: IDistanceInfo, value: number, axis: keyof (Vec3), snapValue: number): {
        newValue: number;
        matchDistInfos: IRectDistInfo[];
        matchShapeInfos: (IShapeInfo | undefined)[];
    } | null;
    snapPosToEqualSpacing(worldPos: Vec3, worldSize: Size, snapDist: Vec2): Vec3;
    calculateSpacingSnapGuidelines(parentNode: Node, node: Node): void;
    gatherDistInfo(infoA: IShapeInfo, infoB: IShapeInfo): {
        distInfoA: IDistanceInfo;
        distInfoB: IDistanceInfo;
    };
    concatDistInfo(dstDistInfo: IDistanceInfo, srcDistInfo: IDistanceInfo): void;
    gatherShapeInfos(parentNode: Node, node: Node): IShapeInfo[] | null;
    generateShapeInfo(worldRect: IWorldRect): IShapeInfo;
    getDistInfoOfRect(rectA: IWorldRect, rectB: IWorldRect): IRectDistInfo | null;
    calculateGridSnapGuidelines(): void;
    clearCurrentGridGuidelines(): void;
    snapToGridGuidelinesOnAxis(value: number, snapDist: number, axis: keyof (Vec3)): number;
    snapPosToGridSnapGuidelines(worldPos: Vec3, worldSize: Size, snapDist: Vec2): Vec3;
    snapSizeToGridGuidelines(oriSizePos: Vec3, deltaSize: Vec3, snapDist: Vec2): Vec3;
    calculateCanvasSnapGuidelines(): void;
    clearCurrentCanvasGuidelines(): void;
    snapToCanvasSnapGuidelinesOnAxis(value: number, snapDist: number, axis: string): number;
    snapPosToCanvasSnapGuidelines(worldPos: Vec3, worldSize: Size, snapDist: Vec2): Vec3;
}
declare const rectTransformSnapping: RectTransformSnapping;
export { SnapGuideline, SnapGuidelineGroup, RectTransformSnapping, IRectSnapConfigData, rectTransformSnapping, };
//# sourceMappingURL=rect-transform-snapping.d.ts.map