import { Node, Vec3, Color } from 'cc';
import ControllerBase from './controller-base';
declare class TriangleController extends ControllerBase {
    private _edgesNode;
    private _edgesMR;
    private _indices;
    constructor(rootNode: Node);
    setColor(color: Color): void;
    initShape(): void;
    updateData(v0: Vec3, v1: Vec3, v2: Vec3): void;
    getDistScalar(): number;
}
export default TriangleController;
//# sourceMappingURL=triangle-controller.d.ts.map