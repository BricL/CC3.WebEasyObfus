import { Node, Vec3, Color } from 'cc';
import { IControlMouseEvent, IHandleData } from '../../../defines';
import EditableController from './editable-controller';
declare enum PolygonHandleType {
    None = "none",
    Point = "point",
    Line = "line",
    Area = "area"
}
interface IPolygonHandleData {
    type: string;
    deltaPos?: Vec3;
    index: number;
    hitPos?: Vec3;
}
declare class PolygonController extends EditableController {
    static PolygonHandleType: typeof PolygonHandleType;
    private _panPlane;
    private _points;
    private _mouseDownOnPlanePos;
    private _curHandleData;
    private _lineGroup;
    private _pointsHandleData;
    private _linesHandleData;
    private _hitPoint;
    private _areaNode;
    private _areaMR;
    private _areaOpacity;
    get points(): Vec3[];
    constructor(rootNode: Node);
    initShape(): void;
    onInitEditHandles(): void;
    showEditHandles(): void;
    hideEditHandles(): void;
    createPolygonAreaHandle(): void;
    setColor(color: Color): void;
    updateData(points: Vec3[]): void;
    resetEditHandlesFromPoints(points: Vec3[]): void;
    createLineHandle(startPos: Vec3, endPos: Vec3, index: number): IHandleData;
    _updateLinesHandle(): void;
    _updateEditHandle(handleName: string): void;
    onMouseDown(event: IControlMouseEvent): void;
    onMouseMove(event: IControlMouseEvent): void;
    onMouseUp(event: IControlMouseEvent): void;
    onHoverIn(event: IControlMouseEvent): void;
    onHoverOut(event: IControlMouseEvent): void;
    getHitPoint(): Vec3 | null;
    getHandleData(): IPolygonHandleData;
}
export { PolygonController, IPolygonHandleData };
//# sourceMappingURL=polygon-controller.d.ts.map