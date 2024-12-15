import { Terrain } from 'cc';
export declare enum eTerrainEditorMode {
    MANAGE = 0,
    SCULPT = 1,
    PAINT = 2,
    SELECT = 3
}
export declare class TerrainEditorMode {
    protected _gizmo?: any;
    constructor(gizmo: any);
    get gizmo(): any;
    onUpdate(terrain: Terrain, dTime: number, isShiftDown: boolean): void;
    onActivate(): void;
    onDeactivate(): void;
    forceUpdate(): void;
}
//# sourceMappingURL=terrain-editor-mode.d.ts.map