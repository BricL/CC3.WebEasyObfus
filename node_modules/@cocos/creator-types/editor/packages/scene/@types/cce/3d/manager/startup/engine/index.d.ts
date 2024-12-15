import type { InitInfo } from '..';
import { EngineAddon } from './adapter-util';
export declare class EngineStartup {
    nativeEngine: EngineAddon | null;
    loadNativeEngine(): Promise<void>;
    /**
     * 将引擎文件 require 到当前进程
     */
    requireEngine(): Promise<void>;
    /**
     * 打开引擎（运行引擎）
     * 目前 config 是项目设置中 引擎配置 的相关参数，
     * 有 { path, project, renderPipeline, version }
     */
    openEngine(config?: Partial<InitInfo>): Promise<void>;
    /**
     * 启动引擎前的引擎配置修改
     */
    configureStartup(): Promise<void>;
    /**
     * 引擎启动之后配置引擎运行的某些参数
     */
    configureEngine(): void;
    /**
     * * 已无入口触发，deprecated 功能被 ../manager/effects.ts 接管
     * 引擎启动前加载现在所有的 effects
     */
    loadEffect(): Promise<void>;
}
declare const engineStartup: EngineStartup;
export default engineStartup;
//# sourceMappingURL=index.d.ts.map