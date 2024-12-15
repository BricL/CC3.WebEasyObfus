/**
 * !#en The interface to get time information from Fireball.
 *
 * See [Time](/en/scripting/time/)
 * !#zh Time 模块用于获得游戏里的时间和帧率相关信息。直接使用 cc.Time.*** 访问即可。
 *
 * 请参考教程[计时和帧率](/zh/scripting/time/)
 *
 * @class Time
 * @static
 */
declare class Time {
    /**
     * The time at the beginning of this frame. This is the time in seconds since the start of the game.
     * @property time
     * @type {number}
     * @readOnly
     */
    time: number;
    /**
     * The time at the beginning of this frame. This is the real time in seconds since the start of the game.
     *
     * `Time.realTime` not affected by time scale, and also keeps increasing while the player is paused in editor or in the background.
     * @property realTime
     * @type {number}
     * @readOnly
     */
    realTime: number;
    /**
     * The time in seconds it took to complete the last frame. Use this property to make your game frame rate independent.
     * @property deltaTime
     * @type {number}
     * @readOnly
     */
    deltaTime: number;
    /**
     * The total number of frames that have passed.
     * @property frameCount
     * @type {number}
     * @readOnly
     */
    frameCount: number;
    /**
     * The maximum time a frame can take.
     * @property maxDeltaTime
     * @type {number}
     * @readOnly
     */
    maxDeltaTime: number;
    /**
     * @method _update
     * @param {number} timestamp
     * @param {Boolean} [paused=false] if true, only realTime will be updated
     * @param {number} [maxDeltaTime=Time.maxDeltaTime]
     * @private
     */
    update(timestamp: number, paused: boolean, maxDeltaTime: number): void;
    /**
     * @method _restart
     * @param {number} timestamp
     * @private
     */
    restart(timestamp: number): void;
}
declare const _default: Time;
export default _default;
//# sourceMappingURL=time.d.ts.map