declare class EventEmitter {
    private _eventListenerMap;
    constructor();
    on(event: string, func: Function): void;
    off(event: string, func: Function): void;
    emit(event: string, ...args: any[]): false | undefined;
}
export { EventEmitter };
//# sourceMappingURL=event-emitter.d.ts.map