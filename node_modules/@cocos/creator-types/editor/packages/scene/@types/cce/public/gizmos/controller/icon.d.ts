import { Color, Node } from 'cc';
import QuadController from './quad';
declare class IconController extends QuadController {
    private _is3DIcon;
    private _visibility;
    constructor(rootNode: Node, opts?: any);
    setTexture(texture: any): void;
    setTextureByUUID(uuid: string): void;
    setColor(color: Color): void;
    set is3DIcon(value: boolean);
    getDistScalar(): number;
    resetShapeScale(): void;
    onShow(): void;
    onHide(): void;
    onEditorCameraMoved(): void;
    adjustControllerSize(): void;
}
export default IconController;
//# sourceMappingURL=icon.d.ts.map