import { TerrainEditorManage } from './terrain-editor-manage';
import { eTerrainEditorMode, TerrainEditorMode } from './terrain-editor-mode';
import { TerrainEditorPaint } from './terrain-editor-paint';
import { TerrainEditorSculpt } from './terrain-editor-sculpt';
import { TerrainEditorSelect } from './terrain-editor-select';
import { Terrain, Camera } from 'cc';
import type TerrainGizmo from './gizmo-select';
export declare class TerrainEditor {
    private _terrain;
    private _modes;
    private _currentMode;
    private _cameraComp;
    isChanged: boolean;
    private _gizmo?;
    constructor(cameraComp: Camera, gizmo: TerrainGizmo);
    setEditTerrain(t: Terrain | null): void;
    getEditTerrain(): Terrain | null;
    setMode(mode: eTerrainEditorMode): void;
    clearBrush(): void;
    getMode<T extends eTerrainEditorMode>(mode: T): [TerrainEditorManage, TerrainEditorSculpt, TerrainEditorPaint, TerrainEditorSelect][T];
    getCurrentMode(): TerrainEditorMode | null;
    getCurrentModeType(): eTerrainEditorMode;
    setCurrentLayer(id: number): void;
    getCurrentLayer(): number;
    update(dTime: number, isShiftDown: boolean): void;
    onMouseDown(x: number, y: number): void;
    onMouseUp(): void;
    onMouseMove(x: number, y: number): void;
    onHoverOut(): void;
    updateBlockDepthOffset(): void;
}
//# sourceMappingURL=terrain-editor.d.ts.map