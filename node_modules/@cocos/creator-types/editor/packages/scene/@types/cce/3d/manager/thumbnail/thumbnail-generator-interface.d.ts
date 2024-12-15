interface IThumbnailGenerator {
    width: number;
    height: number;
    getThumbnail(uuid: string, path?: string | undefined): Promise<string>;
    setSize(width: number, height: number): void;
}
declare class BaseThumbnailGenerator implements IThumbnailGenerator {
    width: number;
    height: number;
    constructor();
    getThumbnail(uuid: string, path: string | undefined): Promise<string>;
    setSize(width: number, height: number): void;
}
export { IThumbnailGenerator, BaseThumbnailGenerator };
//# sourceMappingURL=thumbnail-generator-interface.d.ts.map