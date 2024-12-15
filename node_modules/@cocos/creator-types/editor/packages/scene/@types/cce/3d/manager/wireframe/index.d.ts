import { Material, Node } from 'cc';
import { ISceneEvents } from '../scene-events-interface';
/**
 * 线框开启的模式：
 *
 *  NONE -关闭线框，只显示模型
 *
 *  LINE -模型只显示线框
 *
 *  BLEND -线框与模型混合
 *
 */
declare enum WireframeMode {
    NONE = 0,
    LINE = 1,
    BLEND = 2
}
/**
 * 线框管理类
 */
export declare class ModelWireframe implements ISceneEvents {
    currMode: WireframeMode;
    color: number[];
    private scene;
    private primitiveIndex;
    private extrude;
    material: Material | undefined;
    private handleColor;
    private blockCount;
    init(): Promise<void>;
    initEventListener(): void;
    onSceneOpened(scene: any): void;
    onSceneReload(scene: any): void;
    private _nodeChildrenAdd;
    private _nodeChildrenActive;
    onNodeAdded(node: Node, opts: any): void;
    onNodeRemoved(node: Node): void;
    onNodeChanged(node: Node, opts: any): void;
    private _change;
    applyStorage(mode?: WireframeMode, color?: number[]): void;
    private _onLoadScene;
    private _traverse;
    private _generateWireframeVB;
    private _generateWireframeIB;
    applyScene(mode?: any, color?: number[]): void;
    setColor(color?: number[]): void;
    setMode(mode?: WireframeMode): void;
    private _getTerrainAttrs;
    private _generateMesh;
    private _getWireframeInChild;
    private _onHierarchyChanged;
    generateWireframe(comp: any): void;
    private _create;
    open(uuid: string, mode?: WireframeMode, color?: number[]): void;
    close(uuid: string): void;
}
declare const modelWireframe: ModelWireframe;
export default modelWireframe;
//# sourceMappingURL=index.d.ts.map