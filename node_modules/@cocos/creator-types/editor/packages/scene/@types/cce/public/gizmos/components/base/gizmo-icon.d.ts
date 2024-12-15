import { Component } from 'cc';
import GizmoBase from './gizmo-select';
import { IChangeNodeOptions } from '../../../../../../@types/private';
import IconController from '../../controller/icon';
declare class IconGizmoBase<T extends Component = Component> extends GizmoBase<T> {
    protected _controller: IconController;
    private _isIconGizmoVisible;
    /**
     * 用于控制选中某节点时是否隐藏 icon
     * 目前仅有 light-probe-icon 用到
     */
    disableOnSelected: boolean;
    init(): void;
    onShow(): void;
    onHide(): void;
    setIconGizmoVisible(visible: boolean): void;
    setIconGizmo3D(value: boolean): void;
    setIconGizmoSize(size: number): void;
    createController(): void;
    onControllerMouseDown(): void;
    onControllerMouseMove(): void;
    onControllerMouseUp(): void;
    updateController(): void;
    updateControllerTransform(): void;
    onTargetUpdate(): void;
    onNodeChanged(event: IChangeNodeOptions): void;
    onNodeSelectionChanged(selection: boolean): void;
    checkVisible(): boolean;
}
export default IconGizmoBase;
//# sourceMappingURL=gizmo-icon.d.ts.map