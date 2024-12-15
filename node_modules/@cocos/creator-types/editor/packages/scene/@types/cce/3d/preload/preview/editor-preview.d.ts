/**
 * 编辑器预览时，加载编辑器代码等操作
 */
import { InitInfo } from '../../manager/startup';
declare class EditorPreview {
    engineInfo: InitInfo;
    start(): Promise<void>;
    private _startEngine;
    private _startEditor;
    private _startPreview;
}
declare const _default: EditorPreview;
export default _default;
//# sourceMappingURL=editor-preview.d.ts.map