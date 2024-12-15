/// <reference types="node" />
import { EventEmitter } from 'events';
import { CameraMoveMode } from './utils';
import { Color, Quat, Vec3, renderer, ISizeLike } from 'cc';
import { CameraController2D } from './2d/camera-controller-2d';
import { CameraController3D } from './3d/camera-controller-3d';
import { ISceneEvents } from '../scene-events-interface';
import EditorCameraComponent from './editor-camera-components';
import { EditorCameraInfo } from '../../../../../@types/public';
/**
 * 摄像机管理器
 *
 * 编辑器视角与实际游戏视角是不同的，所以需要单独管理编辑器摄像机。
 * 编辑器模式下，游戏内的其他摄像机需要关闭（现阶段是在引擎内 hack 实现）。
 */
export declare class Camera extends EventEmitter implements ISceneEvents {
    private _controller2D;
    private _controller3D;
    private _controller;
    private _camera;
    private _controllerFirstChange;
    private _currentUuid;
    private _cameraInfos;
    private _cameraUuids;
    get controller2D(): CameraController2D;
    get controller3D(): CameraController3D;
    /**
     * 返回当前的控制器
     */
    get controller(): CameraController2D | CameraController3D;
    /**
     * 设置是否使用 2D 模式显示
     * 规则：
     * 当前场景首次切换时会按照默认切换规则切换
     * 非首次切换时，则仅做切换，保证来回切换时，对应视角不会变化
     */
    set is2D(value: boolean);
    get is2D(): boolean;
    get camera(): EditorCameraComponent;
    protected bindOperation(): void;
    /**
     * 初始化摄像机并挂到场景中
     */
    init(): void;
    initFromConfig(): Promise<void>;
    onSceneOpened(scene: any): void;
    /**
     * 默认相机视角规则：
     * 打开场景时，优先使用缓存配置
     * 无配置时,focus到场景根节点
     *   2D视图下，focus到Canvas节点,无Canvas则focus到场景根节点
     *   3D视图下，focus到场景根节点
     * @param uuid
     */
    defaultFocus(uuid: string): void;
    onSceneClosed(): void;
    saveConfig(): Promise<void>;
    /**
     *
     * @param uuid asset's uuid,not node's uuid
     * @returns
     */
    saveCameraInfos(uuid?: string, write?: boolean): Promise<void>;
    updateForEmptyScene(uuid: string): void;
    getCurCameraInfo(): EditorCameraInfo;
    /**
     * 设置是否使用显示网格
     */
    setGridVisible(value: boolean): void;
    isGridVisible(): boolean;
    setGridLineColor(color: number[]): void;
    getGridLineColor(): Color;
    getCameraFov(): number | undefined;
    getCameraFar(): number;
    getCameraNear(): number;
    getCameraColor(): Color | undefined;
    getCameraISO(): renderer.scene.CameraISO;
    setCameraISO(value: renderer.scene.CameraISO): void;
    setCameraAperture(value: renderer.scene.CameraAperture): void;
    getCameraAperture(value: renderer.scene.CameraAperture): renderer.scene.CameraAperture;
    getCameraShutter(value: renderer.scene.CameraShutter): renderer.scene.CameraShutter;
    setCameraShutter(value: renderer.scene.CameraShutter): void;
    getWheelSpeed(): number;
    setWheelSpeed(value: number): void;
    getWanderSpeed(): number;
    setWanderSpeed(value: number): void;
    getEnableAcceleration(): boolean;
    setEnableAcceleration(value: boolean): void;
    colorToArray(color?: Color): number[];
    arrayToColor(colorArray: number[]): any;
    getCameraProperty(): any;
    setCameraProperty(options: any): void;
    resetCameraProperty(): void;
    /**
     * 焦点转向某个节点
     * 如果传入 nodes，责转向这些节点
     * 如果未传入 nodes，责转向指定的位置场景中心
     * @param {*} nodes
     */
    focus(nodes?: string[] | null, editorCameraInfo?: EditorCameraInfo, immediate?: boolean): void;
    rotateCameraToDir(dir: Vec3, rotateByViewDist: boolean): void;
    changeProjection(): void;
    /**
     * 还原 camera 到某个位置
     */
    reset(position: Vec3, rotation: Quat): void;
    alignNodeToSceneView(nodes: string[]): void;
    alignSceneViewToNode(nodes: string[]): void;
    onMouseDown(event: any): boolean;
    onMouseMove(event: any): boolean;
    onMouseUp(event: any): boolean;
    onMouseWheel(event: any): void;
    onKeyDown(event: any): void;
    onKeyUp(event: any): void;
    /**
     * 漫游模式下
     * 需要不停更新自身的位置数据
     */
    onUpdate(deltaTime: number): void;
    onDesignResolutionChange(): void;
    onResize(size: ISizeLike): Promise<void>;
    refresh(): void;
    zoomUp(): void;
    zoomDown(): void;
    zoomReset(): void;
    getCamera(): renderer.scene.Camera;
    onControl3DModeChanged(mode: CameraMoveMode): void;
    setRulerVisible(visible: boolean): void;
}
declare const _default: Camera;
export default _default;
//# sourceMappingURL=index.d.ts.map