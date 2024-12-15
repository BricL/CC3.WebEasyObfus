import { Component, Node } from 'cc';
import { IChangeNodeOptions, IOptionBase } from '../../../../@types/private';
import { ISceneEvents } from './scene-events-interface';
export declare class ReflectProbeManager implements ISceneEvents {
    protected static INSTANCE: ReflectProbeManager;
    static GET_INSTANCE(): ReflectProbeManager;
    protected constructor();
    onResize?(opts: any): void;
    onSceneOpened?(scene: any): void;
    onSceneReload?(scene: any): void;
    onSceneClosed?(scene: any): void;
    onNodeChanged?(node: Node, opts: IChangeNodeOptions): void;
    onAddNode?(node: Node): void;
    onRemoveNode?(node: Node): void;
    onNodeAdded?(node: Node, opts: IOptionBase): void;
    onNodeRemoved?(node: Node, opts: IOptionBase): void;
    onAddComponent?(comp: Component): void;
    onRemoveComponent?(comp: Component): void;
    onComponentAdded?(comp: Component, opts?: IOptionBase): void;
    onComponentRemoved?(comp: Component, opts?: IOptionBase): void;
    onAssetDeleted?(uuid: string, info?: any): void;
    onAssetChanged?(uuid: string, info?: any, meta?: any): void;
    init(): void;
    protected _bakeQueue: {
        uuid: string;
        resolve: (arg: any) => void;
    }[];
    protected _isBusy: boolean;
    stopBaking(): void;
    isBaking(uuid: string): boolean;
    get isBusy(): boolean;
    protected set isBusy(value: boolean);
    protected _currentBakingUUID: string;
    bakeCubemaps(probeUUIDs: ReadonlyArray<string>): void;
    bakeCubemap(probeUUID: string): Promise<void>;
    /**
     * @en Render the six faces of the Probe and use the tool to generate a cubemap and save it to the asset directory.
     * @zh 渲染Probe的6个面，并且使用工具生成cubemap保存至asset目录。
     */
    protected captureCube(probeUUID: string): Promise<void>;
    waitForNextFrame(): Promise<void>;
    bakeReflectionProbe(files: string[], isHDR: boolean, sceneName: string, probeID: number, callback: Function): Promise<void>;
}
declare const _default: ReflectProbeManager;
export default _default;
//# sourceMappingURL=reflect-probe.d.ts.map