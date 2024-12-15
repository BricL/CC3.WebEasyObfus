/// <reference path="../../../../../../../../resources/3d/engine/bin/.declarations/cc.d.ts" />
/// <reference path="../../../public/gizmos/utils/engine/3d.d.ts" />
/// <reference path="../../../public/gizmos/manager/data.d.ts" />
/// <reference path="../asset/asset-watcher.d.ts" />
/// <reference types="@cocos/creator-types/engine/cc" />
import { QueryClassesOptions } from '../../../../../@types/public';
import EventEmitter from '../../../public/EventEmitter';
import { Node, Scene } from 'cc';
import { SceneModeType } from '../../facade/scene-facade-state-interface';
export interface ISceneManagerEventMap {
    open: (scene: Scene) => void;
    close: (scene?: Scene) => void;
    save: (scene: Scene) => void;
    reload: (scene: Scene) => void;
    'soft-reload': (success: boolean) => void;
    'animation-start': (uuid: string) => void;
    'animation-end': () => void;
    'mode-change': (mode: SceneModeType) => void;
}
/**
 * 场景管理器
 */
declare class SceneManager extends EventEmitter {
    rootNode: Node | null;
    ignore: boolean;
    modes: any;
    constructor();
    /**
     * 查询节点数的信息
     * 传入 uuid 则以这个 uuid 指向的节点为根
     * 不传入则从场景开始
     *
     * @param {string} uuid 从一个节点开始查询树形结构
     * @returns {Promise<string>} 序列化后的字符串
     */
    queryNodeTree(uuid?: string): any;
    /**
     * 查询引擎内所有的类
     *
     * @returns {Array} 查询引擎内所有的类
     */
    queryClasses(options?: QueryClassesOptions): {
        name: string;
    }[];
    /**
     * 查询当前的组件列表
     *
     * @returns {Array} 查询所有组件的列表
     */
    queryComponents(): Promise<{
        name: any;
        cid: any;
        path: any;
        assetUuid: any;
    }[]>;
    /**
     * 查询引擎组件列表是否含有指定类名的脚本
     *
     * @param {string} name 脚本的类名 Class
     * @returns {Boolean} 存在 true, 不存在 false
     */
    queryComponentHasScript(name: string): boolean;
    /**
     * 查询引擎内 Layer 的内置项
     */
    queryLayerBuiltin(): {
        name: string;
        value: any;
    }[];
    /**
     * 查询引擎内 SortingLayer 的内置项
     */
    querySortingLayerBuiltin(): readonly import("cc").__private._cocos_sorting_sorting_layers__SortingItem[];
    /**
     * 发送场景打开事件
     * @param scene 当前打开的场景
     * @param uuid 场景的uuid，在prefab模式下是prefabAsset的uuid
     * @param rootNode 根节点，在普通模式下是场景节点，在Prefab模式下是Prefab的根节点
     */
    sendSceneOpenMsg(scene: Scene, uuid: string | undefined, rootNode: Node): void;
    /**
     * 发送场景关闭事件
     * @param scene 关闭的场景
     */
    sendSceneCloseMsg(scene: Scene): void;
    on<T extends keyof ISceneManagerEventMap>(event: T, listener: ISceneManagerEventMap[T]): this;
    once<T extends keyof ISceneManagerEventMap>(event: T, listener: ISceneManagerEventMap[T]): this;
    emit<T extends keyof ISceneManagerEventMap>(event: T, ...args: Parameters<ISceneManagerEventMap[T]>): boolean;
    removeAllListeners<T extends keyof ISceneManagerEventMap>(event?: T): this;
    removeListener<T extends keyof ISceneManagerEventMap>(event: T, listener: ISceneManagerEventMap[T]): this;
    addListener<T extends keyof ISceneManagerEventMap>(event: T, listener: ISceneManagerEventMap[T]): this;
}
export default SceneManager;
//# sourceMappingURL=scene-manager.d.ts.map