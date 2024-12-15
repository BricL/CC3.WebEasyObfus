import { Node, Vec3, Camera, Color, Texture2D } from 'cc';
import ControllerBase from './base';
import type { GizmoMouseEvent } from '../utils/defines';
declare class WorldAxisController extends ControllerBase {
    private _defaultSize;
    private _sceneGizmoCamera;
    private _cameraOffset;
    private _viewDist;
    private _textNodeMap;
    constructor(rootNode: Node, sceneGizmoCamera: Camera);
    createAxis(axisName: string, color: Color, rotation: Vec3): void;
    initShape(): void;
    setTexture(node: Node, texture: Texture2D | null): void;
    setTextureByUUID(node: Node, uuid: string): void;
    createAxisText(axis: string, uuid: string, color: Color): void;
    onMouseUp(event: GizmoMouseEvent): void;
    onHoverIn(event: GizmoMouseEvent): void;
    onHoverOut(event: GizmoMouseEvent<{
        hoverInNodeMap: Map<Node, boolean>;
    }>): void;
    onEditorCameraMoved(): void;
    onCameraProjectionChanged(projection: number): void;
}
export default WorldAxisController;
//# sourceMappingURL=world-axis.d.ts.map