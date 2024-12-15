declare class DeviceAdapter {
    private _screenWidth;
    private _screenHeight;
    private _scale;
    private _enable;
    private _engineWidth;
    private _engineHeight;
    private _offsetX;
    private _offsetY;
    get screenWidth(): number;
    set screenWidth(w: number);
    get screenHeight(): number;
    set screenHeight(h: number);
    get width(): number;
    set width(w: number);
    get height(): number;
    set height(h: number);
    get scale(): number;
    get enable(): boolean;
    set enable(enable: boolean);
    private _limitScale;
    /**
     * 在切换不同设备时计算engine的实际宽高,fullScreen和scale互斥
     * @param width 目标宽度
     * @param height 目标高度
     * @param fit 是否适应窗口（width为宽高比时也使用该参数）
     * @param rotate 是否旋转
     * @param scale 缩放比例
     * @returns
     */
    fitScreen(width: number, height: number, fit?: boolean, rotate?: boolean, scale?: number): void;
    ratioToSize(w: number, h: number): {
        width: number;
        height: number;
    };
    reset(width: number, height: number): void;
    get offsetX(): number;
    set offsetX(x: number);
    get offsetY(): number;
    set offsetY(y: number);
}
declare const WebAdapter: DeviceAdapter;
declare const NativeAdapter: DeviceAdapter;
export { WebAdapter, NativeAdapter };
//# sourceMappingURL=device-adapter.d.ts.map