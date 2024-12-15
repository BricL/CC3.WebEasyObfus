import { InitialEditorData } from './private';

declare module 'cc/editor/new-gen-anim' {
    import { editorExtrasTag } from 'cc';

    interface PoseGraph {
        [editorExtrasTag]?: {
            rootOutputNodeEditorData?: InitialEditorData;
        } & InitialEditorData;
    }

    namespace poseGraphOp {
        interface PoseGraphNodeShell {
            [editorExtrasTag]?: InitialEditorData;
        }
    }
}