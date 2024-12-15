export default class Pool<T> {
    private _fn;
    private _idx;
    private _frees;
    constructor(fn: () => T, size: number);
    alloc(): T;
    free(obj: T): void;
    clear(fn: (obj: T) => void): void;
    private _expand;
}
//# sourceMappingURL=pool.d.ts.map