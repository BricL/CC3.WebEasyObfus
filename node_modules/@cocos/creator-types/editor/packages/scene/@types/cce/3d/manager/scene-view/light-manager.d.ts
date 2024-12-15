import { Component, LightComponent } from 'cc';
/**
 * 场景的灯光管理器
 */
declare class LightManager {
    private _lights;
    onSceneOpened(scene: any, isSceneLightOn: boolean): void;
    onComponentAdded(comp: Component): void;
    onComponentRemoved(comp: Component): void;
    disableSceneLights(): void;
    enableSceneLights(): void;
    overrideLightCompFunc(comp: LightComponent): void;
}
declare const lightManager: LightManager;
export { lightManager };
//# sourceMappingURL=light-manager.d.ts.map