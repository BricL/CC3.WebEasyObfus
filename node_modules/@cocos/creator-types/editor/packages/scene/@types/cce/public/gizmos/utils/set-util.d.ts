/**
 * Examples
 * let setA = new Set([1, 2, 3, 4]),
 *     setB = new Set([2, 3]),
 *     setC = new Set([3, 4, 5, 6]);
 *
 * isSuperset(setA, setB);          // => true
 * union(setA, setC);               // => Set [1, 2, 3, 4, 5, 6]
 * intersection(setA, setC);        // => Set [3, 4]
 * symmetricDifference(setA, setC); // => Set [1, 2, 5, 6]
 * difference(setA, setC);          // => Set [1, 2]
 */
export default class SimpleSet<T> extends Set<T> {
    map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): Array<U>;
    mapSet<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): SimpleSet<U>;
    clone(): SimpleSet<T>;
    addAll(items: Iterable<T>): void;
    deleteAll(items: Iterable<T>): void;
    equals(setB: SimpleSet<T>): boolean;
    toArray(): T[];
    union(setB: SimpleSet<T>): SimpleSet<T>;
    intersection(setB: SimpleSet<T>): SimpleSet<T>;
    symmetricDifference(setB: SimpleSet<T>): SimpleSet<T>;
    difference(setB: SimpleSet<T>): SimpleSet<T>;
    filter(callbackfn: (value: T, index: T, array: Set<T>) => boolean, thisArg?: any): SimpleSet<T>;
}
export declare function toSet<T>(array: Array<T>): SimpleSet<T>;
//# sourceMappingURL=set-util.d.ts.map