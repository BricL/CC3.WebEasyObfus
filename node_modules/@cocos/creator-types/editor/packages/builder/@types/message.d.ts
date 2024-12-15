export interface message extends EditorMessageMap {
    'open': {
        params: [
            panel: 'default' | 'build-bundle',
            options?: any,
        ],
        result: void,
    },
    'query-worker-ready': {
        params: [],
        result: boolean,
    },
}
