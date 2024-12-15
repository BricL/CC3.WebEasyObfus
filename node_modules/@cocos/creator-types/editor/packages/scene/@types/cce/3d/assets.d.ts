declare class Assets {
    assetMap: {
        readonly scene: any;
        readonly texture: any;
        readonly 'sprite-frame': any;
    };
    getCtor(importer: string): any;
    getImporter(ctor: any): "scene" | "texture" | "sprite-frame" | "material" | "particle" | "image" | "json" | "text" | "";
}
declare const _default: Assets;
export default _default;
//# sourceMappingURL=assets.d.ts.map