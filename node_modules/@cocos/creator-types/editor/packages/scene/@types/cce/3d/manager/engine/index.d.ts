import { Node, Component, GeometryRenderer as CCGeometryRenderer } from 'cc';
import { ISceneEvents } from '../scene-events-interface';
import { IChangeNodeOptions } from '../../../../../@types/private';
import { GeometryRenderer } from './geometry_renderer';
import { EventEmitter } from '../../../utils/event-emitter';
declare enum NeedAnimState {
    CAMERA_ORBIT = 0,
    CAMERA_PAN = 1,
    CAMERA_WANDER = 2,
    ANIMATION_MODE = 3,
    PARTICLE_SYSTEM_MODE = 4,
    TERRAIN_SYSTEM_MODE = 5,
    GAME_VIEW_MODE = 6
}
/**
 * 引擎管理器，用于引擎相关操作
 */
export declare class EngineManager extends EventEmitter implements ISceneEvents {
    private _setTimeoutId;
    private _rafId;
    private _maxDeltaTimeInEM;
    private _stateRecord;
    private _shouldRepaintInEM;
    private _tickInEM;
    private _tickedFrameInEM;
    private _paused;
    private _capture;
    private _bindTick;
    private geometryRenderer;
    private _sceneTick;
    init(): Promise<void>;
    setTimeout(callback: any, time: number): void;
    clearTimeout(): void;
    onSceneViewVisible(visible: boolean): void;
    onSceneOpened(scene: any): void;
    onComponentAdded(comp: Component): void;
    onComponentRemoved(comp: Component): void;
    onNodeChanged(node: Node, opts: IChangeNodeOptions): void;
    repaintInEditMode(): void;
    setFrameRate(fps: number): void;
    startTick(): void;
    stopTick(): void;
    tickInEditMode(deltaTime: number): void;
    getGeometryRenderer(): GeometryRenderer & Pick<CCGeometryRenderer, "addDashedLine" | "addTriangle" | "addQuad" | "addBoundingBox" | "addCross" | "addFrustum" | "addCapsule" | "addCylinder" | "addCone" | "addCircle" | "addArc" | "addPolygon" | "addDisc" | "addSector" | "addSphere" | "addTorus" | "addOctahedron" | "addBezier" | "addMesh" | "addIndexedMesh">;
    enterState(state: NeedAnimState): void;
    exitState(state: NeedAnimState): void;
    resume(): void;
    pause(): void;
    checkToSetAnimState(nodes: Node[]): void;
    private _tick;
    private _updateTickState;
    private _isTickAllowed;
    emitUpdate(): void;
    get capture(): boolean;
    set capture(b: boolean);
}
declare const engineManager: EngineManager;
export { engineManager, NeedAnimState };
//# sourceMappingURL=index.d.ts.map