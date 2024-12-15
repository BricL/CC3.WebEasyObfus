import UtilsInterface from './utils-interface';
export declare class Utils3D extends UtilsInterface {
    constructor();
    requestPointerLock(): void;
    exitPointerLock(): void;
    emitNodeMessage(message: string, ...params: any[]): void;
    broadcastMessage(message: string, ...params: any[]): void;
    onNodeChanged(node: any, ...param: any[]): void;
    repaintEngine(): void;
    recordChanges(nodes: string[]): string;
    commitChanges(undoID: string): void;
    select(uuid: string): void;
    changePointer(type: string): void;
}
declare const _default: Utils3D;
export default _default;
//# sourceMappingURL=3d.d.ts.map