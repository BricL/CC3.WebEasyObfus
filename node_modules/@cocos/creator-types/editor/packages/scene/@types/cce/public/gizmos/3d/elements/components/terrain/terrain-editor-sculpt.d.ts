import { Vec3, Terrain, Texture2D } from 'cc';
import { TerrainBrushType, TerrainBrush, TerrainEdModifierKeyState } from './terrain-brush';
import { TerrainEditorMode } from './terrain-editor-mode';
import { TerrainHeightUndoRedo } from './terrain-operation';
export declare class TerrainEditorSculpt extends TerrainEditorMode {
    _brushes: TerrainBrush[];
    _undo: TerrainHeightUndoRedo | null;
    _currentBrush: TerrainBrush;
    private _currentTool;
    constructor(gizmo: any);
    setCurrentBrush(type: TerrainBrushType): void;
    getCurrentBrush(): TerrainBrush;
    getBrush(type: TerrainBrushType): TerrainBrush;
    setBrushImage(tex: Texture2D | null): void;
    setSculptBrushRotation(rotate: number): void;
    onUpdate(terrain: Terrain, dtime: number, isShiftDown: boolean): void;
    onUpdateBrushPosition(terrain: Terrain, pos: Vec3): void;
    onMouseDown(terrain: Terrain): void;
    onMouseUp(): void;
    _updateHeight(terrain: any, dtime: number, modifiers: TerrainEdModifierKeyState): void;
}
//# sourceMappingURL=terrain-editor-sculpt.d.ts.map