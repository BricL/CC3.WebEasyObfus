/// <reference path='../../../@types/index'/>
export * from '@cocos/creator-types/editor/packages/builder/@types/protected';

import { appTemplateData, IInternalBuildOptions, IPolyFills, InternalBuildResult, IBuildPaths } from '@cocos/creator-types/editor/packages/builder/@types/protected';

export interface IOptions {
    useWebGPU: boolean;
    resolution: {
        designHeight: number;
        designWidth: number;
    };
}
export interface ITaskOption extends IInternalBuildOptions {
    packages: {
        'web-desktop': IOptions;
    };
    appTemplateData: appTemplateData;
}

export interface IBuildResult extends InternalBuildResult {
    paths: IPaths;
}

export interface IPaths extends IBuildPaths {
    styleCSS?: string; // style.css 文件地址
    indexJs?: string; // index.js 文件地址
    indexHTML?: string; // index.html 文件地址
}
