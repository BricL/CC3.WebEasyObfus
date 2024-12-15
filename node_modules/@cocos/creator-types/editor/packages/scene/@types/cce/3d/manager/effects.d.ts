export declare class EffectManager {
    private _uuidSet;
    init(): Promise<void>;
    /**
     * 传入一个 effect uuid 数组，将这些 effect 注册到管理器内
     * @param uuids 注册一个 effect 数组
     */
    registerEffects(uuids: string[]): void;
    /**
     * 注册一个 effect
     * @param uuid 注册一个 effect
     */
    registerEffect(uuid: string): Promise<void>;
    /**
     * 将一个已经注册的 effect 移除
     * @param uuid 删除的 effect 资源 uuid
     */
    removeEffect(uuid: string): boolean;
    /**
     * 移除一个 uuids 列表
     * @param uuids 删除的所有 effect 的 uuids
     */
    removeEffects(uuids: string[]): void;
    updateEffect(uuid: string): void;
}
declare const _default: EffectManager;
export default _default;
//# sourceMappingURL=effects.d.ts.map