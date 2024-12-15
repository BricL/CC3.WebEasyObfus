declare class SceneCacheManager {
    private useSceneCache;
    init(): Promise<void>;
    /**
     * 检查指定 uuid 场景的最新（比现有保存资源更新）缓存数据，有则返回 json 数据
     * @param uuid
     * @returns
     */
    private queryLatestCache;
    /**
     * 加载指定 uuid 的可用缓存场景数据
     * @param uuid
     * @returns
     */
    loadCacheScene(uuid?: string): Promise<boolean>;
    /**
     * 查询指定 uuid 的上一次缓存信息
     */
    private queryLastCacheInfo;
    private clearSceneCache;
}
export declare const sceneCacheManager: SceneCacheManager;
export declare function formatTime(time: string): string;
export {};
//# sourceMappingURL=scene-cache.d.ts.map