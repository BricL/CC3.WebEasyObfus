import { Node, Scene } from 'cc';
/**
 * 爬取节点上的数据
 * @param node 节点
 * @param uuid2node 保存的变量
 */
export declare function walkChild(node: Node, uuid2node: any): void;
/**
 * 爬取 engine 内打开的场景的节点数据
 * @param {*} scene 场景
 * @param {*} uuid2node 保存的变量
 */
export declare function walk(scene: any, uuid2node: any): void;
/**
 * 获取有效的 ui Canvas 的节点，向上和向下找
 * @param node 节点
 */
export declare function getUICanvasNode(node: Node, prefabLimitRoot?: boolean): Node | null;
/**
 * 获取有效的有 UITransform 组件的父节点，只向上找
 * @param node 节点
 */
export declare function getUITransformParentNode(node: Node): Node | null;
export declare function hasOneKindOfComponent(node: Node | Scene, kind: any): boolean;
/**
 * 生成一个 node-001 格式的可用节点名称
 * @param name 被检查的名称
 * @param parent 父级节点
 * @returns {string} path 可用名称的文件路径
 */
export declare function getNodeName(name: string, parent: Node): string;
export declare function visitNode(node: Node, visitor: (node: Node, isChild: boolean) => void | boolean, isChild?: boolean): void;
//# sourceMappingURL=utils.d.ts.map