import { ISceneMouseEvent, ISceneKeyboardEvent } from '../../../../../@types/private';
import IState from '../../utils/state-machine/state-interface';
interface IOperationMode extends IState {
    onMouseDown(event: ISceneMouseEvent): boolean;
    onMouseMove(event: ISceneMouseEvent): boolean;
    onMouseUp(event: ISceneMouseEvent): boolean;
    onMouseWheel(event: ISceneMouseEvent): void;
    onKeyDown(event: ISceneKeyboardEvent): void;
    onKeyUp(event: ISceneKeyboardEvent): void;
    onUpdate(deltaTime: number): void;
}
export { IOperationMode };
//# sourceMappingURL=operation-mode-interface.d.ts.map