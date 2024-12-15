import ControllerBase from '../../controller/base';
import { Color, MeshRenderer, Node, Vec3 } from 'cc';
import GizmoBase from '../base/gizmo-select';
export default class LightProbeTetrahedronController extends ControllerBase {
    gizmo: GizmoBase<MeshRenderer>;
    static Count: number;
    static get Name(): string;
    static ProbeColor: Color;
    static LineColor: Color;
    protected _lockSize: boolean;
    private _isInitialized;
    private _probeSphere;
    private _innerTetrahedron;
    private _probeSphereNodes;
    private _currentTetrahedronIndex;
    private _probeSHData;
    private lightProbeInfo;
    constructor(rootNode: Node, gizmo: GizmoBase<MeshRenderer>);
    initShape(): void;
    private initProbeSphere;
    show(): void;
    updateController(): void;
    updateLightProbeInfo(): void;
    updateInnerTetrahedron(tetrahedronIndex: number): void;
    clearLayer(node: Node): void;
    getProbesData(): void;
    getTetrahedronIndex(): number;
    tempAdjustSizeV3: Vec3;
    adjustControllerSize(): void;
}
//# sourceMappingURL=controller-light-probe-tetrahedron.d.ts.map