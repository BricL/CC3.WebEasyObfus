import { ISizeLike } from 'cc';
import { IDragEvent, ISceneKeyboardEvent, ISceneMouseEvent } from '../../../../@types/private';
export type SceneMouseEvent = 'mousedown' | 'mousemove' | 'mouseup' | 'mousewheel';
export type SceneKeyboardEvent = 'keydown' | 'keyup';
export type SceneDragEvent = 'onDragOver' | 'onDrop';
export type OperationEvent = SceneDragEvent | SceneKeyboardEvent | SceneMouseEvent | 'resize';
/**
 * 所有场景的操作管理
 */
declare class Operation {
    _debug: boolean;
    _debugNode: HTMLElement | null;
    private _events;
    constructor();
    /**
     * 锁定鼠标
     */
    requestPointerLock(): void;
    /**
     * 退出锁定鼠标
     */
    exitPointerLock(): void;
    /**
     * 更改鼠标样式
     * @param {*} type
     */
    changePointer(type: string): void;
    get debug(): boolean;
    set debug(debug: boolean);
    updateDebugUI(debug: boolean): void;
    /**
     * 发送
     * @param {*} message
     * @param  {...any} args
     */
    private _emit;
    emit(type: SceneKeyboardEvent, arg: ISceneKeyboardEvent): void;
    emit(type: SceneMouseEvent, arg: ISceneMouseEvent): void;
    emit(type: SceneDragEvent, arg: IDragEvent): void;
    emit(type: 'resize', arg: ISizeLike): void;
    /**
     * 发送鼠标相关事件
     * @param {*} message
     * @param  {...any} args
     */
    private _emitMouseEvent;
    /**
     * 重写 on 方法
     * @param {String} type
     * @param {Function} listener
     * @param {Number} priority 数值越大优先级越高
     * @memberof Operation
     */
    on(type: SceneKeyboardEvent, listener: (event: ISceneKeyboardEvent) => boolean | void, priority?: number | undefined): this;
    on(type: SceneMouseEvent, listener: (event: ISceneMouseEvent) => boolean | void, priority?: number | undefined): this;
    on(type: SceneDragEvent, listener: (event: IDragEvent) => boolean | any, priority?: number | undefined): this;
    on(type: 'resize', listener: (size: ISizeLike) => any, priority?: number | undefined): this;
    /**
     * 重写 addListener 方法
     * @param {String} type
     * @param {Function} listener
     * @param {Number} priority
     * @memberof Operation
     */
    addListener(type: SceneKeyboardEvent, listener: (event: ISceneKeyboardEvent) => boolean | void, priority?: number | undefined): this;
    addListener(type: SceneMouseEvent, listener: (event: ISceneMouseEvent) => boolean | void, priority?: number | undefined): this;
    addListener(type: SceneDragEvent, listener: (event: IDragEvent) => boolean | any, priority?: number | undefined): this;
    addListener(type: 'resize', listener: (size: ISizeLike) => any, priority?: number | undefined): this;
    /**
     * 移除监听器
     * @param type
     * @param listener
     */
    removeListener(type: SceneKeyboardEvent, listener: (event: ISceneKeyboardEvent) => boolean | void): void;
    removeListener(type: SceneMouseEvent, listener: (event: ISceneMouseEvent) => boolean | void): void;
    removeListener(type: SceneDragEvent, listener: (event: IDragEvent) => boolean | any): void;
    removeListener(type: 'resize', listener: (size: ISizeLike) => any): void;
}
declare const _default: Operation;
export default _default;
export declare enum OperationPriority {
    Preview = 999,
    Gizmo = 99,
    Camera = 98
}
//# sourceMappingURL=index.d.ts.map