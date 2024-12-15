import { UndoManagerBase, UndoCommand } from './base';
import { ISceneUndoManager, ISceneUndoOption, SceneUndoCommandID } from './scene';
declare class AnimationUndoManager extends UndoManagerBase implements ISceneUndoManager {
    name: string;
    id: number;
    _manualCommands: AnimationUndoCommand[];
    nodeUuid: string;
    clipUuid: string;
    clipDump: any;
    init(): void;
    getUndoData(): {
        nodeUuid: string;
        clipUuid: string;
        clipDump: any;
    };
    getRedoData(): {
        nodeUuid: string;
        clipUuid: string;
        clipDump: any;
    };
    updateCache(): void;
    _createCommand(option: ISceneUndoOption): AnimationUndoCommand;
    beginRecording(uuids: string | string[], option?: ISceneUndoOption): SceneUndoCommandID;
    endRecording(id: string): boolean;
    cancelRecording(id: string): boolean;
    reset(nodeUuid?: string, clipUuid?: string): void;
    snapshot(command?: any): void;
    record(uuid?: string | undefined): void;
    abort(): void;
    updateDump(uuids: string[]): void;
    undo(): Promise<UndoCommand | undefined>;
    redo(): Promise<UndoCommand | undefined>;
}
declare class AnimationUndoCommand extends UndoCommand {
    id: string;
    undoData: any;
    redoData: any;
    tag: string;
    undo(): Promise<void>;
    redo(): Promise<void>;
    applyData(data: any): Promise<void>;
}
export { AnimationUndoManager };
//# sourceMappingURL=animation.d.ts.map