import { ExecuteSceneScriptMethodOptions, ContributionDropItem, ScenePluginNodeInfo } from '../../../../@types/public';
import { Node } from 'cc';
import { ISceneEvents } from './scene-events-interface';
export declare class PluginManager implements ISceneEvents {
    getNodes(uuids: string[]): ScenePluginNodeInfo[];
    init(): Promise<void>;
    onNodeChanged(node: Node): void;
    /**
     * 和外部的 plugin 交互
     * @param type 发送到的窗口类型
     * @param info
     */
    sendToFloatWindow(type: string, info: any): void;
    /**
     * 强制更新一次 toolbar
     */
    forceUpdateToolbar(): void;
    /**
     * 强制更新一次 float window
     */
    forceUpdateFloatWindow(): void;
    forceUpdatePlugin(): void;
    /**
     * 执行一个场景脚本
     * @param options
     */
    executeSceneScript(options: ExecuteSceneScriptMethodOptions): Promise<any>;
    /**
     * 获取一个放置类型的处理方法
     * @param type
     */
    getDropHandle(type: string): {
        name: string;
        item: ContributionDropItem;
    } | null;
    getScriptModuleMap(): any;
}
declare const _default: PluginManager;
export default _default;
//# sourceMappingURL=plugin.d.ts.map