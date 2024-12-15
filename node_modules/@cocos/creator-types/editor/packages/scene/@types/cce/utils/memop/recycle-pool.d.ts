/**
 * @category memop
 */
/**
 * @zh 循环对象池。
 */
export declare class RecyclePool<T = any> {
    private _fn;
    private _count;
    private _data;
    /**
     * 构造函数。
     * @param fn 对象构造函数。
     * @param size 初始大小。
     */
    constructor(fn: () => T, size: number);
    /**
     * @zh 对象池大小。
     */
    get length(): number;
    /**
     * @zh 对象池数组。
     */
    get data(): T[];
    /**
     * @zh 清空对象池。
     */
    reset(): void;
    /**
     * @zh 设置对象池大小。
     * @param size 对象池大小。
     */
    resize(size: number): void;
    /**
     * @zh 从对象池中取出一个对象。
     */
    add(): T;
    /**
     * @zh 释放对象池中的一个元素。
     * @param idx 释放对象的索引。
     */
    removeAt(idx: number): void;
}
//# sourceMappingURL=recycle-pool.d.ts.map