declare class LinearTicks {
    ticks: number[];
    tickLods: number[];
    tickRatios: number[];
    minScale: number;
    maxScale: number;
    minValueScale: number;
    maxValueScale: number;
    minValue: number;
    maxValue: number;
    pixelRange: number;
    minSpacing: number;
    maxSpacing: number;
    minTickLevel: number;
    maxTickLevel: number;
    constructor();
    initTicks(lods: number[], min: number, max: number): this;
    spacing(min: number, max: number): this;
    /**
     * 根据参数调整当前的刻度等级
     * @param {*} minValue 传入起始值
     * @param {*} maxValue 传入结束值
     * @param {*} range 传入所显示的范围
     */
    range(minValue: number, maxValue: number, range: number): this;
    /**
     * 获取某个缩放等级下所有刻度值
     * @param {*} level 等级
     * @param {*} excludeHigherLevel 是否排除更高等级
     */
    ticksAtLevel(level: number, excludeHigherLevel: boolean): number[];
    levelForStep(step: number): number;
}
export default LinearTicks;
//# sourceMappingURL=linear-ticks.d.ts.map