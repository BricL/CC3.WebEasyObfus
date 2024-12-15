import { gfx, IVec3Like, Quat, Vec3 } from 'cc';
import { IMeshPrimitive } from '../../../defines';
declare class ControllerShape {
    calcCylinderData(radiusTop?: number, radiusBottom?: number, height?: number, opts?: any): {
        positions: any[];
        normals: any[];
        uvs: any[];
        indices: any[];
        minPos: Vec3;
        maxPos: Vec3;
    };
    calcConeData(radius: number, height: number, opts?: any): {
        positions: any[];
        normals: any[];
        uvs: any[];
        indices: any[];
        minPos: Vec3;
        maxPos: Vec3;
    };
    calcQuadData(center: Readonly<Vec3>, width: number, height: number, normal?: Readonly<Vec3>, needBoundingBox?: boolean): {
        positions: Vec3[];
        normals: any[];
        indices: number[];
        minPos: Vec3 | undefined;
        maxPos: Vec3 | undefined;
        uvs: any[];
        doubleSided: boolean;
    };
    lineWithBoundingBox(length: number, size?: number): {
        positions: Vec3[];
        normals: any[];
        indices: number[];
        minPos: Vec3;
        maxPos: Vec3;
        primitiveType: gfx.PrimitiveMode;
    };
    calcCubeData(width: number, height: number, length: number, center?: IVec3Like, opts?: any): {
        positions: Vec3[];
        indices: number[];
        normals: Vec3[];
        minPos: Vec3;
        maxPos: Vec3;
    };
    torus(radius: number, tube: number, opts?: any): {
        positions: Vec3[];
        indices: number[];
        normals: Vec3[];
        uvs: any[];
        minPos: Vec3;
        maxPos: Vec3;
    };
    calcArcPoints(center: Readonly<Vec3>, normal: Readonly<Vec3>, fromDir: Readonly<Vec3>, radian: number, radius: number, segments?: number): Vec3[];
    getBiNormalByNormal(normal: Readonly<Vec3>): Vec3;
    calcCirclePoints(center: Readonly<Vec3>, normal: Readonly<Vec3>, radius: number, segments?: number): Vec3[];
    calcDiscPoints(center: Readonly<Vec3>, normal: Readonly<Vec3>, radius: number, segments?: number): Readonly<Vec3>[];
    calcSectorPoints(center: Readonly<Vec3>, normal: Readonly<Vec3>, fromDir: Readonly<Vec3>, radian: number, radius: number, segments: number): Readonly<Vec3>[];
    indicesFanToList(fanIndices: number[]): any[];
    calcSectorData(center: Readonly<Vec3>, normal: Readonly<Vec3>, fromDir: Readonly<Vec3>, radian: number, radius: number, segments: number): {
        positions: Readonly<Vec3>[];
        normals: any[];
        indices: any[];
        primitiveType: gfx.PrimitiveMode;
    };
    arcDirectionLine(center: Vec3, normal: Vec3, fromDir: Vec3, radian: number, radius: number, length: number, segments: number): {
        positions: Vec3[];
        normals: any[];
        indices: number[];
        primitiveType: gfx.PrimitiveMode;
    };
    calcBoxPoints(center: Vec3, size: Vec3): Vec3[];
    wireframeBox(center: Vec3, size: Vec3): {
        positions: Vec3[];
        normals: any[];
        indices: number[];
        primitiveType: gfx.PrimitiveMode;
    };
    calcFrustum(isOrtho: boolean, orthoHeight: number, fov: number, aspect: number, near: number, far: number, isFOVY: boolean): {
        positions: Vec3[];
        indices: number[];
        normals: any[];
        primitiveType: gfx.PrimitiveMode;
    };
    calcRectanglePoints: (center: Readonly<Vec3>, rotation: Readonly<Quat>, size: any) => {
        vertices: Vec3[];
        indices: number[];
    };
    calcRectangleData(center: Readonly<Vec3>, rotation: Readonly<Quat>, size: any): {
        positions: Vec3[];
        normals: any[];
        indices: number[];
        primitiveType: gfx.PrimitiveMode;
    };
    calcSphereData: (center: Readonly<Vec3>, radius?: number, opts?: any) => IMeshPrimitive;
    calcArcData(center: Readonly<Vec3>, normal: Readonly<Vec3>, fromDir: Readonly<Vec3>, radian: number, radius: number, segments?: number): {
        positions: Vec3[];
        normals: any[];
        indices: number[];
        primitiveType: gfx.PrimitiveMode;
    };
    calcCircleData(center: Readonly<Vec3>, normal: Readonly<Vec3>, radius: number, segments?: number): {
        positions: Vec3[];
        normals: any[];
        indices: number[];
        primitiveType: gfx.PrimitiveMode;
    };
    calcLinesData(vertices: Vec3[], indices: number[], needBoundingBoxData?: boolean): IMeshPrimitive;
    calcDiscData(center: Readonly<Vec3>, normal: Readonly<Vec3>, radius: number, segments?: number): {
        positions: Readonly<Vec3>[];
        normals: any[];
        indices: any[];
        primitiveType: gfx.PrimitiveMode;
        minPos: Vec3;
        maxPos: Vec3;
    };
    calcLineData(startPos: Vec3, endPos: Vec3): {
        positions: Vec3[];
        normals: any[];
        indices: number[];
        minPos: Vec3;
        maxPos: Vec3;
        primitiveType: gfx.PrimitiveMode;
    };
    calcPolygonData(points: Vec3[], indices?: number[]): {
        positions: Vec3[];
        normals: any[];
        indices: number[];
        minPos: Vec3;
        maxPos: Vec3;
        primitiveType: gfx.PrimitiveMode;
    };
    /**
     * calculate the data of octahedron
     * https://en.wikipedia.org/wiki/Octahedron
     * @param lowerPoint The lower apex's position.
     * @param upperPoint The upper apex's position.
     * @param width The width of the polygonal base, ie. its length in x axis.
     * @param length The length of the polygonal base, ie. its length in z axis.
     * @param ratio The height ratio of the downside pyramid. Usually in interval [0, 1].
     */
    calcOctahedronData(lowerPoint: IVec3Like, upperPoint: IVec3Like, width: number, length: number, ratio?: number): {
        primitiveType: gfx.PrimitiveMode;
        positions: Vec3[];
        normals: Vec3[];
        indices: number[];
        minPos: Vec3;
        maxPos: Vec3;
    };
}
declare const _default: ControllerShape;
export default _default;
//# sourceMappingURL=controller-shape.d.ts.map