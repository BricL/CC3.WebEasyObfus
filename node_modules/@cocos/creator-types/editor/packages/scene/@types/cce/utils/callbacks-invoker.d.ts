declare class CallbackInfo {
    callback: Function;
    target: Object | undefined;
    once: boolean;
    off: Function | undefined;
    set(callback: Function, target?: Object, once?: boolean, off?: Function): void;
}
declare class CallbackList {
    callbackInfos: Array<CallbackInfo | null>;
    isInvoking: boolean;
    containCanceled: boolean;
    /**
     * @zh
     * 从列表中移除与指定目标相同回调函数的事件。
     * @param cb - 指定回调函数
     */
    removeByCallback(cb: Function): void;
    /**
     * @zh
     * 从列表中移除与指定目标相同调用者的事件。
     * @param target - 指定调用者
     */
    removeByTarget(target: Object): void;
    /**
     * @zh
     * 移除指定编号事件。
     *
     * @param index - 指定编号。
     */
    cancel(index: number): void;
    /**
     * @zh
     * 注销所有事件。
     */
    cancelAll(): void;
    purgeCanceled(): void;
    clear(): void;
}
interface ICallbackTable {
    [x: string]: CallbackList | undefined;
}
/**
 * @zh
 * CallbacksInvoker 用来根据 Key 管理事件监听器列表并调用回调方法。
 * @class CallbacksInvoker
 */
export declare class CallbacksInvoker {
    protected _callbackTable: ICallbackTable;
    /**
     * @zh
     * 事件添加管理
     * @param key - 一个监听事件类型的字符串。
     * @param callback - 事件分派时将被调用的回调函数。
     * @param arget - 调用回调的目标。可以为空。
     * @param once - 是否只调用一次。
     */
    on(key: string, callback: Function, target?: Object, once?: boolean): void;
    /**
     * @zh
     * 检查指定事件是否已注册回调。
     *
     * @param key - 一个监听事件类型的字符串。
     * @param callback - 事件分派时将被调用的回调函数。
     * @param target - 调用回调的目标。
     * @return - 指定事件是否已注册回调。
     */
    hasEventListener(key: string, callback?: Function, target?: Object): boolean;
    /**
     * @zh
     * 移除在特定事件类型中注册的所有回调或在某个目标中注册的所有回调。
     *
     * @param keyOrTarget - 要删除的事件键或要删除的目标。
     */
    removeAll(keyOrTarget: string | Object): void;
    removeAllListeners(): void;
    /**
     * @zh
     * 删除之前与同类型，回调，目标注册的回调。
     *
     * @param key - 一个监听事件类型的字符串。
     * @param callback - 移除指定注册回调。如果没有给，则删除全部同事件类型的监听。
     * @param target - 调用回调的目标。
     */
    off(key: string, callback?: Function, target?: Object): void;
    /**
     * @zh
     * 事件派发
     *
     * @param key - 一个监听事件类型的字符串
     * @param p1 - 派发的第一个参数。
     * @param p2 - 派发的第二个参数。
     * @param p3 - 派发的第三个参数。
     * @param p4 - 派发的第四个参数。
     * @param p5 - 派发的第五个参数。
     */
    emit(key: string, ...args: any[]): void;
}
export {};
//# sourceMappingURL=callbacks-invoker.d.ts.map