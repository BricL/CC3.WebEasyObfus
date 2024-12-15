import { gfx, Scene, IVec3Like } from 'cc';
import { InteractivePreview } from '../preview/Interactive-preview';
interface IModelInfo {
    vertices: number;
    polygons: number;
    uvs: number[];
    minPosition?: IVec3Like;
    maxPosition?: IVec3Like;
}
declare class MeshPreview extends InteractivePreview {
    private lightComp;
    private _modelComp;
    private _modelInfo;
    private _defaultMat;
    init(registerName: string, queryName: string): void;
    createNodes(scene: Scene): void;
    setMesh(uuid: string): Promise<IModelInfo | null>;
    resetCamera(): void;
    getModelUVs(uuid: string): Promise<{
        name: gfx.AttributeName;
        buffer: any;
        format: {
            count: number;
        };
        index: Uint8Array | Uint16Array | Uint32Array | null;
    }[] | null>;
    getModelInfo(): IModelInfo;
    setLightEnable(enable: boolean): void;
}
export { MeshPreview };
//# sourceMappingURL=index.d.ts.map