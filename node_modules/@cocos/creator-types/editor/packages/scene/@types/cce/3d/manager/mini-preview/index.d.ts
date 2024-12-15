import { ISceneEvents } from '../scene-events-interface';
import { CameraComponent, Node } from 'cc';
import { PreviewBase } from '../preview/preview-base';
import { IChangeNodeOptions } from '../../../../../@types/private';
export declare class MiniPreview extends PreviewBase implements ISceneEvents {
    previewNodes: any;
    scene: any;
    renderScene: any;
    currNode: any;
    _previewInfo: any;
    init(registerName: string, queryName: string): void;
    onResize(): void;
    setAspect(srcCamCom: any, tarCam: any): void;
    onNodeChanged(node: Node, opts: IChangeNodeOptions): void;
    onNodeRemoved(node: Node): void;
    handleSelect(uuid: string): void;
    handleUnselect(uuid: string): void;
    onComponentRemoved(comp: CameraComponent): void;
    private clearByComponent;
    removePreviewNode(srcCamera: CameraComponent): void;
    createPreviewNode(srcCamera: CameraComponent): any;
    setPreviewInfo(): void;
    getPreviewInfo(): any;
}
//# sourceMappingURL=index.d.ts.map