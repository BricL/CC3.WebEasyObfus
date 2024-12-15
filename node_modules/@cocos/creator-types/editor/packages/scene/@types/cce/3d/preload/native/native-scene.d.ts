/// <reference types="node" />
import { IRectLike } from '../../../../../@types/private';
declare class NativeWindow {
    handler: number;
    x: number;
    y: number;
    width: number;
    height: number;
    constructor(x: number, y: number, handle: Buffer);
    setVisible(v: boolean): void;
    setPos(x: number, y: number): void;
    setSize(w: number, h: number): void;
    updateContextID(): void;
    renderWindow: any;
}
declare class NativeScene {
    windowMap: Map<string, NativeWindow>;
    intervalHandle: NodeJS.Timeout | null;
    redrawTimes: number;
    constructor();
    createWindow(rect: IRectLike, name: string, editorHandle: string): {
        handler: number;
        isPreviewProcess: boolean;
    };
    close(name: string): void;
    resize(x: number, y: number, width: number, height: number, name: string): Promise<number | undefined>;
    /**
     * change scene's cameras's target window to new window;
     * @param name target window name
     */
    redirectTargetWindow(name: string, toEmpty?: boolean): number;
    handleInput(type: string, event: any): Promise<void>;
    setVisible(name: string, visible: boolean): Promise<number | undefined>;
    redraw(): Promise<unknown>;
    sendToBrowser(method: string, ...args: any[]): void;
}
declare const _default: NativeScene;
export default _default;
//# sourceMappingURL=native-scene.d.ts.map