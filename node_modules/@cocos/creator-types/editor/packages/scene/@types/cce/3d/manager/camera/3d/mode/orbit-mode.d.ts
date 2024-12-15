import { ISceneMouseEvent } from '../../../../../../../@types/private';
import { ModeBase } from './mode-base';
declare class OrbitMode extends ModeBase {
    private _rotateSpeed;
    enter(): Promise<void>;
    exit(): Promise<void>;
    onMouseDown(event: ISceneMouseEvent): boolean;
    onMouseMove(event: ISceneMouseEvent): boolean;
    onMouseUp(event: ISceneMouseEvent): boolean;
}
export { OrbitMode };
//# sourceMappingURL=orbit-mode.d.ts.map