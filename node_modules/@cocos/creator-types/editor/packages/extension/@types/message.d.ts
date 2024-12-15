import { ICreateExtensionResponse } from './public';

export interface message extends EditorMessageMap {
    'create-extension-template': {
        params: [
            ICreateTemplateParam,
            boolean,
        ],
        result: ICreateExtensionResponse,
    },
}
