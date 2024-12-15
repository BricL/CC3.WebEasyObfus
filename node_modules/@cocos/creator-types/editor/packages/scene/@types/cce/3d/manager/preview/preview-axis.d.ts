import { Node, Vec3, Camera, Color } from 'cc';
import ControllerBase from '../../../public/gizmos/controller/base';
export declare class PreviewWorldAxis extends ControllerBase {
    _sceneGizmoCamera: Camera;
    private _cameraOffset;
    private _textNodeMap;
    private synchronizeCamera;
    constructor(rootNode: Node, synchronizeCamera: Camera);
    initShape(): void;
    private _hide;
    hide(): void;
    createShapeNode(name: string): void;
    createAxis(axisName: string, color: Color, rotation: Vec3): void;
    createAxisText(axis: string, uuid: string, color: Color): void;
    setTextureByUUID(node: Node, uuid: string): void;
    registerCameraMovedEvent(): void;
    onEditorCameraMoved(): void;
}
//# sourceMappingURL=preview-axis.d.ts.map