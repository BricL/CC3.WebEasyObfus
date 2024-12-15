import { Vec4, Terrain, TerrainBlock } from 'cc';
import { SceneUndoCommand } from '../../../../../../export/undo';
export declare class TerrainHeightData {
    x: number;
    y: number;
    value: number;
}
export declare class TerrainHeightOperation extends SceneUndoCommand {
    protected _terrain?: Terrain;
    constructor(terrain: Terrain);
    set terrain(terrain: Terrain);
    get terrain(): Terrain;
    static addChangeList(changelist: TerrainBlock[], block: TerrainBlock): void;
    data: TerrainHeightData[];
    push(x: number, y: number, value: number): void;
    apply(): void;
}
export declare class TerrainHeightUndoRedo extends TerrainHeightOperation {
    redoOperations: TerrainHeightOperation[];
    undo(): Promise<void>;
    redo(): Promise<void>;
}
export declare class TerrainWeightData {
    x: number;
    y: number;
    value: Vec4;
}
export declare class TerrainLayerOperation {
    protected _terrain?: Terrain;
    protected _layers: [];
    constructor(terrain: Terrain);
    set terrain(terrain: Terrain);
    get terrain(): Terrain;
    setLayers(): void;
    apply(): void;
}
export declare class TerrainLayerUndoRedo extends TerrainLayerOperation {
    redoOperations: TerrainLayerOperation[];
    undo(): void;
    redo(): void;
}
export declare class TerrainWeightOperation extends SceneUndoCommand {
    protected _terrain?: Terrain;
    constructor(terrain: Terrain);
    set terrain(terrain: Terrain);
    get terrain(): Terrain;
    static addChangeList(changelist: TerrainBlock[], block: TerrainBlock): void;
    data: TerrainWeightData[];
    push(x: number, y: number, value: Vec4): void;
    apply(): void;
}
export declare class TerrainBlockLayerData {
    block: TerrainBlock;
    layers: number[];
    constructor(block: TerrainBlock, layers: number[]);
}
export declare class TerrainWeightUndoRedo extends TerrainWeightOperation {
    undoBlockLayers: TerrainBlockLayerData[];
    redoBlockLayers: TerrainBlockLayerData[];
    redoOperations: TerrainWeightOperation[];
    undo(): Promise<void>;
    redo(): Promise<void>;
    pushBlock(block: TerrainBlock, undoLayers: number[], redoLayers: number[]): void;
    apply(): void;
}
//# sourceMappingURL=terrain-operation.d.ts.map