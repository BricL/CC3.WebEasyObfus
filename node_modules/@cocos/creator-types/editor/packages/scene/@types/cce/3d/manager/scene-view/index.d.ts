import { Component } from 'cc';
import { ISceneEvents } from '../scene-events-interface';
import EventEmitter from '../../../public/EventEmitter';
/**
 * 场景视图管理器
 */
export declare class SceneViewManager extends EventEmitter implements ISceneEvents {
    private _sceneViewLight;
    private _isVisible;
    constructor();
    private _makeSureDirectionLightActiveBeforeProjectScene;
    get isVisible(): boolean;
    set isVisible(value: boolean);
    init(): Promise<void>;
    setSceneLightOn(enable: boolean): void;
    querySceneLightOn(): boolean;
    onSceneOpened(scene: any): Promise<void>;
    onComponentAdded(comp: Component): void;
    onComponentRemoved(comp: Component): void;
    onIsSceneLightOn(isEnable: boolean): void;
}
declare const sceneViewManager: SceneViewManager;
export { sceneViewManager };
//# sourceMappingURL=index.d.ts.map