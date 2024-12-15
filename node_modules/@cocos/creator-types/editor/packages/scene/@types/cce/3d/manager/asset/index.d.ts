/// <reference types="node" />
import { Node, Component } from 'cc';
import { EventEmitter } from 'events';
import { ISceneEvents } from '../scene-events-interface';
import { AssetInfo, IAssetMeta, IDragEvent } from '../../../../../../../builtin/scene/@types/private';
export declare class AssetManager extends EventEmitter implements ISceneEvents {
    init(): void;
    onScriptExecutedEnd(): void;
    removeAllAssetListeners(): void;
    onSceneOpened(): void;
    onNodeChanged(node: Node): void;
    onComponentAdded(comp: Component): void;
    onComponentRemoved(comp: Component): void;
    /**
     * 返回包含所有 Effect 的对象
     * @returns {{}}
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
                value: number;
            };
            props: any[];
            defines: any[];
            states: import("../../../../../@types/public").IProperty;
            phase: string | number | undefined;
        }[];
    }[];
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
     * 将所有的数据应用到 uuid 对应的的 material 资源上
     * @param {*} uuid
     * @param {*} data
     */
    applyMaterial(uuid: string, data: any): Promise<void>;
    /**
     * 传入一个发出的 material 数据以及对应的 uuid
     * 将所有的数据应用到 uuid 对应的 material 运行时数据上
     * @param {*} uuid
     * @param {*} data
     */
    previewMaterial(uuid: string, data: any, opts?: {
        emit?: boolean;
    }): Promise<void>;
    /**
     * 传入 physics-material 的 uuid，返回具体的 physics-material 数据
     * @param {*} uuid
     */
    queryPhysicsMaterial(uuid: string): Promise<any>;
    /**
     * 传入 animation-graph-variant 的 uuid，返回具体的 physics-material 数据
     * @param {*} uuid
     */
    queryAnimationGraphVariant(uuid: string): Promise<any>;
    /**
     * 传入 animation-mask 的 uuid，返回具体的 animation-mask 数据
     * @param {*} uuid
     */
    queryAnimationMask(uuid: string): Promise<any>;
    /**
     * 修改 physics-material
     * @param {*} dump 正在 inspector 编辑的数据对象
     */
    changePhysicsMaterial(dump: any): Promise<any>;
    /**
     * 保存 physics-material
     * @param {*} uuid
     * @param {*} dump 正在 inspector 编辑的数据对象
     */
    applyPhysicsMaterial(uuid: string): Promise<void>;
    /**
     * 修改 animation-graph-variant
     * @param {*} dump 正在 inspector 编辑的数据对象
     */
    changeAnimationGraphVariant(dump: any): Promise<any>;
    /**
     * 保存 animation-graph-variant
     * @param {*} uuid
     */
    applyAnimationGraphVariant(uuid: string): Promise<void>;
    /**
     * 修改 animation-mask
     * @param {*} dump 正在 inspector 编辑的数据对象
     */
    changeAnimationMask(args: any): Promise<any>;
    /**
     * 保存 animation-mask
     * @param {*} uuid
     * @param {*} dump 正在 inspector 编辑的数据对象
     */
    applyAnimationMask(uuid: string): Promise<void>;
    /**
     * 保存 render-texture
     * @param {*} uuid
     * @param {*} userData meta 文件里的数据
     */
    applyRenderTexture(uuid: string, userData: any): Promise<void>;
    onAssetChanged(uuid: string, assetInfo: AssetInfo, meta: IAssetMeta): void;
    onAssetDeleted(uuid: string, info: AssetInfo): void;
    /**
     * 获取依赖的资源
     * @param uuid 资源uuid
     * @param processedAssets 已经处理过的资源，防止死循环
     */
    private getAllReferenceAssets;
    releaseAsset(assetUUID: string): void;
    canDrop(type: string): boolean;
    onDragOver(event: IDragEvent): void;
    onDrop(event: IDragEvent): Promise<void>;
    /**
     * 传入 RenderPipeline 的 uuid
     * 返回具体的数据
     */
    queryRenderPipeline(uuid: string): Promise<{
        name: string;
        type: any;
        value: any;
        visible: boolean;
        readonly: boolean;
        optionalTypes: any;
    } | null>;
    changeRenderPipeline(dump: any): Promise<any>;
    /**
     * 传入一个发出的 render-pipeline 数据以及对应的 uuid
     * 将所有的数据应用到 uuid 对应的的 .rpp 资源上
     * @param {*} uuid
     * @param {*} dump {name, value}
     */
    applyRenderPipeline(uuid: string): Promise<void>;
}
declare const _default: AssetManager;
export default _default;
//# sourceMappingURL=index.d.ts.map