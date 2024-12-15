import { Terrain } from 'cc';
import { TerrainEdModifierKeyState } from './terrain-brush';
export declare enum eTerrainTerrainEditorSculptToolMode {
    SCULPT = 0,
    SMOOTH = 1,
    FLATTEN = 2,
    SET_HEIGHT = 3
}
export declare class TerrainEditorSculptTool {
    start(terrain: Terrain, x: number, y: number): void;
    apply(terrain: Terrain, x: number, y: number, h: number, delta: number, modifiers: TerrainEdModifierKeyState): number;
}
export declare class TerrainEditorSculptTool_Sculpt extends TerrainEditorSculptTool {
    _concave: boolean;
    constructor(concave: boolean);
    apply(terrain: Terrain, x: number, y: number, h: number, delta: number, modifiers: TerrainEdModifierKeyState): number;
}
export declare class TerrainEditorSculptTool_Smooth extends TerrainEditorSculptTool {
    apply(terrain: Terrain, x: number, y: number, h: number, delta: number, modifiers: TerrainEdModifierKeyState): number;
}
export declare class TerrainEditorSculptTool_Flatten extends TerrainEditorSculptTool {
    _height: number;
    start(terrain: Terrain, x: number, y: number): void;
    apply(terrain: Terrain, x: number, y: number, h: number, delta: number, modifiers: TerrainEdModifierKeyState): number;
}
export declare class TerrainEditorSculptTool_SetHeight extends TerrainEditorSculptTool_Flatten {
    constructor(height: number);
    start(terrain: Terrain, x: number, y: number): void;
    apply(terrain: Terrain, x: number, y: number, h: number, delta: number, modifiers: TerrainEdModifierKeyState): number;
}
//# sourceMappingURL=terrain-editor-sculpt-tools.d.ts.map