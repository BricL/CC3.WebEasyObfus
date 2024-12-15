import * as animationApi from 'cc/editor/new-gen-anim';
import { Node } from 'cc';
import { AnimationGraphPreviewBase, PreviewState } from './base';
type Motion = NonNullable<animationApi.MotionState['motion']>;
declare class MotionPreview extends AnimationGraphPreviewBase<animationApi.MotionPreviewer> {
    motion: Motion | null;
    hide(): void;
    show(motion: Motion | null, animationGraph: animationApi.AnimationGraph | null): PreviewState.NO_ERROR | PreviewState.NO_ANIMATION_GRAPH | PreviewState.NO_MODEL | PreviewState.ILLEGAL_MOTION;
    setProp(): void;
    protected createPreviewer(root: Node): animationApi.MotionPreviewer;
    protected getLightName(): string;
    protected getUpdateMessageName(): string;
}
export { MotionPreview, PreviewState };
//# sourceMappingURL=motion.d.ts.map