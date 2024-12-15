import { Rect, Vec2 } from 'cc';
import { MVec2 } from './vec2';
import { MVec3 } from './vec3';
import { MMat3 } from './mat3';
import { MMat4 } from './mat4';
import { MQuat } from './quat';
/**
 * [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
 */
declare class EditorMath {
    /**
     * @property {number} EPSILON
     */
    static EPSILON: number;
    /**
     * @property {number} MACHINE_EPSILON
     */
    static MACHINE_EPSILON: number;
    /**
     * @property {number} TWO_PI - Two Pi
     */
    static TWO_PI: number;
    /**
     * @property {number} HALF_PI - Half Pi
     */
    static HALF_PI: number;
    /**
     * @property {number} D2R - degree to radius
     */
    static D2R: number;
    /**
     * @property {number} R2D - radius to degree
     */
    static R2D: number;
    static MVec2: MVec2;
    static MVec3: MVec3;
    static MMat3: MMat3;
    static MMat4: MMat4;
    static MQuat: MQuat;
    /**
     * @method deg2rad
     * @param {number} degree
     * @return {number} radius
     *
     * degree to radius
     */
    static deg2rad(degree: number): number;
    /**
     * @method rad2deg
     * @param {number} radius
     * @return {number} degree
     *
     * Radius to degree
     */
    static rad2deg(radius: number): number;
    /**
     * @method rad180
     * @param {number} radius
     * @return {number} clamped radius
     *
     * Let radius in -pi to pi
     */
    static rad180(radius: number): number;
    /**
     * @method rad360
     * @param {number} radius
     * @return {number} clamped radius
     *
     * Let radius in 0 to 2pi
     */
    static rad360(radius: number): number;
    /**
     * @method deg180
     * @param {number} degree
     * @return {number} clamped degree
     *
     * Let degree in -180 to 180
     */
    static deg180(degree: number): number;
    /**
     * @method deg360
     * @param {number} degree
     * @return {number} clamped degree
     *
     * Let degree in 0 to 360
     */
    static deg360(degree: number): number;
    /**
     * @method randomRange
     * @param {number} min
     * @param {number} max
     * @return {number} the random number
     *
     * Returns a random floating-point number between min (inclusive) and max (exclusive).
     */
    static randomRange(min: number, max: number): number;
    /**
     * @method randomRangeInt
     * @param {number} min
     * @param {number} max
     * @return {number} the random integer
     *
     * Returns a random integer between min (inclusive) and max (exclusive).
     */
    static randomRangeInt(min: number, max: number): number;
    /**
     * @method clamp
     * @param {number} val
     * @param {number} min
     * @param {number} max
     * @return {number}
     *
     * Clamps a value between a minimum float and maximum float value.
     */
    static clamp: typeof _clamp;
    /**
     * @method clamp01
     * @param {number} val
     * @return {number}
     *
     * Clamps a value between 0 and 1.
     */
    static clamp01(val: number): number;
    /**
     * @method calculateMaxRect
     * @param {rect} out
     * @param {vec2} p0
     * @param {vec2} p1
     * @param {vec2} p2
     * @param {vec2} p3
     * @return {rect} just the out rect itself
     */
    static calculateMaxRect(out: Rect, p0: Vec2, p1: Vec2, p2: Vec2, p3: Vec2): Rect;
    /**
     * @method lerp
     * @param {number} from
     * @param {number} to
     * @param {number} ratio - the interpolation coefficient
     * @return {number}
     */
    static lerp(from: number, to: number, ratio: number): number;
    /**
     * @method numOfDecimals
     *
     * Get number of decimals for decimal part
     */
    static numOfDecimals(val: number): number;
    /**
     * @method numOfDecimalsF
     *
     * Get number of decimals for fractional part
     */
    static numOfDecimalsF(val: number): number;
    /**
     * @method toPrecision
     */
    static toPrecision(val: number, precision: number): number;
    /**
     * @method bezier
     * @param {number} c0
     * @param {number} c1
     * @param {number} c2
     * @param {number} c3
     * @param {number} t - the ratio
     */
    static bezier(c0: number, c1: number, c2: number, c3: number, t: number): number;
    /**
     * @method solveCubicBezier
     * @param {number} c0
     * @param {number} c1
     * @param {number} c2
     * @param {number} c3
     * @param {number} x
     */
    static solveCubicBezier(c0: number, c1: number, c2: number, c3: number, x: number): number;
}
export default EditorMath;
declare function _clamp(val: number, min: number, max: number): number;
//# sourceMappingURL=index.d.ts.map