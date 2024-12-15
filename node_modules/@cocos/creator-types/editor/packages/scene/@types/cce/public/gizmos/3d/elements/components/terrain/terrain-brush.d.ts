import { Vec3, Material, Terrain, Texture2D, Vec2 } from 'cc';
export declare enum TerrainBrushType {
    CIRCLE = 0,
    IMAGE = 1,
    _MAX = 2
}
export declare class TerrainEdModifierKeyState {
    siftPressed: boolean;
}
export declare class TerrainBrush {
    material: Material | null;
    position: Vec3;
    radius: number;
    strength: number;
    _setHeight: number;
    _rotation: number;
    get rotation(): number;
    getDelta(x: number, z: number): number;
    getBound(bbmin: Vec2, bbmax: Vec2): void;
    update(terrain: Terrain, pos: Vec3): void;
}
export declare class TerrainBrushData {
    bmin: number[];
    bmax: number[];
    width(): number;
    height(): number;
}
export declare enum eTerrainCircleBrushType {
    Linear = 0,
    Smooth = 1,
    Spherical = 2,
    Tip = 3
}
export declare class TerrainCircleBrush extends TerrainBrush {
    protected type: eTerrainCircleBrushType;
    protected falloff: number;
    constructor();
    setType(type: eTerrainCircleBrushType): void;
    getType(): eTerrainCircleBrushType;
    _updateMaterial(): void;
    _getTypeDefine(): any;
    static _calculateFalloff_Linear(Distance: number, Radius: number, Falloff: number): number;
    static _calculateFalloff_Spherical(Distance: number, Radius: number, Falloff: number): number;
    static _calculateFalloff_Smooth(Distance: number, Radius: number, Falloff: number): number;
    static _calculateFalloff_Tip(Distance: number, Radius: number, Falloff: number): number;
    getDelta(x: number, z: number): number;
    update(terrain: Terrain, pos: Vec3): void;
}
export declare class TerrainImageBrush extends TerrainBrush {
    private _image;
    private _pixelData;
    constructor();
    set image(value: Texture2D | null);
    get image(): Texture2D | null;
    static getColor(pixels: number[], w: number, h: number, u: number, v: number): number;
    static sampleImage(pixels: number[], w: number, h: number, u: number, v: number): number;
    sample(u: number, v: number): number;
    getDelta(x: number, z: number): number;
    getBound(bbmin: Vec2, bbmax: Vec2): void;
    update(terrain: Terrain, pos: Vec3): void;
}
//# sourceMappingURL=terrain-brush.d.ts.map