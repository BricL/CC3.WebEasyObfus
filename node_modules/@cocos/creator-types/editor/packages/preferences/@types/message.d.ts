import { PreferencesProtocol } from './index';

export interface message extends EditorMessageMap {
    'open-settings': {
        params: [
            string,
            ...any[],
        ],
        result: undefined,
    },
    'query-config': {
        params: [
            string,
            string?,
            PreferencesProtocol?,
        ],
        result: any,
    },
    'set-config': {
        params: [
            string,
            string,
            any,
            PreferencesProtocol?,
        ],
        result: boolean,
    }		    
}
