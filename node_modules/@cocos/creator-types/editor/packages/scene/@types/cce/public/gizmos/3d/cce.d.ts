import GizmoManager from './gizmo-manager';
declare class gizmoExport {
    init(): void;
}
declare const _default: gizmoExport;
export default _default;
declare global {
    export namespace cce {
        namespace gizmos {
            const ControllerBase: typeof import('./elements/controller/controller-base')['default'];
            const PositionController: typeof import('./elements/controller/position-controller')['default'];
            const BoxController: typeof import('./elements/controller/box-controller')['default'];
            const ControllerUtils: typeof import('./elements/utils/controller-utils')['default'];
            const GizmoDefines: typeof import('./gizmo-defines')['default'];
            const Gizmo: typeof import('./elements/gizmo-base')['default'];
            const TransformGizmo: typeof import('./elements/transform/transform-gizmo')['default'];
            const EngineUtils: typeof import('../utils/engine/3d')['default'];
            const Utils: typeof import('../utils/3d')['default'];
            const transformTool: typeof GizmoManager.transformTool;
        }
    }
}
//# sourceMappingURL=cce.d.ts.map