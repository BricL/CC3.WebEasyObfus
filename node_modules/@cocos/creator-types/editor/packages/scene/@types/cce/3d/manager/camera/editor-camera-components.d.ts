import { Camera, Color, gfx, Rect } from 'cc';
export default class EditorCameraComponent extends Camera {
    private _uiEditorGizmoCamera;
    set projection(val: number);
    get projection(): number;
    set fov(val: number);
    get fov(): number;
    set orthoHeight(val: number);
    get orthoHeight(): number;
    set near(val: number);
    get near(): number;
    set far(val: number);
    get far(): number;
    set clearColor(val: Color);
    get clearColor(): Color;
    set clearDepth(val: number);
    get clearDepth(): number;
    set clearStencil(val: number);
    get clearStencil(): number;
    set clearFlags(val: gfx.ClearFlags);
    get clearFlags(): gfx.ClearFlags;
    set rect(val: Rect);
    get rect(): Rect;
    set screenScale(val: number);
    get screenScale(): number;
    onLoad(): void;
    onEnable(): void;
    onDisable(): void;
    onDestroy(): void;
    _createCamera(): void;
}
//# sourceMappingURL=editor-camera-components.d.ts.map