import { Terrain } from 'cc';
import { SelectGizmo } from '../base';
import type { GizmoMouseEvent } from '../../utils/defines';
import TerrainGizmo from './gizmo-select';
/**
 * 由于地形节点无法被射线检测，所有创建一个可触碰的 TerrainController 用来接收鼠标事件
 */
export default class TerrainPersistentGizmo extends SelectGizmo<Terrain> {
    private _controller;
    get selectGizmo(): TerrainGizmo | null;
    protected init(): void;
    private updateController;
    onTargetUpdate(): void;
    onNodeChanged(): void;
    onControllerMouseDown(event: GizmoMouseEvent): void;
    onControllerMouseMove(event: GizmoMouseEvent): void;
    onControllerMouseUp(event: GizmoMouseEvent): void;
    onControllerHoverOut(): void;
}
//# sourceMappingURL=gizmo-persistent.d.ts.map