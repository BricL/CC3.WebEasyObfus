import EditComponentAsset from './edit-component-asset';
declare class EditRenderPipeline extends EditComponentAsset {
    changeTypes: {
        _flows: {
            componentKey: string;
            optionalTypes: never[];
        };
        _stages: {
            componentKey: string;
            optionalTypes: never[];
        };
    };
    /**
     * 根据名称找到类
     * @param type
     * type = 'pipeline' 返回 render pipeline script;
     * type = 'flow' 返回 render flow script;
     * type = 'stage' 返回 render stage script;
     */
    queryComponents(type?: string | undefined): any;
    /**
     * 将修改后的 pipeline 数据应用到当前的运行时数据上
     */
    preview(): void;
    modifyProp(prop: any, name?: string): void;
    encodeComponent(component: any): {
        name: string;
        type: any;
        value: any;
        visible: boolean;
        readonly: boolean;
        optionalTypes: any;
    };
    updateComponent(dump: any): Promise<any>;
}
declare const _default: EditRenderPipeline;
export default _default;
//# sourceMappingURL=render-pipeline.d.ts.map