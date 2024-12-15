/// <reference types="node" />
import { EventEmitter } from 'events';
import { DataStorage } from '../../../../public/ipc/utils';
declare class WebviewIpc extends EventEmitter {
    _events: Record<string, Function>;
    private _storage;
    get storage(): DataStorage;
    /**
     * 场景进程发消息给渲染进程
     * @param message 消息名字
     * @param  args 消息参数列表
     */
    send(message: string, ...args: any[]): Promise<unknown>;
    request(message: string, ...args: any[]): Promise<any>;
}
declare const ipc: WebviewIpc;
export default ipc;
//# sourceMappingURL=webview.d.ts.map