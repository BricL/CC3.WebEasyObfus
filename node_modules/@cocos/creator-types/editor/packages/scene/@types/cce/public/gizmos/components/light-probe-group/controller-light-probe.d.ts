import ControllerBase from '../../controller/base';
import { Color, MeshRenderer, Node, Vec3 } from 'cc';
import type { GizmoMouseEvent } from '../../utils/defines';
import GizmoOperationEventListener from '../../utils/gizmo-operation-event-listener';
import { ISceneMouseEvent } from '../../../../../../@types/private';
import SimpleSet from '../../utils/set-util';
import type LightProbeGizmo from './gizmo-select';
import type { LightProbePositionGizmo } from './gizmo-select';
export type NodeProbe = {
    node: Node;
    probe: Vec3;
    meshRenderer: MeshRenderer | null;
};
export default class LightProbeController extends ControllerBase implements GizmoOperationEventListener {
    gizmo: LightProbeGizmo;
    static ProbeColor: Color;
    static SelectedProbeColor: Color;
    static WireFrameColor: Color;
    static ConvexColor: Readonly<Color>;
    static Count: number;
    static get Name(): string;
    protected _lockSize: boolean;
    private debounceUpdate;
    private _isInitialized;
    private _probePool;
    private _currentProbes;
    private _currentSelectedProbeNames;
    private _probeSphere;
    private _reuseAbleMesh?;
    private _shouldDiffOnNextUpdate;
    private _editMode;
    private _lightProbeInfo;
    private _gizmoEventListener?;
    private _gizmoEventListenerIndex;
    static globalNodeCurrentProbes: Map<string, NodeProbe>;
    static LightProbeSphereName: string;
    private TetrahedronNode;
    static OuterCell: Node;
    private _positionGizmo;
    set positionGizmo(positionGizmo: LightProbePositionGizmo | null);
    get positionGizmo(): LightProbePositionGizmo | null;
    get currentProbesArray(): {
        key: string;
        nodeProbe: NodeProbe;
    }[];
    get probeSphere(): Node;
    private tempAdjustSizeV3;
    constructor(rootNode: Node, gizmo: LightProbeGizmo);
    initShape(): void;
    adjustControllerSize(): void;
    show(): void;
    updateController(): void;
    updateProbes(): void;
    updateLines(): void;
    updateWireframe(): Set<string>;
    updateConvex(indicesString?: Set<string>): number[];
    updateLightProbeInfo(): void;
    createProbeNode(probe: Vec3): Node;
    updateProbesColor(): void;
    static tempColor: Color;
    static meshColorUniformName: string;
    /**
     * fast set mesh 'mainColor'
     */
    fastSetMeshColor(node: Node, c: Color, nodeProbe: NodeProbe): void;
    updateLinesNode(node: Node, position: Vec3, vertices: Vec3[], indices: number[], color?: Color): void;
    static TetrahedronLines: number[];
    static OuterCellLines: number[];
    releaseProbeNodes(nodeProbes: NodeProbe[]): void;
    updateNodeTransformInfo(node: Node): void;
    protected onShow(): void;
    protected onHide(): void;
    protected onMouseDown(event: GizmoMouseEvent): void;
    protected onMouseMove(event: GizmoMouseEvent): void;
    protected onMouseUp(event: GizmoMouseEvent): void;
    get currentSelectedProbes(): NodeProbe[];
    selectProbe(names: Iterable<string>): void;
    unselectProbe(names: Iterable<string>): void;
    private clearCurrentSelectedProbe;
    private updatePositionGizmo;
    lightProbeEditModeChanged(mode: boolean): void;
    boundingBoxEditModeChanged(mode: boolean): void;
    duplicateCurrentSelectedProbes(): SimpleSet<Node>;
    deleteCurrentSelectedProbes(): SimpleSet<Node>;
    clearLayer(node: Node): void;
    restoreLayer(node: Node): void;
    clearProbeNodesLayer(): void;
    restoreProbeNodesLayer(): void;
    diff(): NodeProbe[];
    onNotGizmoMouseDown(event: ISceneMouseEvent): void;
    onNotGizmoMouseMove(event: ISceneMouseEvent): void;
    onNotGizmoMouseUp(event: ISceneMouseEvent): void;
    shouldEmitNodes(): SimpleSet<string>;
    select(nodes: SimpleSet<Node>): void;
    selectAll(): void;
    unselect(nodes: SimpleSet<Node>): void;
    unselectAll(): void;
    currentSelectedNodes(): SimpleSet<Node>;
    lightProbeInfoChanged(): void;
    hideAllChildren(): void;
}
interface ILightProbeInfo {
    showProbe: boolean;
    showWireframe: boolean;
    showConvex: boolean;
    lightProbeSphereVolume: number;
}
declare class LightProbeInfo {
    showProbe: boolean;
    showWireframe: boolean;
    showConvex: boolean;
    lightProbeSphereVolume: number;
    constructor(showProbe?: boolean, showWireframe?: boolean, showConvex?: boolean, lightProbeSphereVolume?: number);
    update(info?: ILightProbeInfo): void;
}
declare const lightProbeInfo: LightProbeInfo;
export { lightProbeInfo };
//# sourceMappingURL=controller-light-probe.d.ts.map