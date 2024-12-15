import { IProgramInfo } from './public';

export interface message extends EditorMessageMap {
    "query-program-info": {
        params: [
            string,
        ],
        result: IProgramInfo | null,
    },
    "open-program": {
        params: [
            string,
            Record<string, any>?,
        ],
        result: Promise<boolean>,
    },
    "open-url": {
        params: [
            string,
            Record<string, any>?,
        ],
        result: Promise<boolean>,
    }
}
