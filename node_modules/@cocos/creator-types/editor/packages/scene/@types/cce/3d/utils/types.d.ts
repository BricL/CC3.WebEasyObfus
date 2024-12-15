declare const types: {
    'cc.Vec2': {
        properties: string[];
    };
    'cc.Vec3': {
        properties: string[];
    };
    'cc.Size': {
        properties: string[];
    };
    'cc.Color': {
        properties: string[];
    };
};
/**
 * 获取一个对象的类型
 * @param {*} obj
 */
declare function getTypeId(obj: any): string;
/**
 * 获取一个对象上的继承链
 * @param {*} klass
 */
declare function getInheritanceChain(klass: any): string[];
/**
 * 获取一个数据的默认值
 * @param {*} defaultVal
 */
declare function getDefault(defaultVal: any): any;
export { types, getTypeId, getInheritanceChain, getDefault };
//# sourceMappingURL=types.d.ts.map