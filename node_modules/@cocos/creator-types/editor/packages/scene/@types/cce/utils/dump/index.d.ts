import { IProperty } from '../../../../@types/public';
export declare function get(node: any): any;
export declare function getComponent(comp: any): any;
export declare function set(dump: any, node?: any): Promise<any>;
export declare function patch(path: string, dump: IProperty, node: any): Promise<any>;
/**
 * 设置节点在该路径下的默认值
 * @param path 数据路径
 * @param node 节点
 */
export declare function resetProperty(node: any, path: string): any;
/**
 * 将一个属性其现存值与定义类型值不匹配，或者为 null 默认值，改为一个可编辑的值
 * @param path 数据路径
 * @param node 节点
 */
export declare function updatePropertyFromNull(node: any, path: string): any;
//# sourceMappingURL=index.d.ts.map