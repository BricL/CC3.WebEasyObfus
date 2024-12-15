import { ICommand } from './icommand';
declare class SnapshotCommand implements ICommand {
    undoData: any;
    redoData: any;
    constructor(undoData: any, redoData: any);
    undo(): Promise<void>;
    redo(): Promise<void>;
    excute(data: any): Promise<void>;
}
export default SnapshotCommand;
//# sourceMappingURL=snapshot-command.d.ts.map