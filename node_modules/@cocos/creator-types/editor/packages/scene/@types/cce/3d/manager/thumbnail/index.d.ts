import { IThumbnailGenerator } from './thumbnail-generator-interface';
import { AssetInfo } from '../../../../../../asset-db/@types/public';
declare class ThumbnailManager {
    private _generator;
    private _projectCacheMap;
    constructor();
    register(type: any, parser: IThumbnailGenerator): void;
    unRegister(type: any): void;
    /**
     * 将uuid转换为缓存路径
     * temp/asset-db目录下的资源会自动更新，放在这里就不用操心资源要不要删掉
     * @param uuid
     * @param info query-asset-info的结果
     * @returns
     */
    uuidToPath(uuid: string, info?: {
        url: string;
    } | null): Promise<string>;
    queryThumbnailSingle(uuid: string, type?: any): Promise<string>;
    /**
     * 获取缩略图路径
     * @param uuids uuid数组
     * @param type asset-info中的type字段，数组，和uuids一一对应;
     * @returns
     */
    queryThumbnail(uuids: string[], type?: string[]): Promise<string[]>;
    delete(uuid: string, info: any): Promise<void>;
    init(): void;
    assetChange(uuid: string, info: any, meta: any): void;
    assetDelete(uuid: string, info: AssetInfo): Promise<void>;
    private generateAll;
}
declare const _default: ThumbnailManager;
export default _default;
//# sourceMappingURL=index.d.ts.map