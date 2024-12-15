/// <reference types="node" />
import { EventEmitter } from 'events';
declare class EventManager extends EventEmitter {
    emit(event: string | symbol, ...args: any[]): boolean;
}
export default EventManager;
//# sourceMappingURL=EventEmitter.d.ts.map