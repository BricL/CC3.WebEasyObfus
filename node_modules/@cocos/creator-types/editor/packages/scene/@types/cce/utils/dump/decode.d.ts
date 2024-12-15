import { Component, Node, Prefab } from 'cc';
import { INode, IScene, ITargetOverrideInfo } from '../../../../@types/public';
export declare function decodeMountedRoot(compOrNode: Node | Component, mountedRoot?: string): void;
/**
 * 解码一个场景 dump 数据
 * @param dump
 * @param scene
 */
export declare function decodeScene(dump: IScene, scene?: any): Promise<void>;
/**
 * 解码一个 dump 数据
 * @param dump
 * @param node
 */
export declare function decodeNode(dump: INode, node?: Node, excludeComps?: any): Promise<Node | null>;
/**
 * 解码一个 dump 补丁到指定的 node 上
 * @param path
 * @param dump
 * @param node
 */
export declare function decodePatch(path: string, dump: any, node: any): Promise<any>;
export declare function resetProperty(node: any, path: string): void;
export declare function updatePropertyFromNull(node: any, path: string): void;
export declare function decodeTargetOverrides(dumpedTargetOverrides: ITargetOverrideInfo[]): Prefab._utils.TargetOverrideInfo[];
declare const _default: any;
export default _default;
//# sourceMappingURL=decode.d.ts.map