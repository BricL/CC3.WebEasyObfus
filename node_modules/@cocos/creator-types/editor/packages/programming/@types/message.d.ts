import { SharedSettings, IPluginScriptInfo, FilterPluginOptions } from './protected'
export interface message extends EditorMessageMap {
    'query-shared-settings': {
        params: [],
        result: SharedSettings,
    };
    'query-sorted-plugins': {
        params: [options?: FilterPluginOptions],
        result: IPluginScriptInfo[];
    }
}
