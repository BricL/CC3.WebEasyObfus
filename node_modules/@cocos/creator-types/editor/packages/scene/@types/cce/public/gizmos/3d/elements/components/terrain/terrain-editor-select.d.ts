/**
 * @category terrain
 */
import { TerrainEditorMode } from './terrain-editor-mode';
import { Terrain, TerrainBlock, Camera, Texture2D } from 'cc';
export declare class TerrainEditorWeightMapData {
    data: Uint8Array;
    width: number;
    height: number;
}
export declare class TerrainEditorSelect extends TerrainEditorMode {
    private _selectMaterial;
    private _selectBlock;
    private _weightMap;
    private _weightData;
    private _layerList;
    constructor(gizmo: any);
    setSelectBlock(block: TerrainBlock | null): void;
    getSelectBlock(): TerrainBlock | null;
    getCurrentBlockIndex(): number[] | null;
    getCurrentWeightMap(): Texture2D | null;
    getCurrentWeightData(): TerrainEditorWeightMapData | null;
    getCurrentLayerList(): (Texture2D | null)[];
    onDeactivate(): void;
    onMouseDown(terrain: Terrain, cam: Camera, x: number, y: number): void;
    private _pickTerrainBlock;
    private _updateBlockSelectMaterial;
}
//# sourceMappingURL=terrain-editor-select.d.ts.map