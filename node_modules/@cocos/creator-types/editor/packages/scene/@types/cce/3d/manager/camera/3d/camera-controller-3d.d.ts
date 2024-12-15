import { ISceneMouseEvent, ISceneKeyboardEvent, EditorCameraInfo } from '../../../../../../@types/private';
import CameraControllerBase from '../camera-controller-base';
import LinearTicks from '../grid/linear-ticks';
import { CameraMoveMode } from '../utils';
import { Camera, Color, Vec3 } from 'cc';
declare enum ModeCommand {
    ToIdle = "toIdle",
    ToPan = "toPan",
    ToOrbit = "toOrbit",
    ToWander = "toWander"
}
export interface ICameraController3DEvent {
    'projection-changed': (projectType: Camera.ProjectionType) => void;
    'mode': (cameraMoveMode: CameraMoveMode) => void;
    'camera-move-mode': (cameraMoveMode: CameraMoveMode) => void;
}
/**
 * 滚轮缩放的平滑函数
 * @param delta
 * @returns
 */
export declare function smoothMouseWheelScale(delta: number): number;
declare class CameraController3D extends CameraControllerBase {
    on<E extends keyof ICameraController3DEvent>(event: E, callback: ICameraController3DEvent[E]): this;
    once<E extends keyof ICameraController3DEvent>(event: E, callback: ICameraController3DEvent[E]): this;
    emit<E extends keyof ICameraController3DEvent>(event: E, ...parameters: Parameters<ICameraController3DEvent[E]>): boolean;
    private v3a;
    private v3b;
    private v3c;
    private v3d;
    /** 3d 下滚轮的速度，这个速度会由用户配置 */
    protected _wheelSpeed: number;
    protected _near: number;
    protected _far: number;
    /** 在投影为 ortho 时对滚轮数值乘上这个系数 */
    protected readonly _orthoScale = 0.1;
    /** scalar 的最小值 */
    protected readonly _minScalar = 0.1;
    private homePos;
    private homeRot;
    private _sceneViewCenter;
    viewDist: number;
    private forward;
    private _curRot;
    private _curEye;
    private _lineColor;
    private _modeFSM;
    private _idleMode;
    private _orbitMode;
    private _panMode;
    private _wanderMode;
    isMoving(): boolean;
    view?: number;
    hTicks: LinearTicks;
    vTicks: LinearTicks;
    shiftKey?: boolean;
    altKey?: boolean;
    get lineColor(): Color;
    set lineColor(value: Color);
    get sceneViewCenter(): Vec3;
    set sceneViewCenter(value: Vec3);
    get wanderSpeed(): number;
    set wanderSpeed(value: number);
    get enableAcceleration(): boolean;
    set enableAcceleration(value: boolean);
    init(camera: Camera): void;
    private _initMode;
    private _initLinearTick;
    set active(value: boolean);
    changeMode(modeCommand: ModeCommand): void;
    /**
     * 还原数据
     */
    reset(): void;
    /**
     * 根据传入的视线长度来更新当前场景视图的中心点
     * @param {*} viewDist
     */
    updateViewCenterByDist(viewDist: number): void;
    /**
     * 缩放
     * @param {*} delta
     */
    scale(delta: number): void;
    smoothScale(delta: number): number;
    lastFocusNodeUUID: string[];
    /**
     * 焦点转向某个节点
     * 如果传入 nodes，则转向这些节点
     * 如果未传入 nodes，则转向场景中心
     * @param nodeUuids
     * @param editorCameraInfo
     * @param immediate
     */
    focus(nodeUuids?: string[] | null, editorCameraInfo?: EditorCameraInfo, immediate?: boolean): void;
    alignNodeToSceneView(nodeUuids: string[]): Promise<void>;
    private alignCameraOrthoHeightToNode;
    alignSceneViewToNode(nodeUuids: string[]): void;
    onMouseDown(event: ISceneMouseEvent): boolean;
    onMouseMove(event: ISceneMouseEvent): boolean;
    onMouseUp(event: ISceneMouseEvent): boolean;
    onMouseWheel(event: ISceneMouseEvent): void;
    onKeyDown(event: ISceneKeyboardEvent): void;
    onKeyUp(event: ISceneKeyboardEvent): void;
    onUpdate(deltaTime: number): void;
    _updateGridData(positions: number[], colors: number[], lineColor: Color, lineEnd?: number | null): void;
    updateGrid(): void;
    refresh(): void;
    rotateCameraToDir(dir: Vec3, rotateByViewDist: boolean): void;
    getDepthSize(): number;
    calcCameraPosInOrtho(): Vec3;
    isOrtho(): boolean;
    setOrthoHeight(newOrthoHeight: number): void;
    changeProjection(): void;
    onResize(): void;
    zoomUp(): void;
    zoomDown(): void;
}
export { CameraController3D };
//# sourceMappingURL=camera-controller-3d.d.ts.map