import SceneProxy from './scene-proxy';
import { Scene } from 'cc';
declare class AnimationSceneProxy extends SceneProxy {
    root: string;
    rootNodeDump: any;
    materialsDump: any;
    duplicateMatUuids: string[];
    get name(): string;
    constructor(manager: any, sceneFacade: any);
    /**
     * 获得属性类型，如果是不可添加动画的属性，也返回null
     * @param {*} object
     * @param {*} prop
     */
    getType(object: any, prop: any): any;
    /**
     * 打开动画编辑模式
     * @param {String} uuid 动画节点的 uuid
     */
    open(uuid: string): Promise<boolean>;
    checkClose(): Promise<boolean>;
    /**
     * 关闭动画编辑模式
     */
    close(): Promise<boolean>;
    /**
     * 重新加载动画编辑模式
     */
    reload(): Promise<boolean>;
    /**
     * 重新软加载动画编辑模式，在自定义脚本更新时会调用
     */
    softReload(): Promise<boolean>;
    /**
     * 获取当前正在编辑的资源的序列化数据
     */
    serialize(): string | object | null;
    /**
     * 查询当前场景的 dirty 标记状态
     */
    queryDirty(): Promise<boolean>;
    /**
     * 保存 clip 数据
     */
    save(): Promise<boolean>;
    /**
     * 将缓存的动画数据，传递给上一个编辑模式, 将当前动画模式中修改的数据写回到上一个模式中
     */
    patch(): Promise<boolean>;
    getRootNode(): Scene | null;
}
export default AnimationSceneProxy;
//# sourceMappingURL=animation-scene-proxy.d.ts.map