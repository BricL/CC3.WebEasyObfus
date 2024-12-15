export default class AssetManager {
    /**
     * 查询一个资源的 info 信息
     * @param uuid
     * @param callback
     */
    queryAssetInfo(uuid: string, callback: Function): void;
    /**
     * 查询一个路径下的资源
     * @param url
     * @param callback
     */
    getAssetInfoFromUrl(url: string): any;
}
//# sourceMappingURL=asset.d.ts.map