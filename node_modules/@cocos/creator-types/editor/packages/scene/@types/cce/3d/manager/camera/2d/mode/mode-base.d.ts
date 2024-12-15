import { ISceneMouseEvent, ISceneKeyboardEvent } from '../../../../../../../@types/private';
import { IOperationMode } from '../../operation-mode-interface';
import type { CameraController2D } from '../camera-controller-2d';
import { Quat, Vec3 } from 'cc';
import { CameraMoveMode } from '../../utils';
declare class ModeBase implements IOperationMode {
    _cameraCtrl: CameraController2D;
    modeName: CameraMoveMode;
    protected _curRot: Quat;
    protected _curPos: Vec3;
    constructor(cameraCtrl: CameraController2D, modeName: CameraMoveMode);
    enter(): Promise<void>;
    exit(): Promise<void>;
    onMouseDown(event: ISceneMouseEvent): boolean;
    onMouseMove(event: ISceneMouseEvent): boolean;
    onMouseUp(event: ISceneMouseEvent): boolean;
    onMouseWheel(event: ISceneMouseEvent): void;
    onKeyDown(event: ISceneKeyboardEvent): void;
    onKeyUp(event: ISceneKeyboardEvent): void;
    onUpdate(deltaTime: number): void;
}
export { ModeBase };
//# sourceMappingURL=mode-base.d.ts.map