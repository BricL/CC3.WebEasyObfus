import EventEmitter from '../../../public/EventEmitter';
export declare class PreviewPlay extends EventEmitter {
    private _currSceneData;
    private _state;
    private _fps;
    private _onSceneLaunch;
    private _onSceneBeforeLaunch;
    private _onDirectorEndFrame;
    private _windowKeys;
    private _scene;
    private _updateInspectorHandler;
    private _sceneLightOn;
    private _isNative;
    startSceneJson: any;
    private _rotate;
    get sceneLightOn(): boolean;
    constructor();
    getGameScene(sceneJson?: string): Promise<unknown>;
    beforeLaunch(): void;
    /**
     * 旋转屏幕
     * @param rotate true横屏false竖屏，默认竖屏
     */
    rotateScene(rotate: boolean): void;
    setResolution(width: number, height: number): void;
    showState(show: boolean): void;
    setFps(fps: number): void;
    isPause(): boolean;
    firstResume: boolean;
    pause(isPause: boolean): Promise<void>;
    /**
     * 步进
     */
    step(): Promise<void>;
    /**
     * 进入gameview
     * @param sceneJson:当前场景的json
     */
    start(sceneJson?: string): Promise<void>;
    /**
     * 退出gameview
     */
    stop(): Promise<void>;
    hideEditorCamera(): void;
    showEditorCamera(): void;
    setPlatform(platform: string): void;
    onSceneLaunch(scene: any): void;
    onSceneBeforeLaunch(scene: any): void;
    onDirectorEndFrame(): void;
    /**
     * 选中节点时,由于不是所有改动都会触发node-change,比如node.active
     * 这样会导致inspector界面没有准确更新数据,
     * 添加一个定时器,定时触发消息更新inspector
     */
    private _updateInspector;
    private _recordGlobal;
    private _resetGlobal;
    private _registerEvent;
    private _unregisterEvent;
}
declare const preview: PreviewPlay;
export default preview;
//# sourceMappingURL=index.d.ts.map