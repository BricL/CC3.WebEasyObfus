import { Color, IVec3, Material, Node, Quat, Vec3 } from 'cc';
import { IMeshPrimitive, IAddMeshToNodeOption, IAddQuadToNodeOptions, IAddLineToNodeOptions } from '../../../defines';
declare enum AxisName {
    x = "x",
    y = "y",
    z = "z",
    neg_x = "neg_x",
    neg_y = "neg_y",
    neg_z = "neg_z"
}
declare class ControllerUtils {
    static AxisName: typeof AxisName;
    static axisDirectionMap: {
        [key: string]: Vec3;
    };
    static arrow(headHeight: number, headRadius: number, bodyHeight: number, color: Color, opts?: Partial<IAddLineToNodeOptions>): Node;
    static quad(center: Readonly<Vec3>, width: number, height: number, normal?: Readonly<Vec3>, color?: Color, opts?: Partial<IAddQuadToNodeOptions>): Node;
    static borderPlane(width: number, height: number, color: Color, opacity: number): Node;
    static circle(center: Vec3, normal: Vec3, radius: number, color: Color): Node;
    static torus(radius: number, tube: number, opts: any, color: Color): Node;
    static cube(width: number, height: number, depth: number, color: Color, center?: IVec3, opts?: Partial<IAddMeshToNodeOption>): Node;
    static scaleSlider(headWidth: number, bodyHeight: number, color: Color, opts?: Partial<IAddMeshToNodeOption>): Node;
    static getCameraDistanceFactor(pos: Vec3, camera: Node): number;
    static lineTo(startPos: Vec3, endPos: Vec3, color?: Color, opts?: Partial<IAddMeshToNodeOption>): Node;
    static disc(center: Readonly<Vec3>, normal: Readonly<Vec3>, radius: number, color?: Color, opts?: Partial<IAddMeshToNodeOption>): Node;
    static sector(center: Vec3, normal: Vec3, fromDir: Vec3, radian: number, radius: number, color?: Color, opts?: Partial<IAddMeshToNodeOption>): Node;
    static arc(center: Vec3, normal: Vec3, fromDir: Vec3, radian: number, radius: number, color?: Color, opts?: Partial<IAddMeshToNodeOption>): Node;
    static arcDirectionLine(center: Vec3, normal: Vec3, fromDir: Vec3, radian: number, radius: number, length: number, segments: number, color?: Color): Node;
    static lines(vertices: Vec3[], indices: number[], color?: Color, opts?: Partial<IAddMeshToNodeOption>): Node;
    static wireframeBox(center: Vec3, size: Vec3, color: Color, opts?: Partial<IAddMeshToNodeOption>): Node;
    static frustum(isOrtho: boolean, orthoHeight: number, fov: number, aspect: number, near: number, far: number, color: Color, opts?: Partial<IAddMeshToNodeOption>): Node;
    static rectangle(center: Vec3, rotation: Readonly<Quat>, size: any, color: Color, opts?: Partial<IAddMeshToNodeOption>): Node;
    static angle(from: Vec3, to: Vec3): number;
    static sphere(center: Vec3, radius: number, color: Color, opts?: Partial<IAddMeshToNodeOption>, reuseMaterial?: Material): Node;
    static octahedron(lowerPoint: Vec3, upperPoint: Vec3, width: number, length: number, ratio: number | undefined, color: Color, opts?: Partial<IAddMeshToNodeOption>): Node;
    static createShapeByData(shapeData: IMeshPrimitive, color: Color, opts?: Partial<IAddMeshToNodeOption>, reuseMaterial?: Material): Node;
    static create3DNode(name?: string): Node;
    static drawLines(node: Node, vertices: Vec3[], indices: number[], color?: Color): void;
    static findMinPosition(positions: Vec3[]): Vec3;
    static findMaxPosition(positions: Vec3[]): Vec3;
}
export default ControllerUtils;
//# sourceMappingURL=controller-utils.d.ts.map