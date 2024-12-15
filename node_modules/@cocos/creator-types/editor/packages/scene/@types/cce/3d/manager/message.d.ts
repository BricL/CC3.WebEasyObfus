declare class MessageManager {
    private _timerUtil;
    broadcast(name: string, ...msg: any[]): void;
    IpcSend(name: string, ...msg: any[]): void;
    broadcastChangeNodeMsg(uuid: string): void;
}
declare const messageManager: MessageManager;
export { messageManager };
//# sourceMappingURL=message.d.ts.map