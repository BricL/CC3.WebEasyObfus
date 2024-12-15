/// <reference types='node' />
/// <reference path='./extension.d.ts'/>

import * as NodeJSPath from 'path';
import type { FileFilter, BrowserWindow, OpenDialogReturnValue, SaveDialogReturnValue, MessageBoxReturnValue, MenuItemConstructorOptions } from 'electron';

type BaseType = string | number | boolean | undefined | null;

declare global {
    export namespace Editor {
        export namespace App {
            export const userAgent: string;
            /**
             * @zh 是否是开发模式
             * @en Is it in development mode
             */
            export const dev: boolean;
            /**
             * @zh 是否是打包后的编辑器
             * @en Is the editor packaged
             */
            export const isPackaged: boolean;
            /**
             * @zh 编辑器启动参数
             * @en Editor startup parameters
             */
            export const args: { [key: string]: string | number };
            /**
             * @zh 编辑器版本号
             * @en Editor version
             */
            export const version: string;
            /**
             * @zh 编辑器包名
             * @en App name
             */
            export const name: string;
            /**
             * @zh 主目录
             * @en Home folder
             */
            export const home: string;
            /**
             * @zh 编辑器程序文件夹
             * @en Program folder
             */
            export const path: string;
            /**
             * @zh 当前编辑器的临时缓存目录
             * @en The temporary cache directory of the current editor
             */
            export const temp: string;
            /**
             * @zh 当前编辑器 icon 地址
             * @en The current editor's icon address
             */
            export const icon: string;
            /**
             * @zh 当前编辑器使用的 url 地址
             * @en The URL address currently used by the editor
             */
            export const urls: {
                manual: string;
                api: string;
                forum: string;
            };
            /**
             * @zh 退出程序
             * @en Exit the program
             */
            export function quit(): void;
        }
        export namespace Clipboard {
            export type ICopyType = 'image' | 'text' | 'files' | string;
            /**
             * @zh 获取剪贴板内容
             * @en Retrieve Clipboard Content
             * @param type
             */
            export function read(type: ICopyType): string | number | { [key: string]: string | number | boolean | null };
            /**
             * @zh 写入剪贴板内容
             * @en Write Clipboard Content
             * @param type
             * @param value
             */
            export function write(type: 'image', value: string): boolean;
            export function write(type: 'text', value: string): boolean;
            export function write(type: 'files', value: FileList): boolean;
            export function write(type: string, value: any): boolean;

            /**
             * @zh 判断当前剪贴板内是否是指定类型
             * @en Determine if the Current Clipboard Contains a Specific Type
             * @param type
             */
            export function has(type: ICopyType): boolean;
            /**
             * @zh 清空剪贴板
             * @en Clear the Clipboard
             */
            export function clear(): void;
        }
        export namespace Dialog {

            export interface SaveDialogOptions {
                title?: string;
                path?: string;
                button?: string;
                filters?: FileFilter[];
            }
            export interface SelectDialogOptions {
                title?: string;
                path?: string;
                type?: 'directory' | 'file';
                button?: string;
                multi?: boolean;
                filters?: FileFilter[];
                extensions?: string;
            }
            export interface MessageDialogOptions {
                title?: string;
                detail?: string;
                default?: number;
                cancel?: number;
                checkboxLabel?: string;
                checkboxChecked?: boolean;
                buttons?: string[];
            }

            /**
             * @zh 选择文件弹窗
             * @en File Selection Dialog
             * @param options 选择弹窗参数 Dialog Selection Parameters
             */
            export function select(options?: SelectDialogOptions): Promise<OpenDialogReturnValue>;
            /**
             * @zh 保存文件弹窗
             * @en File save dialog parameters
             * @param options 保存文件窗口参数 Save file dialog parameters
             */
            export function save(options?: SaveDialogOptions): Promise<SaveDialogReturnValue>;
            /**
             * @zh 信息弹窗
             * @en Message dialog
             * @param message 显示的消息 Displayed message
             * @param options 信息弹窗可选参数 Optional parameters for the information popup
             */
            export function info(message: string, options?: MessageDialogOptions): Promise<MessageBoxReturnValue>;
            /**
             * @zh 警告弹窗
             * @en Warning dialog
             * @param message 警告信息 Warning message
             * @param options 警告弹窗可选参数 Optional parameters for the warning popup
             */
            export function warn(message: string, options?: MessageDialogOptions): Promise<MessageBoxReturnValue>;
            /**
             * @zh 错误弹窗
             * @en Error dialog
             * @param message 错误信息 The error message
             * @param options 错误弹窗可选参数 Optional parameters for the error popup
             */
            export function error(message: string, options?: MessageDialogOptions): Promise<MessageBoxReturnValue>;
        }
        export namespace EditMode {
            /**
             * @zh 标记编辑器进入了一种编辑模式
             * @en Indicate that the editor has entered an edit mode
             * @param mode 编辑模式的名字 The name of the edit mode
             */
            export function enter(mode: string);
            /**
             * @zh 当前所处的编辑模式
             * @en The current edit mode
             */
            export function getMode(): string;
        }
        export namespace I18n {
            export type I18nMap = {
                [key: string]: string | number;
            };
            /**
             * @zh 获取当前的语言 zh | en
             * @en Get the current language
             */
            export function getLanguage(): string;
            /**
             * @zh
             * 传入 key，翻译成当前语言
             * 允许翻译变量 {a}，传入的第二个参数 obj 内定义 a
             * @en
             * Translate into the current language using the provided key
             * Allow the translation of variables {a}, where the second parameter, obj, defines the value of `a`
             * @param key 用于翻译的 key 值 The key value for translation
             * @param obj 翻译字段内如果有 {key} 等可以在这里传入替换字段 If you have {key} in the translation field, you can pass in the replacement field here
             */
            export function t(key: string, obj?: I18nMap): string;
            /**
             * @zh 选择一种翻译语言
             * @en Choose a translation language
             * @param language 选择当前使用的语言 Select the currently used language
             */
            export function select(language: string): void;
        }
        export namespace Layout {
            interface ILayoutItem {
                'min-width': number;
                'min-height': number;
                direction: 'row' | 'column' | 'none';
                percent: number;
                minimize: boolean;
                children?: ILayoutItem[];
                active?: string;
                panels?: string[];
            }

            export interface ILayout {
                version: 1;
                layout: ILayoutItem;
            }
            /**
             * @zh 应用布局信息
             * @en Apply layout information
             * @param json 布局文件内容 Layout file content
             */
            export function apply(json: ILayout);
            /**
             * @zh 查询当前的布局信息，返回一个布局 json 对象
             * @en Query the current layout information and return a layout JSON object
             * @param name 
             */
            export function query(name?: string): Promise<ILayout>;
        }
        export namespace Logger {
            interface ILogInfo {
                process?: 'browser' | 'renderer',
                type: 'log' | 'info' | 'warn' | 'error',
                message: string,
                stack: string,
                time: number,
            }
            /**
             * @zh 清空所有的日志
             * @en Clear all logs
             */
            export function clear(regexp?: RegExp): void;
            /**
             * @zh 查询所有日志
             * @en Query all logs
             */
            export function query(): ILogInfo[];
        }
        export namespace Menu {
            export interface BaseMenuItem {
                /**
                 * @zh 菜单类型
                 * @en Type of Menu
                 */
                type?: 'normal' | 'separator' | 'submenu' | 'checkbox' | 'radio';
                /**
                 * @zh 菜单项的名字
                 * @en Name of the Menu Item
                 */
                label?: string;
                /**
                 * @zh 菜单附加说明
                 * @en Additional Menu Description
                 */
                sublabel?: string;
                /**
                 * @zh 是否显示
                 * @en Visibility
                 */
                visible?: boolean;
                /**
                 * @zh 
                 * checkbox 或 radio 类型菜单项指定是否选中
                 * 如果为 false，该菜单项将会置灰且不可点击
                 * @en
                 * For checkbox or radio type menu items, specify whether they are selected
                 * If set to false, the menu item will be grayed out and uncheckable
                 */
                checked?: boolean;
                /**
                 * @zh 如果为 false，该菜单项将会置灰且不可点击
                 * @en If set to false, the menu item will be grayed out and disabled
                 */
                enabled?: boolean;
                /**
                 * @zh 一个图标的绝对路径
                 * @en Absolute path to an icon
                 */
                icon?: string;
                /**
                 * @zh 显示在按钮上的快捷键，只负责显示
                 * @en Keyboard shortcut displayed on the button, for display purposes only
                 */
                accelerator?: string;
                /**
                 * @zh 排序，数字越小越靠前
                 * @en Order: The smaller the number, the closer to the front
                 */
                order?: number;
                /**
                 * @zh 菜单属于哪一个分组
                 * @en Group to which the menu belongs
                 */
                group?: string;

                /**
                 * @zh 菜单点击后发送哪一个消息
                 * @en Message to be sent when the menu is clicked
                 */
                message?: string | Message.MessageInfo;
                /**
                 * @zh 发送消息指定发送到某个插件
                 * @en Specify which plugin to send the message to
                 */
                target?: string;
                /**
                 * @zh 消息附带的参数
                 * @en Parameters to be sent with the message
                 */
                params?: (string | number | boolean | { [key: string]: string | number | boolean })[];
                /**
                 * @zh 按钮点击后的事件，定义后 message 将失效
                 * @en Event to be triggered when the button is clicked; defining this will override the 'message' property
                 */
                click?: Function | null;
                /**
                 * @zh 菜单项的行为，定义 click 属性后此属性将被忽略
                 * @en The behavior of the menu item. If the 'click' property is defined, this property will be ignored
                 */
                role?: MenuItemConstructorOptions['role'];
                /**
                 * @zh 子菜单
                 * @en Sub Menu
                 */
                submenu?: MenuTemplateItem[];
            }
            export interface MainMenuItem extends BaseMenuItem {
                path: string;
            }
            export interface ContextMenuItem extends BaseMenuItem {
                accelerator?: string;
                // 菜单点击后发送哪一个消息，与 click 二选一，同时存在只响应 click 函数
                message?: Message.MessageInfo;
                submenu?: ContextMenuItem[];
            }
            export type MenuTemplateItem = BaseMenuItem;
            export interface PopupOptions {
                x?: number;
                y?: number;
                menu: ContextMenuItem[];
            }
            /**
             * @zh
             * 右键弹窗
             * 只有面板进程可以使用
             * @en
             * Context menu
             * can only be used by the panel process
             * @param json
             */
            export function popup(json: PopupOptions): void;
        }
        export namespace Message {
            export interface MessageConfig {
                methods: string[];
                public?: boolean;
                description?: string;
                doc?: string;
                sync?: boolean;
            }

            export interface MessageInfo {
                target: string;
                name: string;
                type?: 'send' | 'request',
                params?: (string | number | boolean | object)[];
            }
            export interface TableBase {
                [x: string]: any;
                params: (string | number | boolean | { [key: string]: string | number | boolean })[];
            }
            /**
             * @zh 发送一个消息，并等待返回
             * @en Send a message and wait for a response
             * @param name 目标插件的名字 The name of the target plugin
             * @param message 触发消息的名字 The name of the triggered message
             * @param args 消息需要的参数 The parameters required by the message
             */
            export function request<J extends string, K extends keyof EditorMessageMaps[J]>(
                name: J,
                message: K,
                ...args: EditorMessageMaps[J][K]['params']
            ): Promise<EditorMessageMaps[J][K]['result']>;
            /**
             * @zh 发送一个消息，没有返回
             * @en Send a message without expecting a return
             * @param name 目标插件的名字 The name of the target plugin
             * @param message 触发消息的名字 The name of the triggered message
             * @param args 消息需要的参数 The parameters required by the message
             */
            export function send<M extends string, N extends keyof EditorMessageMaps[M]>(
                name: M,
                message: N,
                ...args: EditorMessageMaps[M][N]['params']
            ): void;
            /**
             * @zh 广播一个消息
             * @en Broadcast a message
             * @param message 触发消息的名字 The name of the triggered message
             * @param args 消息需要的参数 The parameters required by the message
             */
            export function broadcast(message: string, ...args: (string | number | boolean | undefined | null | { [key: string]: any } | (string | number | boolean)[])[]): void;
        }
        export namespace Network {
            export type RequestData = string | number | {
                [index: string]: string | number | (string | number)[];
            }
            /**
             * @zh 查询当前电脑的 ip 列表
             * @en Retrieve the list of IP addresses on the current computer
             */
            export function queryIPList(): string[];
            /**
             * @zh 检查一个端口是否被占用
             * @en Check if a port is in use
             * @param port
             */
            export function portIsOccupied(port: number): Promise<boolean>;
            /**
             * @zh 测试是否可以联通某一台主机
             * @en Test if you can reach a specific host
             * @param ip
             */
            export function testHost(ip: string): Promise<boolean>;
            /**
             * @zh GET 方式请求某个服务器数据
             * @en Make a GET request to retrieve data from a server
             * @param url
             * @param data
             */
            export function get(
                url: string,
                data?: RequestData,
            ): Promise<Buffer>;
            /**
             * @zh POST 方式请求某个服务器数据
             * @en Make a POST request to retrieve data from a server
             * @param url
             * @param data
             */
            export function post(
                url: string,
                data?: RequestData,
            ): Promise<Buffer>;
            /**
             * @zh 获取某个可用的端口号
             * @en Retrieve an available port number
             * @param port
             */
            export function getFreePort(port: number): Promise<number>;
        }
        export namespace Package {
            /**
             * @deprecated Please use Editor.Interface.PackageInfo instead
             */
            export interface IGetPackageOptions {
                name?: string;
                debug?: boolean;
                path?: string;
                enable?: boolean;
                invalid?: boolean;
            }
            /**
             * @deprecated Please use Editor.Interface.PackageJson instead
             */
            export interface PackageJson {
                name: string;
                version: string;
                author?: string;
                description?: string;
                main?: string;
                windows?: string;
                debug?: boolean;
                panels?: any;
                editor?: string;
            }
            export type PathType = 'home' | 'data' | 'temp';
            /**
             * @zh 查询插件列表
             * @en Query the list of plugins
             * @param options
             */
            export function getPackages(options?: IGetPackageOptions): Editor.Interface.PackageInfo[];
            /**
             * @zh 注册一个插件
             * @en Register a plugin
             * @param path
             */
            export function register(path: string): void;
            /**
             * @zh 反注册一个插件
             * @en Unregister a plugin
             * @param path
             */
            export function unregister(path: string): void;
            /**
             * @zh 启动一个插件
             * @en Start a plugin
             * @param path
             */
            export function enable(path: string): void;
            /**
             * @zh 关闭一个插件
             * @en Disable a plugin
             * @param path
             */
            export function disable(path: string, options?: { replacement?: boolean }): void;
            /**
             * @zh 获取一个插件的几个预制目录地址
             * @en Get the preset directory addresses for a plugin
             * @param extensionName 扩展的名字 Name of the plugin
             * @param type 地址类型（temp 临时目录，data 需要同步的数据目录,不传则返回现在打开的插件路径） Address type (temp temporary directory, data need to synchronize data directory, do not pass to return the current open plug-in path)
             */
            export function getPath(extensionName: string): string | undefined;
        }
        export namespace Panel {
            export type Selector<$> = { $: Record<keyof $, HTMLElement | null> };
            export type Options<S, M, U extends (...args: any[]) => void> = {
                /**
                 * @zh 监听面板事件
                 * @en Listen for panel events
                 */
                listeners?: {
                    /**
                     * @zh 面板显示的时候触发的钩子
                     * @en Hook triggered when the panel is displayed
                     */
                    show?: () => void;
                    /**
                     * @zh 面板隐藏的时候触发的钩子
                     * @en Hook triggered when the panel is hidden
                     */
                    hide?: () => void;
                };

                /**
                 * @zh 面板的内容
                 * @en Template of the panel
                 */
                template: string;
                /**
                 * @zh 面板上的样式
                 * @en Style of the panel
                 * */
                style?: string;
                /**
                 * @zh 快捷选择器
                 * @en Selector of the panel
                 */
                $?: S;
                /**
                 * @zh panel 内置的函数方法，可以在 messages、listeners、生命周期函数内调用
                 * @en Panel built-in function methods that can be called in Messages, Listeners, lifecycle functions
                 */
                methods?: M;
                /**
                 * @zh 面板数据更新后触发的钩子函数
                 * @en Hooks triggered when the panel is update
                 */
                update?: (...args: Parameters<U>) => void;
                /**
                 * @zh 面板启动后触发的钩子函数
                 * @en Hooks triggered when the panel is ready
                 */
                ready?: () => void;
                /**
                 * @zh
                 * 面板准备关闭的时候会触发的函数，return false 的话，会终止关闭面板
                 * 生命周期函数，在 panel 准备关闭的时候触发
                 * 如果 return false，则会中断关闭流程,请谨慎使用，错误的判断会导致编辑器无法关闭。
                 * @en
                 * The function that will be triggered when the panel is ready to close, and will terminate the closing of the panel if it
                 * returns false
                 */
                beforeClose?: () => Promise<boolean | void> | boolean | void;
                /**
                 * @zh 面板关闭后的钩子函数
                 * @en Hook functions after panel closure
                 */
                close?: () => void;
            } & ThisType<Selector<S> & M>; // merge them together
            /**
             * @zh 打开一个面板
             * @en Open a panel
             * @param name
             * @param args
             */
            export function open(name: string, ...args: (BaseType | { [key: string]: any })[]): Promise<boolean>;
            /**
             * @zh 在某个面板旁边打开一个面板
             * @en Open a panel next to another panel
             * @param besidePanel
             * @param name
             * @param args
             */
            export function openBeside(besidePanel: string, name: string, ...args: (BaseType | { [key: string]: any })[]): Promise<boolean>;
            /**
             * @zh 关闭一个面板
             * @en Close a panel
             * @param name
             */
            export function close(name: string): Promise<boolean>;
            /**
             * @zh 将焦点传递给一个面板
             * @en Pass focus to a panel
             * @param name
             */
            export function focus(name: string): Promise<boolean>;
            /**
             * @zh 检查面板是否已经打开
             * @en Check that the panel is open
             * @param name
             */
            export function has(name: string): Promise<boolean>;
            /**
             * @zh 查询当前窗口里某个面板里的元素列表
             * @en Retrieve a list of elements within a panel in the current window
             * @param name
             * @param selector
             */
            export function querySelector(name: string, selector: string): Promise<HTMLElement[][] | void>;
            /**
             * @zh 定义一个面板对象，主要是处理类型定义，并没有实际执行逻辑
             * @en Define a panel object primarily for type definitions, without actual execution logic
             * @param options 
             */
            export function define<U extends (...args: any[]) => void, Selector = Record<string, string>, M = Record<string, Function>>(
                options: Options<Selector, M, U>,
            ): any;
        }
        export namespace Profile {
            export type PreferencesProtocol = 'default' | 'global' | 'local';
            export type ProjectProtocol = 'default' | 'project';
            export type TempProtocol = 'temp';
            export type ProfileValueType = string | boolean | number | { [key: string]: any } | (string | boolean | number)[];
            export interface ProfileGetOptions {
                type: 'deep' | 'current' | 'inherit';
            }
            export interface ProfileObj {
                get: (key?: string, options?: ProfileGetOptions) => void;
                set: (key?: string, value?: any) => void;
                remove: (key: string) => void;
                save: () => void;
                clear: () => void;
                reset: () => void;
            }
            /**
             * @zh 读取插件配置
             * @en Read plugin configuration
             * @param name 插件名 The plugin name
             * @param key 配置路径 Configure path
             * @param type 配置的类型，选填 Type of configuration, optional(global,local,default)
             */
            export function getConfig(name: string, key?: string, type?: PreferencesProtocol): Promise<any>;
            /**
             * @zh 设置插件配置
             * @en Set plugin configuration
             * @param name 插件名 The plugin name
             * @param key 配置路径 Configure path
             * @param value 配置的值 The value of the configuration
             * @param type 配置的类型，选填 Type of configuration, optional(global,local,default)
             */
            export function setConfig(name: string, key: string, value: Editor.Profile.ProfileValueType, type?: PreferencesProtocol): Promise<void>;
            /**
             * @zh 删除某个插件配置
             * @en Delete a plugin configuration
             * @param name 插件名 The plugin name
             * @param key 配置路径 Configure path
             * @param type 配置的类型，选填 Type of configuration, optional(global,local,default)
             */
            export function removeConfig(name: string, key: string, type?: PreferencesProtocol): Promise<void>;
            /**
             * @zh 读取插件内的项目配置
             * @en Read project configuration from the plugin
             * @param name 插件名 The plugin name
             * @param key 配置路径 Configure path
             * @param type 配置的类型，选填 Type of configuration, optional(project,default)
             */
            export function getProject(name: string, key?: string, type?: ProjectProtocol): Promise<any>;
            /**
             * @zh 设置插件内的项目配置
             * @en Set project configuration within the plugin
             * @param name 插件名 The plugin name
             * @param key 配置路径 Configure path
             * @param value 配置的值 The value of the configuration
             * @param type 配置的类型，选填 Type of configuration, optional(project,default)
             */
            export function setProject(name: string, key: string, value: Editor.Profile.ProfileValueType, type?: ProjectProtocol): Promise<void>;
            /**
             * @zh 删除插件内的项目配置
             * @en Delete project configuration within the plugin
             * @param name 插件名 The plugin name
             * @param key 配置路径 Configure path
             * @param type 配置的类型，选填 Type of configuration, optional(project,default)
             */
            export function removeProject(name: string, key: string, type?: ProjectProtocol): Promise<void>;
            /**
             * @zh 读取插件临时配置
             * @en Read temporary plugin configuration
             * @param name 插件名 The plugin name
             * @param key 配置路径 Configure path
             */
            export function getTemp(name: string, key?: string): Promise<any>;
            /**
             * @zh 设置插件临时配置
             * @en Set temporary plugin configuration
             * @param name 插件名 The plugin name
             * @param key 配置路径 Configure path
             * @param value 配置的值 The value of the configuration
             */
            export function setTemp(name: string, key: string, value: Editor.Profile.ProfileValueType): Promise<void>;
            /**
             * @zh 删除某个插件的临时配置
             * @en Delete temporary configuration for a specific plugin
             * @param name 插件名 The plugin name
             * @param key 配置路径 Configure path
             */
            export function removeTemp(name: string, key: string): Promise<void>;
        }
        export namespace Project {
            /**
             * @zh 当前项目路径
             * @en Current project path
             */
            export const path: string;
            /**
             * @zh 当前项目 uuid
             * @en The current project UUID
             */
            export const uuid: string;
            /**
             * @zh 当前项目名称(取自 package.json)
             * @en The current project name
             */
            export const name: string;
            /**
             * @zh 当前项目临时文件夹
             * @en Temporary folder for current project
             */
            export const tmpDir: string;
        }
        export namespace Selection {
            /**
             * @zh 选中一个或者一组元素
             * @en Select one or a group of elements
             * @param type
             * @param uuid
             */
            export function select(type: string, uuid: string | string[]): void;
            /**
             * @zh 取消一个或者一组元素的选中状态
             * @en Deselect one or a group of elements
             * @param type
             * @param uuid
             */
            export function unselect(type: string, uuid: string | string[]): void;
            /**
             * @zh 清空一个类型的所有选中元素
             * @en Clear all selected elements of a certain type
             * @param type
             */
            export function clear(type: string): void;
            /**
             * @zh 更新当前选中的类型数据
             * @en Update the currently selected type data
             * @param type
             * @param uuids
             */
            export function update(type: string, uuids: string[]): void;
            /**
             * @zh
             * 悬停触碰了某个元素
             * 会发出 selection:hover 的广播消息
             * @en
             * Hovering over an element will broadcast the 'selection:hover' message
             * @param type
             * @param uuid
             */
            export function hover(type: string, uuid?: string): void;
            /**
             * @zh 获取最后选中的元素的类型
             * @en Get the type of the last selected element
             */
            export function getLastSelectedType(): string;
            /**
             * @zh 获取某个类型内，最后选中的元素
             * @en Get the last selected element within a specific type
             * @param type
             */
            export function getLastSelected(type: string): string;
            /**
             * @zh 获取一个类型选中的所有元素数组
             * @en Get an array of all selected elements within a type
             * @param type
             */
            export function getSelected(type: string): string[];
        }
        export namespace Task {
            export interface NoticeButtonOptions {
                label: string;
                message: Message.MessageInfo;
            }
            export interface NoticeOptions {
                /**
                 * @zh 通知标题
                 * @en Notification Title
                 */
                title: string;
                /**
                 * @zh 通知内容
                 * @en Notification Content
                 */
                message?: string;
                /**
                 * @zh 消息类型
                 * @en Notification Type
                 */
                type?: 'error' | 'warn' | 'log' | 'success';
                /**
                 * @zh 来源，会展示在通知上，用于表示从哪个插件发出的通知
                 * @en "Source" will be displayed on the notification to indicate which plugin the notification is from
                 */
                source?: string;
                /**
                 * @zh 提示上的按钮，能够触发一个插件上的消息
                 * @en Buttons on the notification that can trigger a message on a plugin
                 */
                buttons?: NoticeButtonOptions[];
                /**
                 * @zh 显示时间，默认不自动消失
                 * @en The time for display, by default, it does not auto-dismiss
                 */
                timeout?: number;
            }

            export interface NoticeInfo extends NoticeOptions {
                id: number;
                timer?: NodeJS.Timeout;
            }
            /**
             * @zh 添加一个通知
             * @en Add a notification
             * @param options 消息配置 Message configuration
             * @return id 当前 notice ID，可用于查找移除
             */
            export function addNotice(options: NoticeOptions): number;
            /**
             * @zh 删除一个通知
             * @en Remove a notification
             * @param id 通知 id Notification ID
             */
            export function removeNotice(id: number): void;
            /**
             * @zh 修改通知自动移除的时间
             * @en Change the auto-dismiss time for notifications
             * @param id 通知 id Notification ID
             * @param time 超时时间 timeout
             */
            export function changeNoticeTimeout(id: number, time: number): void;
            /**
             * @zh 查询所有通知
             * @en Query all notifications
             */
            export function queryNotices(): NoticeInfo[];
            /**
             * @zh 查询指定通知
             * @en Query notification
             */
            export function queryNotice(id: number): NoticeInfo;
        }
        export namespace Theme {
            /**
             * @zh 获取所有主题的名字
             * @en Get the names of all themes
             */
            export function getList(): string[];
            /**
             * @zh 使用某个皮肤
             * @en Apply a specific skin
             * @param name
             */
            export function use(name?: string): void;
        }
        export namespace UI {
            /**
             * @zh
             * 在当前页面上注册一个自定义节点
             * 谨慎使用，之后会被移除
             * @en
             * Register a custom node on the current page
             * Use with caution, as it will be removed later
             * @param tagName 元素名字
             * @param element 元素的定义函数
             */
            export function register(tagName: string, element: CustomElementConstructor): void;
        }
        export namespace User {
            export interface UserData {
                session_id: string;
                session_key: string;
                cocos_uid: string;
                email: string;
                nickname: string;
            }
            export interface UserTokenData {
                access_token: string;
                cocos_uid: number;
                expires_in: number;
            }
            /**
             * @zh 获取用户数据
             * @en Retrieve user data
             */
            export function getData(): Promise<UserData>;
            /**
             * @zh 检查用户是否登陆
             * @en Check if the user is logged in
             */
            export function isLoggedIn(): Promise<boolean>;
            /**
             * @zh
             * 用户登陆
             * 失败会抛出异常
             * @en
             * User login
             * Failure will throw an exception
             * @param username
             * @param password
             */
            export function login(username: string, password: string): Promise<UserData>;
            /**
             * @zh
             * 退出登陆
             * 失败会抛出异常
             * @en
             * Logout
             * Failure will throw an exception
             */
            export function logout(): void;
            /**
             * @zh
             * 获取用户 token
             * 失败会抛出异常
             * @en
             * Get user token
             * Failure will throw an exception
             */
            export function getUserToken(): Promise<UserTokenData>;
            /**
             * @zh 根据插件 id 返回 session code
             * @en Return the session code based on the plugin ID
             * @param extensionId
             */
            export function getSessionCode(extensionId: number): Promise<string>;
            /**
             * 显示用户登陆遮罩层
             * Shows user login mask layer
             * 谨慎使用，之后会被移除
             * Use with caution and it will be removed later
             */
            export function showMask(): void;
            /**
             * 隐藏用户登陆遮罩层
             * Hide user login mask layer
             * 谨慎使用，之后会被移除
             * Use with caution and it will be removed later
             */
            export function hideMask(): void;
            /**
             * 监听事件
             * Listen for an event
             * 谨慎使用，之后会被移除
             * Use with caution and it will be removed later
             * @param action
             * @param handle
             */
            export function on(action: string, handle: Function): void;
            /**
             * 监听一次事件
             * Listening for one event
             * 谨慎使用，之后会被移除
             * Use with caution and it will be removed later
             * @param action
             * @param handle
             */
            export function once(action: string, handle: Function): void;
            /**
             * 取消已经监听的事件
             * Cancels the event you are listening for
             * 谨慎使用，之后会被移除
             * Use with caution and it will be removed later
             * @param action
             * @param handle
             */
            export function removeListener(action: string, handle: Function): void;
        }
        export namespace Utils {
            // export namespace File {
            //     /**
            //      * 初始化一个可用的文件名
            //      * Initializes a available filename
            //      * 返回可用名称的文件路径
            //      * Returns the file path with the available name
            //      *
            //      * @param file 初始文件路径 Initial file path
            //      */
            //     export function getName(file: string): string;
            //     interface UnzipOptions {
            //         peel?: boolean;
            //     }
            //     /**
            //      * 解压文件夹
            //      * Unzip folder
            //      *
            //      * @param zip
            //      * @param target
            //      * @param options
            //      */
            //     export function unzip(zip: string, target: string, options?: UnzipOptions): Promise<void>;
            //     /**
            //      * 复制一个文件到另一个位置
            //      * Copy a file to another location
            //      *
            //      * @param source
            //      * @param target
            //      */
            //     export function copy(source: string, target: string): void;

            //     export function trashItem(path: string): Promise<void>;
            // }
            // export namespace Path {
            //     /**
            //      * 返回一个不含扩展名的文件名
            //      * @param path
            //      */
            //     export function basenameNoExt(path: string): string;
            //     /**
            //      * 将 \ 统一换成 /
            //      * @param path
            //      */
            //     export function slash(path: string): string;
            //     /**
            //      * 去除路径最后的斜杆，返回一个不带斜杆的路径
            //      * @param path
            //      */
            //     export function stripSep(path: string): string;
            //     /**
            //      * 删除一个路径的扩展名
            //      * @param path
            //      */
            //     export function stripExt(path: string): string;
            //     /**
            //      * 判断路径 pathA 是否包含 pathB
            //      * pathA = foo/bar,         pathB = foo/bar/foobar, return true
            //      * pathA = foo/bar,         pathB = foo/bar,        return true
            //      * pathA = foo/bar/foobar,  pathB = foo/bar,        return false
            //      * pathA = foo/bar/foobar,  pathB = foobar/bar/foo, return false
            //      * @param pathA
            //      * @param pathB
            //      */
            //     export function contains(pathA: string, pathB: string): boolean;
            //     /**
            //      * 格式化路径
            //      * 如果是 Windows 平台，需要将盘符转成小写进行判断
            //      * @param path
            //      */
            //     export function normalize(path: string): string;
            //     export const join: typeof NodeJSPath.join;
            //     export const resolve: typeof NodeJSPath.resolve;
            //     export const isAbsolute: typeof NodeJSPath.isAbsolute;
            //     export const relative: typeof NodeJSPath.relative;
            //     export const dirname: typeof NodeJSPath.dirname;
            //     export const basename: typeof NodeJSPath.basename;
            //     export const extname: typeof NodeJSPath.extname;
            //     export const sep: '\\' | '/';
            //     export const delimiter: ';' | ':';
            //     export const parse: typeof NodeJSPath.parse;
            //     export const format: typeof NodeJSPath.format;
            // }
            // export namespace Math {
            //     /**
            //      * 取给定边界范围的值
            //      * Take the value of the given boundary range
            //      * @param {number} val
            //      * @param {number} min
            //      * @param {number} max
            //      */
            //     export function clamp(val: number, min: number, max: number): number;
            //     /**
            //      * @function clamp01
            //      * @param {number} val
            //      * @returns {number}
            //      *
            //      * Clamps a value between 0 and 1.
            //      */
            //     export function clamp01(val: number): number;
            //     /**
            //      * 加法函数
            //      * 入参：函数内部转化时会先转字符串再转数值，因而传入字符串或 number 均可
            //      * 返回值：arg1 加上 arg2 的精确结果
            //      * @param {number|string} arg1
            //      * @param {number|string} arg2
            //      */
            //     export function add(arg1: number | string, arg2: number | string): number;
            //     /**
            //      * 减法函数
            //      * 入参：函数内部转化时会先转字符串再转数值，因而传入字符串或number均可
            //      * 返回值：arg1 减 arg2的精确结果
            //      * @param {number|string} arg1
            //      * @param {number|string} arg2
            //      */
            //     export function sub(arg1: number | string, arg2: number | string): number;
            //     /**
            //      * 乘法函数
            //      * 入参：函数内部转化时会先转字符串再转数值，因而传入字符串或 number 均可
            //      * 返回值：arg1 乘 arg2 的精确结果
            //      * @param {number} arg1
            //      * @param {number} arg2
            //      */
            //     export function multi(arg1: number, arg2: number): number;
            //     /**
            //      * 除法函数
            //      * 入参：函数内部转化时会先转字符串再转数值，因而传入字符串或 number 均可
            //      * 返回值：arg1 除 arg2 的精确结果
            //      * @param {number} arg1
            //      * @param {number} arg2
            //      */
            //     export function divide(arg1: number, arg2: number): number;
            //     /**
            //      * 保留小数点
            //      * @param val
            //      * @param num
            //      */
            //     export function toFixed(val: number, num: number): number;
            // }
            // export namespace Parse {
            //     interface WhenParam {
            //         PanelName?: string;
            //         EditMode?: string;
            //         ProjectType?: string;
            //     }
            //     /**
            //      * 解析 when 参数
            //      * when 的格式：
            //      *     PanelName === '' && EditMode === ''
            //      * 整理后的数据格式：
            //      *     {
            //      *         PanelName: '',
            //      *         EditMode: '',
            //      *     }
            //      */
            //     export function when(when: string): WhenParam;
            //     /**
            //      * 判断一个 when 数据是否符合当前条件
            //      * @param when
            //      */
            //     export function checkWhen(when: string): boolean;
            // }
            // export namespace Url {
            //     /**
            //      * 快捷获取文档路径
            //      * @param relativeUrl
            //      * @param type
            //      */
            //     export function getDocUrl(relativeUrl: string, type?: 'manual' | 'api'): string;
            // }

            // export namespace UUID {
            //     /**
            //      * 压缩 UUID
            //      * compress UUID
            //      * @param uuid
            //      * @param min
            //      */
            //     export function compressUUID(uuid: string, min: boolean): string;
            //     /**
            //      * 解压 UUID
            //      * decompress the UUID
            //      * @param str
            //      */
            //     export function decompressUUID(str: string): string;
            //     /**
            //      * 检查输入字符串是否是 UUID
            //      * Check whether the input string is a UUID
            //      * @param str
            //      */
            //     export function isUUID(str: string): string;
            //     /**
            //      * 生成一个新的 uuid
            //      * compress 是否压缩，默认 true
            //      */
            //     export function generate(compress?: boolean): string;
            //     /**
            //      * 从路径中提取 UUID
            //      * ".../5b/5b9cbc23-76b3-41ff-9953-4219fdbea72c/Fontin-SmallCaps.ttf" -> "5b9cbc23-76b3-41ff-9953-4219fdbea72c"
            //      */
            //     export function getUuidFromLibPath(path: string): string;
            //     /**
            //      * 获取子资源的短 uuid
            //      * @param name 
            //      */
            //     export function nameToSubId(name: string): string;
            // }

            // export namespace Process {
            //     export enum LogLevel {
            //         LOG,
            //         WARN,
            //         ERROR,
            //         NULL,
            //     }
            //     export interface IQuickSpawnOption {
            //         cwd?: string;
            //         env?: any;
            //         // 输出等级，默认 = 0，即 log 级别以上都打印
            //         logLevel?: LogLevel;

            //         downGradeWaring?: boolean; // 警告将会转为 log 打印，默认为 false
            //         downGradeLog?: boolean; // log 将会转为 debug 打印，默认为 true
            //         downGradeError?: boolean; // 错误将会转为警告打印，默认为 false

            //         onlyPrintWhenError?: boolean; // 默认为 true, 日志都正常收集，但仅在发生错误时打印信息，其他时候静默处理

            //         prefix?: string; // 日志输出前缀
            //     }
            //     /**
            //      * 快速开启子进程，无需再自行监听输出，将会返回一个标记完成的 promise 对象
            //      * @param command 命令
            //      * @param cmdParams 参数数组
            //      * @param options 可选，开启的一些参数配置
            //      */
            //     export function quickSpawn(command: string, cmdParams: string[], options?: IQuickSpawnOption):Promise<boolean>;
        }
        export namespace Utils { }
        export namespace Module {
            /**
             * @zh 导入一个项目模块
             * @en Import a project module
             * @param url 项目模块的 URL URL of the project module
             * @experimental 实验性质 experimental
             */
            export function importProjectModule(url: string): Promise<unknown>;
        }
        export namespace Windows {
            /**
             * @zh 使用一个 layout 配置打开一个新窗口
             * @en Open a new window using a layout configuration
             * @param layout 
             * @param rect 
             */
            export function open(layout: Editor.Layout.ILayout, rect: { x: number, y: number, width: number, height: number }): void;
        }
    }
}
