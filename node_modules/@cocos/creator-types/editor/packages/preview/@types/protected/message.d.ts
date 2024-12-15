import { IPreviewSettingsResult } from '../../../builder/@types/protected';

export interface message extends EditorMessageMap {
    'query-preview-url': {
        params: [],
        result: string,
    },
    'generate-settings': {
        params: [],
        result: IPreviewSettingsResult,
    },
}
