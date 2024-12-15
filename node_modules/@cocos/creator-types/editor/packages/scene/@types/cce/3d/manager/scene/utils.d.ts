import { Node } from 'cc';
declare class SceneUtil {
    timer: any;
    /**
     * 通过一个 uuid 加载对应的场景
     */
    loadSceneByUuid(uuid: string): Promise<void>;
    /**
     * 从一个场景节点加载场景
     */
    loadSceneByNode(scene: any): Promise<void>;
    /**
     * 从一个序列化后的 json 内加载场景
     */
    loadSceneByJson(json: any): Promise<void>;
    /**
     * 加载一个 prefab 成为场景
     */
    loadPrefab(uuid: string): Promise<unknown>;
    /**
     * 从一个序列化后的 json 内加载场景
     */
    loadPrefabByJson(json: any): Promise<unknown>;
    /**
     * 卸载一个 prefab 资源，以及引用它的资源
     * 重要：去掉资源的缓存
     * 避免重复打开对象已被销毁的报错
     * 避免 prefab 资源在需要重新序列化的时候被锁定
     */
    unloadPrefab(uuid: string): void;
    /**
     * 递归所有节点
     *
     * @param {cc.Node} node 节点
     * @param {Function} func 处理函数
     */
    recursiveNode(node: Node, func: Function): void;
}
declare const _default: SceneUtil;
export default _default;
//# sourceMappingURL=utils.d.ts.map