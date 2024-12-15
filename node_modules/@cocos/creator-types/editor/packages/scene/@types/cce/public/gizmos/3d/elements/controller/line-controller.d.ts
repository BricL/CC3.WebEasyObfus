import ControllerBase from './controller-base';
import { Color, Node, Vec3 } from 'cc';
declare class LineController extends ControllerBase {
    private _lineNode;
    private _lineMR;
    constructor(rootNode: Node);
    initShape(): void;
    setColor(color: Color): void;
    setOpacity(opacity: number): void;
    createLineNode(startPos: Vec3, endPos: Vec3, name: string, color: Color): Node;
    updateData(startPos: Vec3, endPos: Vec3): void;
}
export default LineController;
//# sourceMappingURL=line-controller.d.ts.map