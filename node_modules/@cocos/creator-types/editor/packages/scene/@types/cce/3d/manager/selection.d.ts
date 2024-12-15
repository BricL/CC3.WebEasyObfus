import { EventEmitter } from '../../utils/event-emitter';
import { ISceneKeyboardEvent, ISceneMouseEvent } from '../../../../@types/private';
export declare class SceneSelection extends EventEmitter {
    protected _hover: string | undefined;
    protected _isMouseDown: boolean;
    protected onMouseDown(event: ISceneMouseEvent): boolean;
    protected onMouseUp(event: ISceneMouseEvent): boolean;
    protected onKeyDown(event: ISceneKeyboardEvent): boolean;
    init(): void;
    isSelect(uuid: string): boolean;
    query(): string[];
    select(uuid: string): void;
    unselect(uuid: string): void;
    clear(): void;
    reset(): void;
    notice(): void;
    _select(uuid: string): void;
    _unselect(uuid: string): void;
}
declare const _default: SceneSelection;
export default _default;
//# sourceMappingURL=selection.d.ts.map