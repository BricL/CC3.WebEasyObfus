import { CreateNodeOptions, PasteNodeOptions, SetPropertyOptions, RemoveNodeOptions } from '../../../../@types/public';
import GeneralSceneFacade from './general-scene-facade';
declare class PrefabSceneFacade extends GeneralSceneFacade {
    init(): void;
    enter(opts: any): Promise<void>;
    exit(): Promise<void>;
    openScene(uuid: string): Promise<boolean>;
    setNodeProperty(options: SetPropertyOptions): Promise<boolean>;
    createNode(options: CreateNodeOptions): Promise<any>;
    pasteNode(options: PasteNodeOptions): Promise<string[]>;
    removeNode(options: RemoveNodeOptions): Promise<void>;
    createPrefab(uuid: string, url: string): Promise<string | null | undefined>;
    doUnlinkPrefab(nodeUuid: string, removeNested: boolean): any;
    saveScene(asNew: boolean): Promise<any>;
}
export default PrefabSceneFacade;
//# sourceMappingURL=prefab-scene-facade.d.ts.map