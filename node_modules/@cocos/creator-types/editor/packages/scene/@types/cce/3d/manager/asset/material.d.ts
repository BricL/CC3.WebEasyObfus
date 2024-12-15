import { EffectAsset } from 'cc';
declare class MaterialAsset {
    /**
     * 返回包含所有 Effect 的对象
     */
    queryAllEffects(): Promise<Record<string, {
        uuid: string;
        name: string;
        hideInEditor: boolean;
        assetPath: string;
    }>>;
    /**
     * 根据 effectName 为 inspector 构建指定 Effect 数据
     * @param {string} effectName
     * @returns {{props: any[], defines: any[]}}
     */
    queryEffect(effectName: string): {
        name: string | undefined;
        passes: {
            switch: {
                name: string | undefined;
                value: boolean;
            };
            propertyIndex: {
                /**
                 * pass.propertyIndex 有可能是 undefined
                 * 当为 undefined 时，表示与当前 pass index 一致
                 */
                value: number;
            };
            props: any[];
            defines: any[];
            states: import("../../../../../@types/public").IProperty;
            phase: string | number | undefined;
        }[];
    }[];
    /**
     * 传入一个 EffectAsset 对象，将其整理成一个二维数组
     * 第一层: technique
     * 第二层: pass
     * @param {*} effect
     */
    encodeEffect(effect: EffectAsset): {
        name: string | undefined;
        passes: {
            switch: {
                name: string | undefined;
                value: boolean;
            };
            propertyIndex: {
                /**
                 * pass.propertyIndex 有可能是 undefined
                 * 当为 undefined 时，表示与当前 pass index 一致
                 */
                value: number;
            };
            props: any[];
            defines: any[];
            states: import("../../../../../@types/public").IProperty;
            phase: string | number | undefined;
        }[];
    }[];
    decodeMaterial(dump: any): Promise<string | object>;
    /**
     * 传入 material 的 uuid，返回具体的 material 数据
     * @param {*} uuid
     * @param {*} name
     */
    queryMaterial(uuid: string): Promise<{
        effect: any;
        technique: any;
        data: {
            name: string | undefined;
            passes: {
                switch: {
                    name: string | undefined;
                    value: boolean;
                };
                propertyIndex: {
                    /**
                     * pass.propertyIndex 有可能是 undefined
                     * 当为 undefined 时，表示与当前 pass index 一致
                     */
                    value: number;
                };
                props: any[];
                defines: any[];
                states: import("../../../../../@types/public").IProperty;
                phase: string | number | undefined;
            }[];
        }[];
    } | null>;
    /**
     * 传入一个发出的 material 数据以及对应的 uuid
     * 将所有的数据应用到 uuid 对应的 material 运行时数据上
     * @param {*} uuid
     * @param {*} data
     */
    previewMaterial(uuid: string, data: any, opts?: {
        emit?: boolean;
    }): Promise<void>;
}
declare const _default: MaterialAsset;
export default _default;
//# sourceMappingURL=material.d.ts.map