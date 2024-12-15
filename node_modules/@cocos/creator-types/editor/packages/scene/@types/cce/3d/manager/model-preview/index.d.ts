import { Scene } from 'cc';
import { InteractivePreview } from '../preview/Interactive-preview';
interface IModelInfo {
    vertices: number;
    polygons: number;
}
declare enum PlayState {
    STOP = 0,
    PLAYING = 1,
    PAUSE = 2
}
declare class ModelPreview extends InteractivePreview {
    private lightComp;
    private _modelInfo;
    private _modelUUID?;
    private _curEditClipUuid;
    private _curEditClipRawClipIndex;
    private _curEditTime;
    private _needRecallPlay;
    private _animationStateMap;
    private _eventTarget;
    private _curPlaybackRange;
    private _animUpdateInterval;
    private _curPlayState;
    private _fps;
    init(registerName: string, queryName: string): void;
    createNodes(scene: Scene): void;
    onSceneViewVisible(visible: boolean): void;
    setModel(uuid: string): Promise<unknown>;
    resetCamera(): void;
    getModelInfo(): IModelInfo;
    setLightEnable(enable: boolean): void;
    hide(): void;
    executeAnimationOperation(funcName: string, args?: any[]): Promise<void>;
    private _registerAnimStateEvents;
    private _unregisterAnimStateEVents;
    setEditClip(clipUUID: string, rawClipIndex: number): void;
    private getAnimationState;
    private addUpdateListener;
    private initAnimation;
    update(): Promise<void>;
    /**
     * 播放一个节点上的指定动画
     * @param {string} clipUUID 需要播放的动画的uuid
     */
    play(clipUUID?: string): Promise<boolean>;
    /**
     * 停止一个节点上所有动画
     */
    stop(): Promise<boolean>;
    /**
     * 暂停一个节点上正在播放的动画
     */
    pause(): Promise<boolean>;
    /**
     * 恢复一个节点上被暂停的动画
     */
    resume(): Promise<boolean>;
    private _onAnimPlay;
    private _onAnimPause;
    private _onAnimResume;
    private _onAnimStopped;
    private _onAnimPlayEnd;
    changePlayState(newState: PlayState): void;
    /**
     * 查询播放的clip的当前所在时间
     * @param {*} clipUuid clip的uuid
     */
    queryPlayingClipTime(clipUUID?: string | null): Promise<number>;
    /**
     * 设置当前编辑的关键帧时间点
     * @param {number} time 时间
     */
    setCurEditTime(time: number): Promise<boolean>;
    /**
     * 设置播放区间
     * @param start 起始位置
     * @param end 终止位置
     */
    setPlaybackRange(start: number, end: number): Promise<boolean>;
    clearUpdateListener(): void;
    setClipConfig(config: {
        wrapMode: number;
        speed: number;
    }): Promise<boolean>;
}
export { ModelPreview };
//# sourceMappingURL=index.d.ts.map