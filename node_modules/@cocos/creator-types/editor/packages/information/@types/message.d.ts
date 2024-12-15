import { IDialogAction, IQueryInformation } from './public';

export interface message extends EditorMessageMap {
    'query-information': {
        params: [
            tag: string,
            options?: {
                force?: boolean,
            },
        ],
        result: IQueryInformation | null,
    },
    'open-information-dialog': {
        params: [
            tag: string,
            dialogOptions?: { [key: string]: string }
        ],
        result: IDialogAction,
    },
    'has-dialog': {
        params: [
            tag: string,
        ],
        result: boolean,
    },
    'close-dialog': {
        params: [
            tag: string,
        ],
        result: void,
    }
}
