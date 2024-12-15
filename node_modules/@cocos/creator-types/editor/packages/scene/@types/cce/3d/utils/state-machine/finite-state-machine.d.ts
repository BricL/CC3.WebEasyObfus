import IState from './state-interface';
import { Transition } from './transition';
declare class FiniteStateMachine<TState extends IState> {
    currentState: TState;
    private _states;
    private _transitions;
    constructor(states: TState[]);
    addTransition(from: TState, to: TState, command: string, transition?: Transition<TState>): FiniteStateMachine<TState>;
    addTransition(from: TState, to: TState, command: string, condition: Function): FiniteStateMachine<TState>;
    Begin(firstState: TState): this;
    issueCommand(command: string, opts?: any): Promise<boolean>;
}
export default FiniteStateMachine;
//# sourceMappingURL=finite-state-machine.d.ts.map