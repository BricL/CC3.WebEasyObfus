import {
    SetPropertyOptions,
    MoveArrayOptions,
    RemoveArrayOptions,
    PasteNodeOptions,
    CutNodeOptions,
    CreateNodeOptions,
    RemoveNodeOptions,
    ResetNodeOptions,
    ResetComponentOptions,
    CreateComponentOptions,
    INode,
    IComponent,
    QueryClassesOptions
} from './public';
export interface queryIsNative {
    /**
     * @en Whether to check whether the native editor is available, and if not, return only whether the one recorded on the configuration is a native editor
     * @zh 是否检查原生编辑器是否可用，如果不检查则只返回配置上记录的是否为原生编辑器
     * @default true
     */
    checkAvailable?:boolean;
}
export interface message extends EditorMessageMap {
    'open-scene': {
        params: [
            string
        ],
        result: boolean,
    },
    'save-scene': {
        params: [] | [
            boolean
        ],
        result: boolean,
    },
    'save-as-scene': {
        params: [
            boolean
        ],
        result: boolean,
    },
    'close-scene': {
        params: [],
        result: boolean,
    },
    'set-property': {
        params: [
            SetPropertyOptions,
        ],
        result: boolean,
    },

    'reset-property': {
        params: [
            SetPropertyOptions,
        ],
        result: boolean,
    },
    'move-array-element': {
        params: [
            MoveArrayOptions,
        ],
        result: void,
    },
    'remove-array-element': {
        params: [
            RemoveArrayOptions,
        ],
        result: void,
    },
    'copy-node': {
        params: [
            string | string[],
        ],
        result: string[],
    },
    'duplicate-node': {
        params: [
            string | string[],
        ],
        result: string[],
    },
    'paste-node': {
        params: [
            PasteNodeOptions,
        ],
        result: string[],
    },
    'cut-node': {
        params: [
            string | string[],
        ],
        result: void,
    },
    'set-parent': {
        params: [
            CutNodeOptions,
        ],
        result: string[],
    },
    'create-node': {
        params: [
            CreateNodeOptions,
        ],
        result: string[],
    },
    'remove-node': {
        params: [
            RemoveNodeOptions,
        ],
        result: void,
    },
    'reset-node': {
        params: [
            ResetNodeOptions,
        ],
        result: void,
    },
    'reset-component': {
        params: [
            ResetComponentOptions,
        ],
        result: void,
    },
    'restore-prefab': {
        params: [
            ResetComponentOptions,
        ],
        result: void,
    },
    'create-component': {
        params: [
            CreateComponentOptions,
        ],
        result: boolean,
    },
    'remove-component': {
        params: [
            RemoveComponentOptions,
        ],
        result: void,
    },
    'execute-component-method': {
        params: [
            ExecuteComponentMethodOptions,
        ],
        result: any,
    },
    'execute-scene-script': {
        params: [] | [
            {
                name: string;
                method: string;
                args: any[];
            }
        ],
        result: any,
    },
    'snapshot': {
        params: [],
        result: void,
    },
    'snapshot-abort': {
        params: [],
        result: void,
    },
    'soft-reload': {
        params: [],
        result: void,
    },
    'change-gizmo-tool': {
        params: [
            string,
        ],
        result: void,
    },
    'query-gizmo-tool-name': {
        params: [],
        result: string,
    },
    'change-gizmo-pivot': {
        params: [
            string,
        ],
        result: void,
    },
    'query-gizmo-pivot': {
        params: [],
        result: string,
    },
    'change-gizmo-coordinate': {
        params: [
            string,
        ],
        result: void,
    },
    'query-gizmo-coordinate': {
        params: [],
        result: string,
    },
    'change-is2D': {
        params: [
            boolean,
        ],
        result: void,
    },
    'query-is2D': {
        params: [],
        result: boolean,
    },
    'set-grid-visible': {
        params: [
            boolean,
        ],
        result: void,
    },
    'query-is-grid-visible': {
        params: [],
        result: boolean,
    },
    'set-icon-gizmo-3d': {
        params: [
            boolean,
        ],
        result: void,
    },
    'query-is-icon-gizmo-3d': {
        params: [],
        result: boolean,
    },
    'set-icon-gizmo-size': {
        params: [
            number,
        ],
        result: void,
    },
    'query-icon-gizmo-size': {
        params: [],
        result: number,
    },
    'focus-camera': {
        params: [
            string[],
        ],
        result: void,
    },
    'align-with-view': {
        params: [],
        result: void,
    },
    'align-view-with-node': {
        params: [],
        result: void,
    },

    'query-is-ready': {
        params: [],
        result: boolean,
    },
    'query-node': {
        params: [
            string,
        ],
        result: INode,
    },
    'query-component': {
        params: [
            string,
        ],
        result: IComponent,
    },
    'query-node-tree': {
        params: [] | [
            string
        ],
        result: INode[],
    },
    'query-nodes-by-asset-uuid': {
        params: [
            string,
        ],
        result: string[],
    },
    'query-dirty': {
        params: [],
        result: boolean,
    },
    'query-classes': {
        params: [
            QueryClassesOptions
        ],
        result: { name: string }[],
    },
    'query-components': {
        params: [],
        result: string[],
    },
    'query-component-has-script': {
        params: [
            string,
        ],
        result: boolean,
    },
    'query-scene-bounds': {
        params: [],
        result: {    
            height: number;
            width: number;
            x: number;
            y: number;
        },
    }
    'is-native': {
        params:[
            queryIsNative
        ]|[],
        result: boolean,
    }
}
