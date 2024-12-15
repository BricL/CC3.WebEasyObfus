import { Vec3, Terrain, Texture2D } from 'cc';
import { TerrainBrush, TerrainBrushType } from './terrain-brush';
import { TerrainEditorMode } from './terrain-editor-mode';
import { TerrainWeightUndoRedo } from './terrain-operation';
import type TerrainGizmo from './gizmo-select';
export declare class TerrainEditorPaint extends TerrainEditorMode {
    _brushes: TerrainBrush[];
    _undo: TerrainWeightUndoRedo | null;
    _currentLayer: number;
    _currentBrush: TerrainBrush;
    constructor(gizmo: TerrainGizmo);
    setCurrentBrush(type: TerrainBrushType): void;
    getCurrentBrush(): TerrainBrush;
    getBrush(type: TerrainBrushType): TerrainBrush;
    setBrushImage(tex: Texture2D | null): void;
    setCurrentLayer(layer: number): void;
    getCurrentLayer(): number;
    onUpdate(terrain: Terrain, dTime: number): void;
    onUpdateBrushPosition(terrain: Terrain, pos: Vec3): void;
    onMouseDown(terrain: Terrain): void;
    onMouseUp(): void;
    forceUpdate(): void;
    onDeactivate(): void;
    private _updateWeight;
}
//# sourceMappingURL=terrain-editor-paint.d.ts.map