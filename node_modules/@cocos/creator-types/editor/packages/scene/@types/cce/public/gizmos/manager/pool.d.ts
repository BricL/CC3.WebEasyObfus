import type { TGizmoType } from './types';
export { TGizmoType, };
import GizmoBase from '../components/base/gizmo-select';
/**
 * Gizmo 对象池
 * 管理各种 Gizmo 的实例
 */
export declare class GizmoPool {
    private _transformPool;
    private _componentsPool;
    private _iconPool;
    private _persistentPool;
    private _getPool;
    /**
     *
     * @param gizmo
     */
    private unmountGizmo;
    /**
     * 循环所有创建的实例
     * @param type
     * @param name
     * @param handle
     * @returns
     */
    forEachInstanceList(type: TGizmoType, name: string, handle: (gizmo: GizmoBase) => void): void;
    /**
     * 创建一个 Gizmo 对象，优先使用缓存池里的对象
     * @param type
     * @param name
     * @returns
     */
    createGizmo(type: TGizmoType, name: string): GizmoBase | null;
    /**
     * 销毁一个 Gizmo 实例
     * @param gizmo
     */
    destroyGizmo(gizmo: GizmoBase): void;
    /**
     * 清理所有 gizmo
     */
    clearAllGizmos(): void;
}
//# sourceMappingURL=pool.d.ts.map