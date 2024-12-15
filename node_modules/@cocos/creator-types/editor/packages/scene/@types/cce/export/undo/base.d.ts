/**
 *  undo命令基类,业务根据自身需要继承该类,通过重载undo/redo方法完成业务定制
*/
declare class UndoCommand {
    toPerformUndo: boolean;
    perform(): Promise<void>;
    /**
     * 子类根据业务需要，重写该方法,定制undo操作
     */
    undo(): Promise<void>;
    /**
     * 子类根据业务需要，重写该方法,定制redo操作
     */
    redo(): Promise<void>;
}
/**
 * undo机制基类，用来管理undo队列
*/
declare class UndoManagerBase {
    _multiCollaboration: boolean;
    _multiCommandArray: UndoCommand[];
    _commandArray: UndoCommand[];
    _index: number;
    _lastSavedCommand: UndoCommand | null;
    /**
     * 添加undo命令
     * @param command:UndoCommand
     */
    push(command: UndoCommand): void;
    /**
     * 执行一次undo操作
     */
    undo(): Promise<UndoCommand | undefined>;
    /**
     * 执行一次redo
     */
    redo(): Promise<UndoCommand | undefined>;
    /**
     * 重置undo队列
     */
    reset(): void;
    /**
     * 保存时调用，配合isDirty判断
     */
    save(): void;
    /**
     * 当返回true时，说明文件存在修改
     * @returns 是否存在修改
     */
    isDirty(): boolean;
}
export { UndoCommand, UndoManagerBase };
//# sourceMappingURL=base.d.ts.map