import UndoManagerBase from './undo-manager-base';
declare class PrefabUndoManager extends UndoManagerBase {
    cacheDump: any;
    scene: any;
    records: string[];
    constructor();
    getUndoData(uuids?: string[]): any;
    getRedoData(uuids?: string[]): any;
    updateCache(uuids?: string[]): void;
    /**
     * 取消记录
     */
    abort(): void;
    record(node: any): void;
    snapshot(command?: any): false | undefined;
    undo(): Promise<void>;
    redo(): Promise<void>;
    reset(uuids: string[], scene: any): void;
}
declare const prefabUndoManager: PrefabUndoManager;
export default prefabUndoManager;
//# sourceMappingURL=prefab.d.ts.map