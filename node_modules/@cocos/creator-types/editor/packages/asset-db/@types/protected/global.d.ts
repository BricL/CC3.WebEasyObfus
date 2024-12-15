import { AssetDB } from '@editor/asset-db';
import { Meta } from '@editor/asset-db/libs/meta';
import { IAsset } from './asset';
import { IAssetInfo, QueryAssetsOption } from '../public';
import { EventEmitter } from 'events';

declare global {
    const Manager: IAssetWorkerManager;
}

export declare class AssetManager extends EventEmitter {
    queryAssetUsers(uuid: string): string[] | PromiseLike<string[]>;
    queryAssetInfos: (options?: QueryAssetsOption, dataKeys?: (keyof IAssetInfo)[]) => IAssetInfo[];
    queryAssets: (options?: QueryAssetsOption) => IAsset[];
    queryAsset: (uuidOrURLOrPath: string) => IAsset | null;
    queryAssetProperty: (asset: IAsset, property: (keyof IAssetInfo | 'depends' | 'dependScripts' | 'dependedScripts')) => any;
    queryAssetProperty: (asset: IAsset, property: 'depends') => string[];
    queryAssetProperty: (asset: IAsset, property: 'library') => Record<string, string>;
    queryAssetInfo: (uuid: string, dataKeys?: (keyof IAssetInfo)[]) => IAssetInfo | null;
    queryAssetMeta: (uuid: string) => Meta | null;
    queryDBAssetInfo: (name: string) => IAssetInfo | null;
    queryAssetMtime: (uuid: string) => number | null;
    queryAssetDependencies: (uuid: string, type?: 'asset' | 'script') => Promise<string[]>;
    encodeAsset: (asset: IAsset) => IAssetInfo;
    saveAssetMeta: (uuid: string, meta: Meta) => Promise<void>;
    queryUrl: (uuidOrPath: string) => string;
}
export interface IAssetWorkerInfo {
    engine: string; // 引擎所在目录
    type: string; // 当前项目的类型 2d | 3d
    dist: string; // asset-db 目标目录（importer 等）
    utils: string; // 引擎的 utils 所在目录
}
export interface IAssetWorkerManager {
    /**
     * @deprecated use `Manager.assetDBManager.assetDBMap` instead
     */
    AssetWorker: Record<string, AssetDB>;
    AssetInfo: IAssetWorkerInfo;
    assetDBManager: {
        pause(source: string): Promise<boolean>;
        resume(): Promise<boolean>;
        assetDBMap: Record<string, AssetDB>;
        readonly ready: boolean;
    },
    Utils: {
        url2uuid(url: string): string;
        url2path(url: string): string;
        path2url(url: string, dbName?: string): string;
    },
    assetManager: AssetManager;
}