import { ISceneMouseEvent, ISceneKeyboardEvent } from '../../../../../../../@types/private';
import { ModeBase } from './mode-base';
declare class WanderMode extends ModeBase {
    private _curMouseDX;
    private _curMouseDY;
    private _rotateSpeed;
    private _movingSpeedShiftScale;
    private _damping;
    private _wanderSpeed;
    private _flyAcceleration;
    private _shiftKey;
    private _velocity;
    private _wanderKeyDown;
    private _destPos;
    private _destRot;
    private _wanderSpeedTarget;
    private _wanderAnim;
    private _enableAcceleration;
    get wanderSpeed(): number;
    set wanderSpeed(value: number);
    get enableAcceleration(): boolean;
    set enableAcceleration(value: boolean);
    enter(): Promise<void>;
    exit(): Promise<void>;
    /**
     * 当mouseMove事件发送比较频繁的时候，update的更新频率跟不上，会导致moveDeltaX的数据丢失
     * 因些在更新前需要对移动的距离进行累加，方便update的时候更新，避免数据的丢失，并且在更新后清空
     * @param event
     * @returns
     */
    onMouseMove(event: ISceneMouseEvent): boolean;
    onMouseWheel(event: ISceneMouseEvent): void;
    onKeyDown(event: ISceneKeyboardEvent): void;
    onKeyUp(event: ISceneKeyboardEvent): void;
    onUpdate(deltaTime: number): void;
}
export { WanderMode };
//# sourceMappingURL=wander-mode.d.ts.map