import { EventEmitter } from '../../../utils/event-emitter';
import { gfx } from 'cc';
export interface IWindowInfo {
    index: number;
    uuid: string;
    name: string;
    window?: any;
}
declare class PreviewBuffer extends EventEmitter {
    private _name;
    device: any;
    width: number;
    height: number;
    data: Uint8Array;
    renderScene: any;
    scene: any;
    windows: any;
    window: null;
    regions: gfx.BufferTextureCopy[];
    renderData: any;
    queue: any[];
    lock: boolean;
    _registerName?: string;
    constructor(registerName: string, name: string, scene?: any);
    resize(width: number, height: number, window?: any): void;
    /**
     * WARNING: DO'NOT USE IT BEFORE DRAW!!!
     */
    clear(): void;
    createWindow(uuid?: string | null): void;
    removeWindow(uuid: string): void;
    onLoadScene(scene: any): void;
    switchCameras(camera: any, currWindow: any): void;
    needInvertGFXApi: gfx.API[];
    copyFrameBuffer(window?: any): any;
    static indexOfRGBA: number[];
    static indexOfBGRA: number[];
    formatBuffer(buffer: Uint8Array, needInvert: boolean, conversionBGRA: boolean): Uint8Array;
    getImageDataInQueue(width: number, height: number, event: any): void;
    step(): Promise<void>;
    getImageData(width: number, height: number): Promise<any>;
}
export default PreviewBuffer;
//# sourceMappingURL=buffer.d.ts.map