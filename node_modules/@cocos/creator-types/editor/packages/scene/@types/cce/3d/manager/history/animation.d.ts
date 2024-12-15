import UndoManagerBase from './undo-manager-base';
/**
 * 动画编辑模式，按需发起 cce.History.snapshot(command?) 指令
 */
declare class AnimationUndo extends UndoManagerBase {
    nodeUuid: string;
    clipUuid: string;
    clipDump: any;
    hasChanged: boolean;
    constructor();
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
    snapshot(command?: any): false | undefined;
    changed(): void;
    undo(): Promise<void>;
    redo(): Promise<void>;
    reset(nodeUuid: string, clipUuid: string): void;
}
declare const animationUndo: AnimationUndo;
export default animationUndo;
//# sourceMappingURL=animation.d.ts.map