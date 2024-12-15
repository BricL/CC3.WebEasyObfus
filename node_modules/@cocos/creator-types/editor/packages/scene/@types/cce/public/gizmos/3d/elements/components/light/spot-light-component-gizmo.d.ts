import Gizmo from '../../gizmo-base';
declare class SpotLightComponentGizmo extends Gizmo {
    private _lightGizmoColor;
    private _lightCtrlHoverColor;
    private _range;
    private _angle;
    private _baseSize;
    private _glowSize;
    private _controller;
    private _sizeSphereCtrl;
    private _rangePropPath;
    private _anglePropPath;
    private _rangeChanged;
    private _angleChanged;
    private _coneTopPos;
    init(): void;
    onShow(): void;
    onHide(): void;
    createController(): void;
    onControllerMouseDown(): void;
    onControllerMouseMove(): void;
    onControllerMouseUp(): void;
    getConeRadius(angle: number, height: number): number;
    updateDataFromController(): void;
    updateControllerTransform(): void;
    updateControllerData(): void;
    onTargetUpdate(): void;
    onNodeChanged(): void;
}
export default SpotLightComponentGizmo;
//# sourceMappingURL=spot-light-component-gizmo.d.ts.map