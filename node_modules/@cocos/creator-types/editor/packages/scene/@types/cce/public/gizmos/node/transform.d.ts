import Gizmo from '../components/base/gizmo-select';
import { TransformToolDataToolNameType } from '../manager/transform-tool';
import { Node, Component } from 'cc';
import { ISceneKeyboardEvent, IChangeNodeOptions } from '../../../../../@types/private';
declare class TransformGizmo extends Gizmo<Component> {
    private _gizmo;
    protected updateControllerTransform?(): void;
    get nodes(): Node[];
    set target(value: Component | null);
    get target(): Component | null;
    changeTool(name: TransformToolDataToolNameType): void;
    private _eventMap;
    onVertexSnapMove(event: any): any;
    init(): void;
    show(): void;
    hide(): void;
    onShow(): void;
    onHide(): void;
    onUpdate(deltaTime: number): void;
    onDestroy(): void;
    onNodeChanged(event: IChangeNodeOptions): void;
    onKeyDown(event: ISceneKeyboardEvent): boolean | undefined;
    onKeyUp(event: ISceneKeyboardEvent): boolean;
    onCameraControlModeChanged(mode: number): void;
}
export default TransformGizmo;
//# sourceMappingURL=transform.d.ts.map