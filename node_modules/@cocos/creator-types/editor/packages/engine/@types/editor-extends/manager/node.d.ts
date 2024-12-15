/// <reference types="node" />
import type { Node } from 'cc';
import { EventEmitter } from 'events';
export default class NodeManager extends EventEmitter {
    allow: boolean;
    _map: {
        [index: string]: any;
    };
    /**
     * 新增一个节点，当引擎将一个节点添加到场景树中，同时会遍历子节点，递归的调用这个方法。
     * @param uuid
     * @param node
     */
    add(uuid: string, node: any): void;
    /**
     * 删除一个节点，当引擎将一个节点从场景树中移除，同时会遍历子节点，递归的调用这个方法。
     * @param uuid
     */
    remove(uuid: string): void;
    /**
     * 清空所有数据
     */
    clear(): void;
    /**
     * 获取一个节点数据，查的范围包括被删除的节点
     * @param uuid
     */
    getNode(uuid: string): Node | null;
    /**
     * 获取所有的节点数据
     */
    getNodes(): {
        [index: string]: any;
    };
    /**
     * 获取场景中使用了某个资源的节点
     * @param uuid asset uuid
     */
    getNodesByAsset(uuid: string): string[];
    /**
     * 获取所有在场景树中的节点数据
     */
    getNodesInScene(): {
        [index: string]: any;
    };
    changeNodeUUID(oldUUID: string, newUUID: string): void;
}
//# sourceMappingURL=node.d.ts.map