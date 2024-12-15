import { IDeviceItem } from './public';

export interface message extends EditorMessageMap {
    'query': {
        params: [],
        result: IDeviceItem[],
    },
}
