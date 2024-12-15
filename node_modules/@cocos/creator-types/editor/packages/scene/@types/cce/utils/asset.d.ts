import { Asset } from 'cc';
/**
 * 加载指定资源，不使用缓存。
 * @param uuid 资源 UUID。
 * @param type 资源类型，如果指定则判断指定资源是否为目标类型，若验证出错则抛出异常。
 * @returns 指定的资源。
 */
export declare function loadAssetUncached<TAsset extends Asset = Asset>(uuid: string, type?: new () => TAsset): Promise<TAsset>;
//# sourceMappingURL=asset.d.ts.map