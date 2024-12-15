import EditorMath from '../../../utils/math';
import aabb from '../../../utils/aabb';
declare class External {
    NodeUtils: import("../../../utils/node").NodeUtils;
    EditorMath: typeof EditorMath;
    EditorCamera: import("../../../3d/manager/camera").Camera;
    GeometryUtils: {
        aabb: typeof aabb;
        calculateNormals: any;
    };
}
declare const external: External;
export default external;
//# sourceMappingURL=external.d.ts.map