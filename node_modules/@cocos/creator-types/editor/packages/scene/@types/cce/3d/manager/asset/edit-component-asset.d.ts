declare class EditComponentAsset {
    component: any;
    /**
     * 修改属性
     * @param prop 属性
     * @param name 属性名称
     */
    modifyProp(prop: any, name: string): void;
    /**
     * 序列化出 inspector 面板可用的数据
     * @param component 组件
     */
    encodeComponent(component: any): any;
    /**
     * 缓存当前编辑的组件
     * @param component 组件
     */
    cacheComponent(component: any): void;
    /**
     * 获取当前组件
     */
    getComponent(): any;
    /**
     * inspector 面板发起修改后在这里更新数据
     * 这里不用 import dumpDecode from '../../../../utils/dump/decode'; 方法
     * 是因为 node dump 数据是基于不可变类型设计的
     * 而 asset dump 数据存在可变类型，想要还原数据必须对 dumpDecode 进行改造
     * 为避免影响到 node dump 相关机制，暂时独立出来下面的 setValue 机制
     * @param dump 数据
     */
    updateComponent(dump: any): Promise<any>;
}
export default EditComponentAsset;
//# sourceMappingURL=edit-component-asset.d.ts.map