/// <reference path='../../../@types/index'/>
export * from '@cocos/creator-types/editor/packages/builder/@types/protected';
export * from '../../../@types/editor';

import { IInternalBuildOptions } from '@cocos/creator-types/editor/packages/builder/@types/protected';

export type IOrientation = 'auto' | 'landscape' | 'portrait';

export interface IOptions {
    appid: string;
    buildOpenDataContextTemplate: boolean;
    orientation: IOrientation;
    separateEngine: boolean;
    highPerformanceMode: boolean;

    subpackages?: { name: string, root: string }[];
    wasmSubpackage: boolean;
    localSeparateEngine?: boolean;
}

export interface ITaskOption extends IInternalBuildOptions {
    packages: {
        wechatgame: IOptions;
    };
}