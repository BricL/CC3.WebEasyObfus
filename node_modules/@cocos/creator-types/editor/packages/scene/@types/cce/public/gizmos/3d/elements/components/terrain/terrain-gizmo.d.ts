import Gizmo from '../../gizmo-base';
import { eTerrainEditorMode } from './terrain-editor-mode';
import { ISceneKeyboardEvent } from '../../../../../../../../@types/private';
import { IControlMouseEvent } from '../../../../defines';
interface IBrush {
    radius: number;
    strength: number;
    _setHeight: number;
}
interface ITerrainInfo {
    tileSize: number;
    weightMapSize: number;
    lightMapSize: number;
    blockCount: number;
}
declare class TerrainGizmo extends Gizmo {
    private _editor;
    private _controller;
    private _isEditorInit;
    private _isShiftDown;
    private _isConcave;
    private _isSmooth;
    private _isFlatten;
    private _isSetHeight;
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
    createController(): void;
    onControllerMouseDown(event: IControlMouseEvent): void;
    reportRushModeAndPaintModeUsedCount(): void;
    onControllerMouseMove(event: IControlMouseEvent): void;
    onControllerMouseUp(event: IControlMouseEvent | null): void;
    onControllerHoverOut(): void;
    updateControllerData(): void;
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
    protected alignQuadShape(): void;
    onTargetUpdate(): void;
    onNodeChanged(): void;
    emitNodeChange(): void;
    onKeyDown(event: ISceneKeyboardEvent): void;
    onKeyUp(event: ISceneKeyboardEvent): void;
    onUpdate(deltaTime: number): void;
    onCameraControlModeChanged(mode: number): void;
    updateTerrainAsset(): void;
}
export default TerrainGizmo;
//# sourceMappingURL=terrain-gizmo.d.ts.map