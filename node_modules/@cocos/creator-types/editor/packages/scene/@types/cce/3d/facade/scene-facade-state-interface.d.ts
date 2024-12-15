import ISceneFacade from '../../../../@types/scene-facade-interface';
import IState from '../utils/state-machine/state-interface';
declare enum SceneModeType {
    General = "general",
    Prefab = "prefab",
    Animation = "animation",
    Preview = "preview",
    Unset = ""
}
interface ISceneFacadeState extends ISceneFacade, IState {
    modeName: string;
    isHold: boolean;
    closeSceneWhenExit: boolean;
    checkToClose(): Promise<boolean>;
    setCloseSceneWhenExit(): void;
    closeSceneState(): Promise<boolean>;
    stagingSceneState(): Promise<boolean>;
    restoreSceneState(dump?: any): Promise<boolean>;
    patchSceneState(): Promise<boolean>;
    dumpSceneState(): Promise<any>;
    fireCloseEvent(): void;
}
export { ISceneFacadeState, SceneModeType };
//# sourceMappingURL=scene-facade-state-interface.d.ts.map