/**
 * Shortcut information
 * 快捷键信息
 */
export interface IShortcutItem {
    /**
     * Shortcuts are allowed to be triggered when this condition is met
     * 当满足该条件时，快捷键允许被触发
     * @example PanelName === 'xxx'
     */
    when: string;

    /**
     * Messages sent after triggering after shortcuts
     * 快捷键后触发后发送的消息
     */
    message: string;

    /**
     * Key combinations or commands that trigger shortcuts
     * 触发快捷键的组合键或命令。
     */
    shortcut: string;

    /**
     * Plugins for defining shortcuts
     * 定义快捷方式的插件
     */
    pkgName: string;

    /**
     * Optional parameters passed to the shortcut
     * 传递给快捷键触发消息的可选参数
     */
    params?: Array<string | number | boolean>;

    /**
     * Initially define the key combination or command that triggers the shortcut key
     * 最初定义触发快捷键的组合键或命令
     */
    rawShortcut?: string;

    /**
     * Unique identification of shortcut keys
     * 快捷键的唯一标识
     */
    key: string;

    /**
     * Whether shortcuts are missing
     * 快捷键是否丢失
     */
    missing?: boolean;
}

/**
 * Dictionary for storing shortcuts
 * 存储快捷键的字典
 */
export type IShortcutItemMap = Record<string, IShortcutItem>;
