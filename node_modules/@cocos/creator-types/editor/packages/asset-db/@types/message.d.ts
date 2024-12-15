import { AssetInfo, QueryAssetsOption, AssetOperationOption, IAssetMeta, IAssetInfo } from './public';
import { MissingAssetInfo } from '@editor/asset-db/libs/info';

export interface message extends EditorMessageMap {
    'query-ready': {
        params: [],
        result: boolean,
    },
    'create-asset': {
        params: [
            string,
            string | Buffer | null,
        ] | [
            string,
            string | Buffer | null,
            AssetOperationOption,
        ],
        result: AssetInfo | null,
    },
    'import-asset': {
        params: [
            string,
            string,
        ] | [
            string,
            string,
            AssetOperationOption,
        ],
        result: AssetInfo | null,
    },
    'copy-asset': {
        params: [
            string,
            string,
        ] | [
            string,
            string,
            AssetOperationOption,
        ],
        result: AssetInfo | null,
    },
    'move-asset': {
        params: [
            string,
            string,
        ] | [
            string,
            string,
            AssetOperationOption,
        ],
        result: AssetInfo | null,
    },
    'delete-asset': {
        params: [
            string,
        ],
        result: AssetInfo | null,
    },
    'open-asset': {
        params: [
            string,
        ],
        result: void,
    },
    'save-asset': {
        params: [
            string,
            string | Buffer,
        ],
        result: AssetInfo | null,
    },
    'save-asset-meta': {
        params: [
            string,
            string,
        ],
        result: AssetInfo | null,
    },
    'reimport-asset': {
        params: [
            string,
        ],
        result: boolean,
    },
    'refresh-asset': {
        params: [
            string
        ],
        result: boolean,
    },
    'query-asset-info': {
        params: [
            urlOrUUIDOrPath: string, // uuid | url | path
            dataKeys?: string[],
        ],
        result: AssetInfo | null,
    },
    'query-missing-asset-info': {
        params: [
            urlOrPath: string, // uuid | path
        ],
        result: MissingAssetInfo | null,
    },
    'query-asset-meta': {
        params: [
            string,
        ],
        result: IAssetMeta | null,
    },
    'query-path': {
        params: [
            string,
        ],
        result: string | null,
    },
    'query-url': {
        params: [
            string
        ],
        result: string | null,
    },
    'query-uuid': {
        params: [
            string
        ],
        result: string | null,
    },
    'query-assets': {
        params: [
            options?: QueryAssetsOption,
            dataKeys?: (keyof IAssetInfo)[]
        ],
        result: AssetInfo[],
    },
    'generate-available-url': {
        params: [
            string,
        ],
        result: string,
    },
}
