/// <reference types="node" />
import { EventEmitter } from 'events';
import { IAssetInfo } from '@cocos/creator-types/editor/packages/asset-db/@types/public';
export declare class ScriptManager extends EventEmitter {
    /**
     * 当脚本刷新并执行完成时触发。
     */
    readonly EXECUTION_FINISHED = "execution-finished";
    private _executor;
    private _suspendPromise;
    private _syncPluginScripts;
    private _reloadScripts;
    constructor();
    /**
     * 挂起脚本管理器直到 `condition` 结束，才会进行下一次执行。
     * @param condition
     */
    suspend(condition: Promise<void>): void;
    init(): Promise<void>;
    investigatePackerDriver(): Promise<void>;
    /**
     * 传入一个 uuid 返回这个 uuid 对应的脚本组件名字
     * @param uuid
     */
    queryScriptName(uuid: string): Promise<string | null>;
    /**
     * 传入一个 uuid 返回这个 uuid 对应的脚本的 cid
     * @param uuid
     */
    queryScriptCid(uuid: string): Promise<string | null>;
    _loadScripts(): Promise<void>;
    /**
     * 加载脚本时触发
     * @param uuid
     */
    loadScript(uuid: string): Promise<void>;
    /**
     * 删除脚本时触发
     * @param info
     */
    removeScript(info: IAssetInfo): Promise<void>;
    /**
     * 脚本发生变化时触发
     * @param info
     */
    scriptChange(info: IAssetInfo): Promise<void>;
    private _executeAsync;
    private _execute;
    /**
     * 防止插件脚本切换到项目脚本或者反之时，没有同步插件脚本列表
     * 这里使用了 AsyncIterationConcurrency1 功能，为了防止被多次调用，进行了迭代合并
     * @private
     */
    private _syncPluginScriptListAsync;
    /**
     * 同步插件脚本列表到 Executor
     * @private
     */
    private _syncPluginScriptList;
    private _handleImportException;
}
declare const _default: ScriptManager;
export default _default;
//# sourceMappingURL=scripts.d.ts.map