import { ISceneMouseEvent } from '../../../../../../../@types/private';
import { ModeBase } from './mode-base';
declare class PanMode extends ModeBase {
    private _panningSpeed;
    enter(): Promise<void>;
    exit(): Promise<void>;
    onMouseMove(event: ISceneMouseEvent): boolean;
}
export { PanMode };
//# sourceMappingURL=pan-mode.d.ts.map