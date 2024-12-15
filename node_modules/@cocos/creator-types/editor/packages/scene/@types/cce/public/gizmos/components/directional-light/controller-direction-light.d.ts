import ControllerBase from '../../controller/base';
import { Node, Color } from 'cc';
declare class DirectionLightController extends ControllerBase {
    protected _lightDirNode: Node | null;
    constructor(rootNode: Node);
    setColor(color: Color): void;
    initShape(): void;
}
export default DirectionLightController;
//# sourceMappingURL=controller-direction-light.d.ts.map