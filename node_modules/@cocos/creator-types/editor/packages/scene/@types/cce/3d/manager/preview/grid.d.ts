import { Camera, Color, Node } from 'cc';
import LinearTicks from '../camera/grid/linear-ticks';
export declare class Grid {
    private _gridMeshComp;
    private synchronizeCamera;
    private _lineColor;
    hTicks?: LinearTicks;
    vTicks?: LinearTicks;
    constructor(rootNode: Node, synchronizeCamera: Camera);
    private _hide;
    hide(): void;
    _updateGridData(positions: number[], colors: number[], lineColor: Color, lineEnd?: number | null): void;
    updateGrid(): void;
}
//# sourceMappingURL=grid.d.ts.map