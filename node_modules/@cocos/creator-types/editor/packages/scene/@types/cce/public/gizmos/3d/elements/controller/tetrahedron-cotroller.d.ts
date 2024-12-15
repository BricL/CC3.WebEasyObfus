import { Node, Vec3, Color } from 'cc';
import ControllerBase from './controller-base';
declare class TetrahedronController extends ControllerBase {
    private _edgesNode;
    private _edgesMR;
    private _indices;
    constructor(rootNode: Node);
    setColor(color: Color): void;
    initShape(): void;
    updateData(v0: Vec3, v1: Vec3, v2: Vec3, v3: Vec3): void;
}
export default TetrahedronController;
//# sourceMappingURL=tetrahedron-cotroller.d.ts.map