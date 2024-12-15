import { Vec3, Vec2, Node, Texture2D } from 'cc';
import ControllerBase from './base';
declare class ImageController extends ControllerBase {
    private _center;
    private _size;
    private _imageNode;
    private _imageMR;
    constructor(rootNode: Node, opts?: any);
    initShape(opts?: any): void;
    setTexture(texture: Texture2D | null): void;
    setTextureByUUID(uuid: string): void;
    updateSize(center: Vec3, size: Vec2): void;
}
export default ImageController;
//# sourceMappingURL=image.d.ts.map