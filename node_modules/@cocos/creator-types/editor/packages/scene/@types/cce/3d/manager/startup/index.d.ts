import type { EngineInfo } from '../../../../../../engine/@types';
import type { IGameConfig } from 'cc';
export interface InitInfo extends EngineInfo {
    project: string;
    renderPipeline?: string;
    overrideSettings?: Partial<IGameConfig['overrideSettings']>;
}
declare class StartupManager {
    requireEngine(): Promise<void>;
    configEngine(info: Partial<InitInfo>, renderPipeline: string, layers: {
        name: string;
        value: number;
    }[], sortingLayers: {
        id: number;
        name: string;
        value: number;
    }[]): Promise<void>;
    /**
     * 启动引擎
     */
    initEngine(info: InitInfo, renderPipeline: string, layers: {
        name: string;
        value: number;
    }[], sortingLayers: {
        id: number;
        name: string;
        value: number;
    }[]): Promise<void>;
    /**
     * 设置设计分辨率
     * @param {*} width
     * @param {*} height
     */
    initDesignResolution(width: number, height: number): Promise<void>;
    /**
     * 设置自定义层
     * @param {*} layers
     */
    initCustomLayer(layers: {
        name: string;
        value: number;
    }[]): Promise<void>;
    /**
     * 设置自定义 sorting-layer
     */
    initSortingLayer(layers: {
        id: number;
        name: string;
        value: number;
    }[]): Promise<void>;
    /**
     * 启动各个管理器
     */
    initManager(info: InitInfo): Promise<void>;
}
declare const _default: StartupManager;
export default _default;
//# sourceMappingURL=index.d.ts.map