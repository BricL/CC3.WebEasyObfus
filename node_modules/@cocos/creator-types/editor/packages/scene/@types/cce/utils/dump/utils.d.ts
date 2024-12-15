export declare function getDefault(attribute: any): any;
export declare function getConstructor(object: any, attribute: any): any;
export declare function getType(ctor: any): any;
/**
 * 获取一个类的名字
 * @param ctor
 */
export declare function getTypeName(ctor: any): any;
/**
 * 获取一个类的继承链数组
 * @param ctor
 */
export declare function getTypeInheritanceChain(ctor: any): any;
export declare function parsingPath(path: string, data: any): {
    search: string;
    key: string;
};
/**
 * 返回一个类的属性默认值
 * @param attrs 来自 cc.Class.attr(obj.constructor, key);
 */
export declare function ccClassAttrPropertyDefaultValue(attrs: any): any;
declare const _default: any;
export default _default;
//# sourceMappingURL=utils.d.ts.map