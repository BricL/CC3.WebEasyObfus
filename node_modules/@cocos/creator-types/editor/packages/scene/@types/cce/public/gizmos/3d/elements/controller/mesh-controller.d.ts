import { Node } from 'cc';
import ControllerBase from './controller-base';
declare class MeshController extends ControllerBase {
    private _linesNode;
    private _linesMR;
    constructor(rootNode: Node);
    initShape(): void;
    updateData(points: number[], indices: number[]): void;
}
export default MeshController;
//# sourceMappingURL=mesh-controller.d.ts.map