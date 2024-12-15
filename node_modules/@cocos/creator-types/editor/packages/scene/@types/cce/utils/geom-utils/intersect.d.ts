import { Vec3, geometry } from 'cc';
declare const intersect: {
    ray_triangle: (ray: geometry.Ray, triangle: geometry.Triangle, doubleSided: boolean | undefined, hitPos: Vec3) => number;
    ray_aabb: (ray: geometry.Ray, aabb: geometry.AABB) => number;
    ray_segment: (ray: geometry.Ray, v0: Vec3, v1: Vec3, precision: number | undefined, hitPos: Vec3) => number;
};
export default intersect;
//# sourceMappingURL=intersect.d.ts.map