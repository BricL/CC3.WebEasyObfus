import * as animationApi from 'cc/editor/new-gen-anim';
import { Node } from 'cc';
import { AnimationGraphPreviewBase, PreviewState } from './base';
declare class TransitionPreview extends AnimationGraphPreviewBase<animationApi.TransitionPreviewer> {
    transition: animationApi.AnimationTransition | null;
    hide(): void;
    show(transition: animationApi.Transition, stateMachine: animationApi.StateMachine, animationGraph: animationApi.AnimationGraph | null): PreviewState.NO_ERROR | PreviewState.NO_ANIMATION_GRAPH | PreviewState.NO_MODEL | PreviewState.NO_TRANSITION_SOURCE_MOTION | PreviewState.NO_TRANSITION_DESTINATION_MOTION | PreviewState.ILLEGAL_TRANSITION;
    setProp(): void;
    protected createPreviewer(root: Node): animationApi.TransitionPreviewer;
    protected getLightName(): string;
    protected getUpdateMessageName(): string;
}
export { TransitionPreview };
//# sourceMappingURL=transition.d.ts.map