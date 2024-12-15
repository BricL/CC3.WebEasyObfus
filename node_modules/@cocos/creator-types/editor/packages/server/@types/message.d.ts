
export interface message extends EditorMessageMap {
    'query-ip-list': {
        params: [],
        result: string[],
    },
    'query-port': {
        params: [],
        result: number,
    },
}
