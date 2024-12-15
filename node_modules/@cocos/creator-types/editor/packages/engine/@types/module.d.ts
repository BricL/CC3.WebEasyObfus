import { ModuleRenderConfig, IFeatureItem, BaseItem } from '@cocos/creator-types/engine/features';
import { type } from 'os';

export type IModuleItem = IFeatureItem | BaseItem;

export type IModules = Record<string, IModuleItem>;
export interface IDisplayModuleItem extends IModuleItem {
    _value: boolean;
    _option?: string;
    options?: Record<string, IDisplayModuleItem>;
}

export interface IDisplayModuleCache {
    _value: boolean;
    _option?: string;
}

export interface CategoryDetail extends CategoryInfo {
    modules?: IModules;
}

export interface IModuleConfig {
    moduleTreeDump: {
        default: IModules;
        categories : Record<string, CategoryDetail>;
    },
    nativeCodeModules: string[];
    moduleDependMap: Record<string, string[]>;
    moduleDependedMap: Record<string, string[]>;
    features: IModules,
}
