import { Node, ParticleSystemComponent, Component } from 'cc';
import { ISceneEvents } from './scene-events-interface';
import { IChangeNodeOptions, IOptionBase } from '../../../../@types/private';
import { SceneModeType } from '../facade/scene-facade-state-interface';
export declare class ParticleManager implements ISceneEvents {
    private _currentMode?;
    get currentMode(): SceneModeType;
    set currentMode(mode: SceneModeType);
    private readonly stoppedParticleSet;
    private _selectedUUIDs;
    private _onSelect;
    private _onUnselect;
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
    onSelect(uuid: string, uuids: string[]): void;
    onUnselect(uuid: string, uuids: string[]): void;
    onEnterGeneralMode(): void;
    onExitGeneralMode(): void;
    onEnterAnimationMode(): void;
    onExitAnimationMode(): void;
    onEnterPrefabMode(): void;
    onExitPrefabMode(): void;
    init(): void;
    /**
     * 请求粒子系统运行时的数据
     * @param uuid 粒子组件的 uuid
     */
    queryPlayInfo(uuid: string): {
        speed: number;
        time: string;
        particle: number;
        isPlaying: boolean;
    } | null;
    /**
     * 设置粒子的运行速度
     * @param uuid 组件的 uuid
     * @param speed 粒子组件的运行速度
     */
    setPlaySpeed(uuid: string, speed: number): void;
    /**
     * 这个播放的行为会将递归找当前选中节点的父节点，直到找到非包含粒子组件的节点为止，将找到的父节点一起播放
     */
    play(): void;
    /**
     * 这个停止的行为会将递归找当前选中节点父节点，直到找到非包含粒子组件的节点为止，将找到的父节点一起停止
     * @param uuid 节点的 uuid
     */
    stop(): void;
    /**
     * 这个暂停的行为会将递归找当前选中的节点的父节点，直到找到非包含粒子组件的节点为止，将找到的父节点一起暂停
     * @param uuid
     */
    pause(): void;
    restart(): void;
    /**
     * 这个方法根据当前选中的粒子组件返回了所有应当响应的的粒子系统组件
     */
    getSelectedParticleSystemComponents(): ParticleSystemComponent[];
}
declare const _default: ParticleManager;
export default _default;
//# sourceMappingURL=particle.d.ts.map