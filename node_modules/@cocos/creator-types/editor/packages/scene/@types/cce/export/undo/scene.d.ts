import { UndoCommand, UndoManagerBase } from './base';
import { IComponent, INode, IScene } from '../../../../@types/private';
interface ISceneUndoOption {
    tag?: string;
    auto?: boolean;
    customCommand?: SceneUndoCommand;
    external?: object;
}
interface ISceneUndoManager extends UndoManagerBase {
    init(): void;
    beginRecording(uuid: string | string[], option?: ISceneUndoOption): string;
    endRecording(id: string): boolean;
    cancelRecording(id: string): boolean;
    updateDump(uuid: string[], force?: boolean): void;
    snapshot(command?: any): void;
    record(uuid?: string): void;
    abort(): void;
}
type IDump = INode | IScene | IComponent | null;
type SceneUndoCommandID = string;
/**
 * 场景的 undo 命令类型，与 SceneUndoManager 搭配使用

 */
declare class SceneUndoCommand extends UndoCommand {
    /**
     * tag: string 命令操作描述，会有默认值 `modify ${target.uuid}`
     */
    tag: string;
    id: SceneUndoCommandID;
    /**
     * @zh 是否在每帧渲染后自动结束记录，默认为true,调用后不需要再调用endRecord;自动命令会按照创建的时间来入栈
     * @en
     */
    auto: boolean;
    /**
     * @zh 自定义命令标志，默认false,会自动收集targets的数据作为undo/redo数据
     */
    custom: boolean;
    /**
     * @zh undo命令设置数据的目标，注意这里可能要用uuid，不然持有节点会导致内存泄露
     */
    uuids: string[];
    undoData: Map<string, IDump>;
    redoData: Map<string, IDump>;
    undo(): Promise<void>;
    applyData(data: Map<string, IDump>): Promise<void>;
    redo(): Promise<void>;
}
/**
 * 场景撤销还原管理类
 * 问题:
 * 1. snapshot 接口如何实现，目前想要记录，必须操作proxies，感觉写起来还是不太方便;
 * 需要nodeManager耦合起来
*/
declare class SceneUndoManager extends UndoManagerBase implements ISceneUndoManager {
    _autoCommands: SceneUndoCommand[];
    _manualCommands: SceneUndoCommand[];
    _uuidDumpMap: Record<string, IDump>;
    id: number;
    records: string[];
    init(): void;
    _createCommand(option: ISceneUndoOption): SceneUndoCommand;
    _isCommandExist(command: SceneUndoCommand): boolean;
    _recordTargetAtFrameEnd(): void;
    _setUndo(command: SceneUndoCommand, uuid: string): void;
    _setRedo(command: SceneUndoCommand, uuid: string): void;
    /**
    * undo系统开启记录target,调用后会记录当前target的属性
    * @param uuids {string | string[]} 需要记录的目标，Node 或者 component

    *@param option :ISceneUndoOption 记录undo数据的选项
    *@return SceneUndoCommand
    */
    beginRecording(uuids: string | string[], option?: ISceneUndoOption): SceneUndoCommandID;
    _removeCommand(list: SceneUndoCommand[], commandID: SceneUndoCommandID): boolean;
    /**
     * @zh 取消自动记录的命令，如果命令已经入栈，需要取出,
     *     每帧结束会自动入栈，异步使用时，可能会发生cancel时已经入栈的问题
     * @param command beginRecording返回的SceneUndoCommand
     */
    cancelRecording(id: SceneUndoCommandID): boolean;
    /**
     * 结束记录
     * @param id beginRecording返回的SceneUndoCommandID
     * @returns
     */
    endRecording(id: SceneUndoCommandID): boolean;
    reset(): void;
    _getUndoData(uuids?: string[]): Map<string, IDump>;
    _getRedoData(uuids?: string[]): Map<string, IDump>;
    updateDump(uuids?: string[], force?: boolean): void;
    undo(): Promise<UndoCommand | undefined>;
    redo(): Promise<UndoCommand | undefined>;
    /**
     * 兼容老接口，通过before-node-change更新dump数据（避免以前的一股脑对所有节点进行快照）
     * node-change时，会记录records,当用户发起snapshot时，会根据records记录变化数据。
     * records会在endRecording时清空,这里是为了避免由于兼容老街口导致的快照了冗余的数据。
     * @returns
     */
    snapshot(): false | undefined;
    abort(): void;
    record(node: string): void;
}
export { SceneUndoManager, SceneUndoCommand, SceneUndoCommandID, ISceneUndoOption, ISceneUndoManager };
//# sourceMappingURL=scene.d.ts.map