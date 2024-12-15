interface MessageDialogOptions {
    title?: string;
    detail?: string;
    default?: number;
    cancel?: number;
    buttons?: string[];
}
export default class Dialog {
    /**
     * 信息弹窗
     * @param message 显示的消息
     * @param options 信息弹窗可选参数
     * @param window 依附于哪个窗口（插件主进程才可使用）
     */
    info(message: string, options?: MessageDialogOptions): Promise<unknown>;
    /**
     * 警告弹窗
     * @param message 警告信息
     * @param options 警告弹窗可选参数
     * @param window 依附于哪个窗口（插件主进程才可使用）
     */
    warn(message: string, options?: MessageDialogOptions): Promise<unknown>;
    /**
     * 错误弹窗
     * @param message 错误信息
     * @param options 错误弹窗可选参数
     * @param window 依附于哪个窗口（插件主进程才可使用）
     */
    error(message: string, options?: MessageDialogOptions): Promise<unknown>;
}
export {};
//# sourceMappingURL=dialog.d.ts.map