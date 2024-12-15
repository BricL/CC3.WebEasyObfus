declare class OverWrite {
    /**
     * 重写引擎的 assetLibrary 部分方法
     * 目的是让引擎的资源加载走编辑器的流程
     */
    assetLibrary(): void;
    /**
     * 编辑器内重写 loader 内的方法
     */
    loader(): void;
}
declare const _default: OverWrite;
export default _default;
//# sourceMappingURL=overwrite.d.ts.map