import UndoManagerBase from './undo-manager-base';
declare class PreviewUndoManager extends UndoManagerBase {
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
    /**
     * 目前的问题:
     * 1.snapshot依赖this.records,单独调用snapshot没有任何意义
     * 2.调用snapshot时，场景只要有变化，就会生成一个Command，但这个command不一定能完全对应用户的操作
     * 就导致实际可以undo的队列和用户的操作队列可能是不匹配的（完全取决于业务调用snapshot的时机是否正确）
     * 而且在undo/redo的时候如果record不为空也会snapshot,就是为了在snapshot没有生成Command的时候补救，非常不利于维护
     * 期望：
     * 场景提供修改接口，外部业务不用考虑snapshot,只负责调用修改接口
     * 场景在修改完数据后调用一次snapshot,确保每次snapshot都能和用户操作一一对应
     * */
    snapshot(command?: any): boolean;
    undo(): Promise<void>;
    redo(): Promise<void>;
    reset(uuids: string[], scene: any): void;
}
declare const previewUndoManager: PreviewUndoManager;
export default previewUndoManager;
//# sourceMappingURL=preview.d.ts.map