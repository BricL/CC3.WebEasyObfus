export declare const NonUuidMark = ".";
export declare function compressUuid(uuid: string, min: boolean): string;
export declare function decompressUuid(uuid: string): string;
export declare function isUuid(str: string): string;
export declare function uuid(compress?: boolean): string;
export declare function compressUUID(uuid: string, min: boolean): string;
export declare function compressHex(hexString: string, reservedHeadLength: number): string;
export declare function decompressUUID(uuid: string): string;
export declare function isUUID(str: string): string;
export declare function getUuidFromLibPath(path: string): string;
export declare function generate(compress?: boolean): string;
/**
 * 从一个名字转换成一个 id
 * 这是个有损压缩，并不能够还原成原来的名字
 * 注意：此方法需要和 asset-db 保持一致
 * @param id
 * @param extend
 */
export declare function nameToSubId(name: string, extend?: number): string;
//# sourceMappingURL=uuid.d.ts.map