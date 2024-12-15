import Gizmo from './gizmo-base';
declare class SceneGizmo extends Gizmo {
    private _controller;
    private _octreeBoundingBox;
    private _octreeBBSize;
    init(): void;
    onShow(): void;
    onHide(): void;
    createController(): void;
    updateControllerTransform(): void;
    updateControllerData(): void;
    onTargetUpdate(): void;
    onNodeChanged(): void;
}
export default SceneGizmo;
//# sourceMappingURL=scene-gizmo.d.ts.map