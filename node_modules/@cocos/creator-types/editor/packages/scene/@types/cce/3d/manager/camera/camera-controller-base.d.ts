/// <reference types="node" />
import { Node, Camera, Vec3, MeshRenderer, ISizeLike } from 'cc';
import { EventEmitter } from 'events';
import { CameraMoveMode } from './utils';
import { EditorCameraInfo } from '../../../../../@types/private';
declare abstract class CameraControllerBase extends EventEmitter {
    protected _camera: Camera;
    protected camera_move_mode: CameraMoveMode;
    protected _gridMeshComp: MeshRenderer;
    protected _gridNode: Node;
    node: Node;
    protected _isGridVisible: boolean;
    protected _near: number;
    protected _far: number;
    protected _wheelSpeed: number;
    /** 所有滚轮事件将会乘上这个系数 */
    protected _wheelBaseScale: number;
    get near(): number;
    set near(value: number);
    get far(): number;
    set far(value: number);
    get wheelSpeed(): number;
    set wheelSpeed(value: number);
    init(camera: Camera): void;
    focus(nodes: string[], editorCameraInfo?: EditorCameraInfo, immediate?: boolean): void;
    alignNodeToSceneView(nodes: string[]): void;
    alignSceneViewToNode(nodes: string[]): void;
    abstract isMoving(): boolean;
    onMouseDown(event: any): void;
    onMouseMove(event: any): void;
    onMouseUp(event: any): void;
    onMouseWheel(event: any): void;
    onKeyDown(event: any): void;
    onKeyUp(event: any): void;
    onResize(size: ISizeLike): void;
    onUpdate(deltaTime: number): void;
    onDesignResolutionChange(): void;
    refresh(): void;
    updateGrid(): void;
    showGrid(visible: boolean): void;
    set isGridVisible(value: boolean);
    get isGridVisible(): boolean;
    rotateCameraToDir(dir: Vec3, rotateByViewDist: boolean): void;
    changeProjection(): void;
    zoomUp(): void;
    zoomDown(): void;
    zoomReset(): void;
}
export default CameraControllerBase;
//# sourceMappingURL=camera-controller-base.d.ts.map