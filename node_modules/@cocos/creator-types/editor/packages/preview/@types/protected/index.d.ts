import { Platform } from '../../../builder/@types/public';
import { IDeviceItem } from '@cocos/creator-types/editor/packages/device/@types/public';

export type IPreviewType = 'game-view' | 'simulator' | 'browser';

export type ISupportDataType = 'settings' | 'renderData';

export interface IHookConfig {
    methods: string;
    hook: string;
}
export interface IGenerateSettingsOptions {
    type?: IPreviewType;
    startScene?: string;
    platform?: Platform;
}

export interface IPreviewPluginConfig {
    methods?: string;
    hooks?: Record<string, string>;
}

// 界面渲染配置
export interface IRenderData {
    title: string; // 预览页面 title
    enableDebugger: boolean; // 是否开启 vConsole
    config: { // 预览页面菜单栏配置
        device: string; // 设备名称
        // https://github.com/cocos-creator/engine/blob/3d/cocos/core/platform/debug.ts
        debugMode: string; // cc.DebugMode 枚举名称
        showFps: boolean;
        fps: number;
    }
}

export interface IPreviewSceneOptions {
    scene?: string; // 打开的场景 uuid
    immediately?: boolean; // 是否立即执行
    splashPreview?: boolean; // 插屏设置浏览器预览，等待插屏设置显示时间结束后才加载场景
    [key: string]: any;
}

export interface ICustomDeviceItem extends IDeviceItem {
    width?: number;
    height?: number;
    ratio?: number;
}
