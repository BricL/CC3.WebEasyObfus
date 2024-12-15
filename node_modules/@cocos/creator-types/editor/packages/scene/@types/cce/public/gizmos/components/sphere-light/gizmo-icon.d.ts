import { SphereLight } from 'cc';
import { IconGizmo } from '../base';
declare class SphereLightIconGizmo extends IconGizmo<SphereLight> {
    disableOnSelected: boolean;
    createController(): void;
    updateController(): void;
}
export default SphereLightIconGizmo;
//# sourceMappingURL=gizmo-icon.d.ts.map