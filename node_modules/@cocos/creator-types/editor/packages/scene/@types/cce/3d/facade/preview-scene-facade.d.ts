import GeneralSceneFacade from './general-scene-facade';
import { ISceneEvents } from '../manager/scene-events-interface';
import PreviewPlay from '../manager/preview-play';
import { Node, Component } from 'cc';
import { IChangeNodeOptions, IOptionBase } from '../../../../@types/private';
declare class PreviewSceneFacade extends GeneralSceneFacade {
    protected _previewPlay: import("../manager/preview-play").PreviewPlay;
    private _isEnter;
    init(): void;
    enter(opts: any): Promise<void>;
    exit(): Promise<void>;
    enterGameview(sceneJson?: string): Promise<void>;
    callPreviewPlayMethod<T extends keyof typeof PreviewPlay>(method: T, ...args: Parameters<typeof PreviewPlay[T]>): Promise<any>;
    redirectInput(): void;
    private registerOperation;
    private isInputRedirected;
    dispatchEvents(eventName: keyof ISceneEvents, ...args: any[any]): void;
    dispatchEventsOnly(eventName: keyof ISceneEvents, ...args: any[any]): void;
    onSceneOpened(scene: any): void;
    onNodeChanged(node: Node, opts: IChangeNodeOptions): void;
    onAddNode(node: Node): void;
    onRemoveNode(node: Node): void;
    onNodeAdded(node: Node, opts?: IOptionBase): void;
    onNodeRemoved(node: Node, opts: IOptionBase): void;
    onComponentAdded(comp: Component, opts?: IOptionBase): void;
    saveScene(asNew: boolean): Promise<boolean>;
}
export default PreviewSceneFacade;
//# sourceMappingURL=preview-scene-facade.d.ts.map