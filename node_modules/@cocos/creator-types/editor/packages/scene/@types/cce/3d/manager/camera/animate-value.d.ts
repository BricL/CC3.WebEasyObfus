import { Vec3 } from 'cc';
declare class AnimateValueBase<T> {
    _start: T;
    _target: T;
    _speed: number;
    defaultSpeed: number;
    _isAnimating: boolean;
    _lerpPos: number;
    constructor(value: Readonly<T>);
    get start(): T;
    get target(): T;
    set target(value: T);
    get lerpPos(): number;
    get value(): T;
    set value(inValue: T);
    get isAnimating(): boolean;
    protected startAnimating(inStart: T, inTarget: T, animSpeed?: number): void;
    protected stopAnimating(inValue: T): void;
    update(dt: number): void;
    protected getValue(): T;
}
export declare class AnimVec3 extends AnimateValueBase<Vec3> {
    private _value;
    constructor(value: Readonly<Vec3>);
    protected getValue(): Vec3;
}
export {};
//# sourceMappingURL=animate-value.d.ts.map