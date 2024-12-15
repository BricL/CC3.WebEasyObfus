export interface DataItem {
    message: string;
    arguments: any[];
    callback: Function;
    stack: string;
}
/**
 * 数据存储器
 */
export declare class DataStorage {
    private _id;
    private _map;
    /**
     * 添加一个数据
     * @param data
     */
    add(data: DataItem): number;
    /**
     * 移除一个数据
     * @param id
     */
    remove(id: number | string): void;
    /**
     * 查询一个数据
     * @param id
     */
    get(id: number | string | undefined): DataItem | null;
}
export declare function encodeArgs(item: any): any;
export declare function decodeArgs(item: any): any;
export interface SendItem {
    callback: Function;
    stack: string;
    timer: any;
}
export declare enum IPCChannel {
    PreviewSend = "preview:send",
    PreviewReply = "preview:reply",
    SceneWebSend = "scene-web:send",
    SceneWebReply = "scene-web:reply",
    NativeSend = "native:send",
    NativeReply = "native:reply"
}
//# sourceMappingURL=utils.d.ts.map