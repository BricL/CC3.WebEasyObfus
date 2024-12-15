import * as animationApi from 'cc/editor/new-gen-anim';
import { InteractivePreview } from '../preview/Interactive-preview';
import { Scene, Node } from 'cc';
interface previewVariableParam {
    name: string;
    value: any;
}
export declare enum PlayState {
    STOP = 0,
    PLAYING = 1,
    PAUSE = 2
}
export declare enum PreviewState {
    NO_ERROR = 0,
    NO_ANIMATION_GRAPH = 1,
    NO_MODEL = 2,
    NO_TRANSITION_SOURCE_MOTION = 3,
    NO_TRANSITION_DESTINATION_MOTION = 4,
    ILLEGAL_MOTION = 5,
    ILLEGAL_TRANSITION = 6
}
export declare abstract class AnimationGraphPreviewBase<T extends animationApi.TransitionPreviewer | animationApi.MotionPreviewer> extends InteractivePreview {
    active: boolean;
    PreviewState: typeof PreviewState;
    private model;
    private light;
    private updateIntervalId;
    private playTime;
    private playFPS;
    init(registerName: string, queryName: string): void;
    reset(): void;
    hide(): void;
    createNodes(scene: Scene): void;
    hasModel(): boolean;
    setModel(modelUuid: string): Promise<void>;
    play(): void;
    pause(): void;
    stop(): void;
    setTime(time: number): void;
    setVariables(animationGraph: animationApi.AnimationGraph): void;
    updateVariable(variableParams: previewVariableParam[]): void;
    removeVariable(name: string): void;
    update(): void;
    protected playState: PlayState;
    protected previewer: T;
    protected abstract createPreviewer(root: Node): T;
    protected abstract getLightName(): string;
    protected abstract getUpdateMessageName(): string;
}
export {};
//# sourceMappingURL=base.d.ts.map