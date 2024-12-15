import { ISceneFacadeState } from './scene-facade-state-interface';
import { Transition } from '../utils/state-machine/transition';
declare class ToAnimationTransition<TState extends ISceneFacadeState> extends Transition<TState> {
    constructor(from: TState, to: TState, testConditionFunc?: Function | null);
    testCondition(): Promise<boolean>;
    Complete(): Promise<void>;
}
declare class ToGeneralTransition<TState extends ISceneFacadeState> extends Transition<TState> {
    constructor(from: TState, to: TState, testConditionFunc?: Function | null);
    testCondition(): Promise<boolean>;
}
declare class ToPreviewTransition<TState extends ISceneFacadeState> extends Transition<TState> {
    constructor(from: TState, to: TState, testConditionFunc?: Function | null);
    Complete(): Promise<void>;
}
declare class ToPrefabTransition<TState extends ISceneFacadeState> extends Transition<TState> {
    constructor(from: TState, to: TState, testConditionFunc?: Function | null);
    testCondition(): Promise<boolean>;
    Complete(): Promise<void>;
}
export { ToAnimationTransition, ToGeneralTransition, ToPrefabTransition, ToPreviewTransition };
//# sourceMappingURL=scene-facade-state-transition.d.ts.map