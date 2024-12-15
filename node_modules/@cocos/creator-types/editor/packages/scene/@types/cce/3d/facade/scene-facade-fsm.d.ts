import { ISceneFacadeState } from './scene-facade-state-interface';
import AnimationSceneFacade from './animation-scene-facade';
import GeneralSceneFacade from './general-scene-facade';
import PrefabSceneFacade from './prefab-scene-facade';
import PreviewSceneFacade from './preview-scene-facade';
import FiniteStateMachine from '../utils/state-machine/finite-state-machine';
declare class SceneFacadeFSM extends FiniteStateMachine<ISceneFacadeState> {
    generalSceneFacade: GeneralSceneFacade;
    animationSceneFacade: AnimationSceneFacade;
    prefabSceneFacade: PrefabSceneFacade;
    previewSceneFacade: PreviewSceneFacade;
    start(): void;
    toGeneral(opts?: any): Promise<boolean>;
    toAnimation(opts?: any): Promise<boolean>;
    toPrefab(opts?: any): Promise<boolean>;
    toPreview(opts?: any): Promise<boolean>;
    dumpAllScenes(): Promise<any>[];
    restoreAllScenes(dump: any[]): void;
    closeScene(): Promise<boolean>;
    closeSceneToGeneral(): Promise<false | undefined>;
}
declare function createSceneFacadeFSM(): SceneFacadeFSM;
export { createSceneFacadeFSM, SceneFacadeFSM };
//# sourceMappingURL=scene-facade-fsm.d.ts.map