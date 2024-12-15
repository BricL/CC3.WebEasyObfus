/// <reference types="node" />
import { EventEmitter } from 'events';
import { Component } from 'cc';
import { IProperty } from '../../../../../@types/public';
export declare class CompManager extends EventEmitter {
    init(): void;
    _onCompAdded?: (uuid: string, component: Component) => void;
    _onCompRemoved?: (uuid: string, component: Component) => void;
    /**
     * 注册引擎Component管理相关事件的监听
     */
    registerCompMgrEvents(): void;
    /**
     * 反注册引擎Component管理相关事件的监听
     */
    unregisterCompMgrEvents(): void;
    /**
     * 清空当前管理的节点
     */
    clear(): void;
    /**
     * 添加到组件缓存
     * @param {String} uuid
     * @param {cc.Component} component
     */
    add(uuid: string, component: Component): void;
    /**
     * 移除组件缓存
     * @param {String} uuid
     * @param {cc.Component} component
     */
    remove(uuid: string, component: Component): void;
    /**
     * 查询一个组件的实例
     * @param {*} uuid
     * @returns {cc.Component}
     */
    query(uuid: string): Component | null;
    query<T extends Component>(uuid: string): T | null;
    /**
     * 获取所有在用的组件
     */
    queryAll(): {
        [index: string]: any;
    };
    /**
     * 在回收站中查询一个组件的实例
     * @param {*} uuid
     * @returns {cc.Component}
     */
    queryRecycle(uuid: string): any;
    /**
     * 在编辑器中删除一个component
     * @param {*} component 组件
     */
    removeComponent(component: Component): boolean;
    /**
     * 在编辑器中重置 component
     * @param {*} component 组件
     */
    resetComponent(component: any): Promise<boolean>;
    /**
     * 查询一个组件，并返回该节点的 dump 数据
     *   如果组件不存在，则返回 null
     * @param {String} uuid
     */
    queryDump(uuid: string): import("../../../../../@types/public").IComponent | null;
    /**
     * 调用Component身上的方法
     * @param {*} uuid
     * @param {*} name
     * @param {*} args
     */
    executeComponentMethod(uuid: string, name: string, args: any): Promise<any>;
    /**
     * 设置一个组件的属性，暂时不用
     * @param {*} uuid
     * @param {*} path
     * @param {*} key
     * @param {*} dump
     */
    setProperty(uuid: string, path: string, dump: IProperty): Promise<boolean>;
    onComponentAddedFromEditor(component: Component): void;
    changeUUID(oldUUID: string, newUUID: string): void;
}
declare const _default: CompManager;
export default _default;
//# sourceMappingURL=index.d.ts.map