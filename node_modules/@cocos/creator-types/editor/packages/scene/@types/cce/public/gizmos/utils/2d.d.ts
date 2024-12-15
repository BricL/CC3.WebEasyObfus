import UtilsInterface from './utils-interface';
export declare class Utils2D extends UtilsInterface {
    constructor();
    requestPointerLock(): void;
    exitPointerLock(): void;
    emitNodeMessage(message: string, ...params: any[]): void;
    broadcastMessage(message: any, ...params: any[]): void;
    onNodeChanged(node: any, ...params: any[]): void;
    getGizmoRoot(): any;
    repaintEngine(): void;
    recordChanges(nodes: {
        forEach: (arg0: (node: any) => void) => void;
    }): void;
    commitChanges(nodes: any): void;
}
declare const _default: Utils2D;
export default _default;
//# sourceMappingURL=2d.d.ts.map