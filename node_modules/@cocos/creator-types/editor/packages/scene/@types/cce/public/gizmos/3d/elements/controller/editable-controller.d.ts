import ControllerBase from './controller-base';
import { IControlMouseEvent } from '../../../defines';
import { Node, Vec3, Color, Quat } from 'cc';
declare class EditableController extends ControllerBase {
    protected _editable: boolean;
    protected _edit: boolean;
    protected _editHandlesShape: Node | null;
    protected _defaultEditHandleSize: number;
    protected _hoverColor: Color;
    protected _editHandleScales: {
        [key: string]: number;
    };
    protected _editHandleColor: Color;
    protected _editHandleKeys: string[];
    onInitEditHandles?(): void;
    constructor(rootNode: Node);
    get editable(): boolean;
    set editable(value: boolean);
    get edit(): boolean;
    set edit(value: boolean);
    get hoverColor(): Color;
    set hoverColor(value: Color);
    createEditHandleShape(): void;
    setRoot(rootNode: Node): void;
    setEditHandlesColor(color: Color): void;
    showEditHandles(): void;
    hideEditHandles(): void;
    createEditHandle(handleName: string, color: Color): import("../../../defines").IHandleData;
    initEditHandles(): void;
    _updateEditHandle(handleName: string): void;
    updateEditHandles(): void;
    checkEdit(): void;
    onHoverIn(event: IControlMouseEvent): void;
    onHoverOut(event: IControlMouseEvent): void;
    onEditorCameraMoved(): void;
    adjustControllerSize(): void;
    adjustEditHandlesSize(): void;
    setPosition(value: Readonly<Vec3>): void;
    setRotation(value: Readonly<Quat>): void;
    onShow(): void;
    onHide(): void;
}
export default EditableController;
//# sourceMappingURL=editable-controller.d.ts.map