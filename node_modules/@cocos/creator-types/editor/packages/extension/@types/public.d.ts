/**
 * 插件构造模块的描述
 */
export interface ExtensionCreator {
    load?(): void | Promise<void>;
    unload?(): void | Promise<void>;
    methods: {
        create(info: CreateInfo, packageJSON: any/*Editor.Interface.PackageJson*/): Promise<void> | void;
    };
}

export interface CreateInfo {
    /** 插件名称 */
    name: string;
    /** 插件的目标目录 */
    dist: string;
    /** 插件作者 */
    author: string;
    /** 插件依赖的编辑器版本 */
    editorVersion: string;
    /** 当前选中的模板 */
    template: ExtensionInfo;
}

export type ExtensionInfo = {
    /** 模板的名称 */
    name: string;
    /** 模板创建插件的默认名称 */
    defaultName?: string;
    /** 插件处理后的完整路径 */
    path: string;
    description?: string;
    /** 插件的创建模块的相对路径，需要在该模块中暴露 ExtensionCreator 类型的对象*/
    creator?: string;
};

export interface ICreateExtensionResponse {
    success: boolean;
    msg: string;
    stack: string
}

export interface ICreateTemplateParam extends Partial<Omit<CreateInfo, 'template'>> {
    /** 模板类型，extension 或者 builder  */
    type: string; 
    /** 模板的id */
    templateId: string;
    /** 是否在创建完成后打开目标目录 */
    showInFolder: boolean;
}