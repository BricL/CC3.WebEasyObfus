import { Terrain } from 'cc';
import { TerrainEditor } from './terrain-editor';
import { eTerrainEditorMode } from './terrain-editor-mode';
import { ISceneKeyboardEvent } from '../../../../../../@types/private';
import type { GizmoMouseEvent } from '../../utils/defines';
import { SelectGizmo } from '../base';
interface IBrush {
    radius: number;
    strength: number;
    _setHeight: number;
}
interface ITerrainInfo {
    tileSize: number;
    weightMapSize: number;
    lightMapSize: number;
    blockCount: number[];
}
declare class TerrainGizmo extends SelectGizmo<Terrain> {
    private _editor;
    private _isEditorInit;
    private _isShiftDown;
    private _isConcave;
    private _isSmooth;
    private _isFlatten;
    private _isSetHeight;
    get editor(): TerrainEditor;
    init(): void;
    get isConcave(): boolean;
    get isSmooth(): boolean;
    get isFlatten(): boolean;
    get isSetHeight(): boolean;
    applySmooth(value: boolean): void;
    get isTerrainChange(): boolean;
    set isTerrainChange(isChange: boolean);
    onShow(): void;
    onHide(): void;
    onEditorCameraMoved(): void;
    reportRushModeAndPaintModeUsedCount(): void;
    initEditor(): void;
    addLayerByUuid(uuid: string): Promise<unknown>;
    setSculptBrush(uuid: string): Promise<unknown>;
    setSculptBrushRotation(rotate: number): Promise<void>;
    setPaintBrush(uuid: string): Promise<unknown>;
    setLayerValue(index: number, uuid: string, extVal: any): Promise<unknown>;
    removeLayerByIndex(index: number): void;
    setCurrentEditLayer(index: number): void;
    getLayers(): (Object | null)[];
    getCurrentEditLayer(): number;
    setCurrentEditMode(mode: eTerrainEditorMode, option?: any): void;
    queryTerrainInfo(): ITerrainInfo | null;
    changeTerrainInfo(info: any): void;
    queryBrushOfMode(mode: any): IBrush | null;
    setBrushOfMode(mode: any, brushSetting: any): void;
    getBlockInfo(): {
        index: {
            x: number;
            y: number;
        };
        weight: {
            data: number[];
            width: number;
            height: number;
        } | null;
        layers: any[];
    };
    emitNodeChange(): void;
    onKeyDown(event: ISceneKeyboardEvent): void;
    onKeyUp(event: ISceneKeyboardEvent): void;
    onUpdate(deltaTime: number): void;
    onCameraControlModeChanged(mode: number): void;
    updateTerrainAsset(): void;
    onControllerMouseDown(event: GizmoMouseEvent): void;
    onControllerMouseMove(event: GizmoMouseEvent): void;
    onControllerMouseUp(event: GizmoMouseEvent): void;
    onControllerHoverOut(): void;
}
export default TerrainGizmo;
//# sourceMappingURL=gizmo-select.d.ts.map