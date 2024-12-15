/// <reference path='../../../@types/index'/>
export * from '@cocos/creator-types/editor/packages/builder/@types/protected';

import { IInternalBuildOptions, InternalBuildResult } from '@cocos/creator-types/editor/packages/builder/@types/protected';
import { ITaskOption as INativeTaskOption, IOptions as INativeOption } from '../../native/@types/index';

export type IOrientation = 'landscape' | 'portrait';

export interface ITaskOption extends INativeTaskOption {
    packages: {
        'mac': IOptions;
        native: INativeOption;
    }
}

export interface IOptions {
    executableName: string;
    packageName: string;
    renderBackEnd: {
        metal: boolean;
        gles3: boolean;
        gles2: boolean;
    },
    supportM1: boolean;
    skipUpdateXcodeProject: boolean;
    targetVersion: string;
}

export interface IBuildCache extends InternalBuildResult {
    userFrameWorks: boolean; // 是否使用用户的配置数据
}
