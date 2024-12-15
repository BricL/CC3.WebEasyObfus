import EventEmitter from '../../../public/EventEmitter';
import { ISceneKeyboardEvent } from '../../../../../@types/private';
export interface IShortcutInfo {
    raw: string;
    order: number;
    message: string;
    title?: string;
}
/**
 * 根据 event 对象生成对应的 key 字符串
 * @param event
 */
export declare function handleEventKey(event: KeyboardEvent): string;
export declare class Shortcut extends EventEmitter {
    /**
     * 快捷键配置
     * 左边是键盘事件 event.key.toLowerCase
     * 右边是可阅读的事件指令
     * 注意：这份配置开放给用户，需要注意：
     * ctrl alt shift 有先后顺序
     * Command 和 Control 同为 ctrl
     */
    private shortcuts;
    static wanderMap: Record<string, IShortcutInfo>;
    static snapMap: Record<string, IShortcutInfo>;
    static find(event: any): IShortcutInfo | null;
    constructor();
    init(): Promise<void>;
    onKeyDown(event: ISceneKeyboardEvent): void;
    onShortcutsChange(): Promise<void>;
    private updateShortcutMap;
}
declare const _default: Shortcut;
export default _default;
//# sourceMappingURL=index.d.ts.map