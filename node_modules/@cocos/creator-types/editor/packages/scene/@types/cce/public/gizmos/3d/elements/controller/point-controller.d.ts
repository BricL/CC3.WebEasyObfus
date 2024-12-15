import { Color, Node, Vec3 } from 'cc';
import ControllerBase from './controller-base';
declare class PointController extends ControllerBase {
    private _pointNode;
    constructor(rootNode: Node);
    setColor(color: Color): void;
    initShape(): void;
    updateData(pos: Vec3): void;
}
export default PointController;
//# sourceMappingURL=point-controller.d.ts.map