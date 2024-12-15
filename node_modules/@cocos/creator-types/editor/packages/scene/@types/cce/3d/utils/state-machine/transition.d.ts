import IState from './state-interface';
declare class Transition<TState extends IState> {
    fromState: TState;
    toState: TState;
    testConditionFunc: Function | null;
    constructor(from: TState, to: TState, testConditionFunc?: Function | null);
    testCondition(opts?: any): Promise<boolean>;
    Complete(): Promise<void>;
}
declare class DefaultStateTransition<TState extends IState> extends Transition<TState> {
    constructor(from: TState, to: TState, testConditionFunc?: Function | null);
}
export { Transition, DefaultStateTransition };
//# sourceMappingURL=transition.d.ts.map