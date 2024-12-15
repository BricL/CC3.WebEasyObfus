import { Color, MeshRenderer, Node, Component } from 'cc';
import EditorCameraComponent from './editor-camera-components';
interface CreateHTMLOptions {
    rootID: string;
    hidden: boolean;
    innerHTML: string;
    imgInfos?: {
        src: string;
        selector: string;
    }[];
}
declare class Utils {
    protected $cameraMoveInfo: HTMLDivElement | null;
    protected $snapInfoRoot: HTMLDivElement | null;
    protected _createHtml(options: CreateHTMLOptions): HTMLDivElement;
    updateWanderShortcutUI(): void;
    updateSnapShortcutUI(): void;
    showSnapTip(): void;
    hideSnapTip(): void;
    /** 展示场景漫游的提示 */
    showCameraMoveTip(): void;
    /** 隐藏场景漫游的提示 */
    hideCameraMoveTip(): void;
    updateVBAttr(comp: MeshRenderer | null, attr: string, data: number[]): void;
    updateIB(comp: MeshRenderer | null, data: number[]): void;
    /**
     * 绘制线条
     * @param {*} width
     * @param {*} length
     * @param {*} segw
     * @param {*} segl
     */
    grid(width: number, length: number, segw: number, segl: number): {
        positions: number[];
        uvs: number[];
        indices: number[];
        minPos: any;
        maxPos: any;
    };
    /**
     * 创建网格
     * @param {*} w
     * @param {*} l
     */
    createStrokeGrid(w: number, l: number): any;
    createGrid(effectName: string): any;
    /**
     * 创建相机
     * @param {*} color
     */
    createCamera(color: Color): EditorCameraComponent;
    /**
     * 查询带有 light 的节点列表
     * @param {*} excludes 排除的节点数组
     */
    queryLightNodes(excludes: Node[]): Node[];
    /**
     * 检查场景内是否有可以使用的光源
     * @param {*} nodes
     */
    isSceneHasActiveLight(nodes: Node[]): boolean;
    /**
     * 查询指定component列表
     * @param {*} compName
     */
    queryComponent(compName: string): Component[];
}
declare enum CameraMoveMode {
    IDLE = 0,
    ORBIT = 1,
    PAN = 2,
    ZOOM = 3,
    WANDER = 4
}
declare const CameraUtils: Utils;
export { CameraMoveMode, CameraUtils };
//# sourceMappingURL=utils.d.ts.map