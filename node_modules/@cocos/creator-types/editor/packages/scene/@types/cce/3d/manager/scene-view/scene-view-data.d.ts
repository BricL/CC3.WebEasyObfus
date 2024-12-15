declare const EventEmitter: any;
interface IResolutionData {
    width: number;
    height: number;
}
/**
 * 场景视图相关数据配置
 */
declare class SceneViewData extends EventEmitter {
    private _targetResolution;
    private _targetAspect;
    targetDeviceName: string;
    private _isSceneLightOn;
    get targetResolution(): IResolutionData;
    set targetResolution(value: IResolutionData);
    isGameViewPlaying(): boolean;
    initFromConfig(): Promise<void>;
    saveConfig(): Promise<void>;
    get targetAspect(): number;
    get isSceneLightOn(): boolean;
    set isSceneLightOn(value: boolean);
}
declare const sceneViewData: SceneViewData;
export { SceneViewData, sceneViewData, IResolutionData };
//# sourceMappingURL=scene-view-data.d.ts.map