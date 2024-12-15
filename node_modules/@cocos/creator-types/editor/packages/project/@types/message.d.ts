import { ProjectProtocol } from './index';
export interface message extends EditorMessageMap {
    'open-settings': {
        params: [
            string,
            string,
            ...any[],
        ],
        result: undefined,
    },
    'query-config': {
        params: [
            string,
            string?,
            ProjectProtocol?,
        ],
        result: any,
    },
    'set-config': {
        params: [
            string,
            string,
            any,
        ],
        result: boolean,
    }
}
