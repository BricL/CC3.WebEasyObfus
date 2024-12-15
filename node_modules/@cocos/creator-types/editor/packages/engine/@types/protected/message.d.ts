import { IModuleConfig } from '../module';

export interface message extends EditorMessageMap {
    'query-modules-config': {
        params: [],
        result: IModuleConfig,
    },
}

