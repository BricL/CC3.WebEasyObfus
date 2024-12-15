interface IRebuildOptions {
    debugNative?: boolean;
    isNativeScene?: boolean;
}
export declare function compileEngine(directory: string, force?: boolean): Promise<void>;
export declare function rebuild(options?: IRebuildOptions): Promise<void>;
export declare function rebuildImportMaps(): Promise<void>;
interface IEngineGlobalConfig {
    'builtin': boolean;
    'custom': string;
}
/**
 * 根据全局配置与项目配置、默认值等计算出真正的引擎使用路径
 * @param globalConfig
 * @param projectConfig
 * @param builtinPath
 */
export declare function getRightEngine(config: IEngineGlobalConfig, builtinPath: string): {
    version: string;
    path: string;
};
export * as default from './index';
//# sourceMappingURL=index.d.ts.map