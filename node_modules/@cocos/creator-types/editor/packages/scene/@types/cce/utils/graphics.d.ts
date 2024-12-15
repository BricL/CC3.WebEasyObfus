/// <reference types="node" />
import { RenderTexture } from 'cc';
/**
 * @engineInternal
 * @param rt
 * @returns
 */
export declare function readPixels(rt: RenderTexture): Uint8Array | null;
export declare function flipImage(data: Uint8Array | null, width: number, height: number): Uint8Array | null;
export declare function saveDataToImage(data: Buffer, width: number, height: number, sceneName: string, fileName: string): Promise<void>;
//# sourceMappingURL=graphics.d.ts.map