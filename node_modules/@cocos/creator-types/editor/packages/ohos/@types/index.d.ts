/// <reference path='../../../@types/index'/>
export * from '@cocos/creator-types/editor/packages/builder/@types/protected';

import { IInternalBuildOptions, InternalBuildResult } from '@cocos/creator-types/editor/packages/builder/@types/protected';
import { ITaskOption as INativeTaskOption } from '../../native/@types/index';

export type IOrientation = 'landscape' | 'portrait';

export interface ITaskOption extends INativeTaskOption {
    packages: {
        'ohos': IOptions;
    }
}

export interface IOptions {
    packageName: string;
    orientation: {
        landscapeRight: boolean;
        landscapeLeft: boolean;
        portrait: boolean;
        upsideDown: boolean;
    },

    apiLevel: number;
    sdkPath: string;
    ndkPath: string;

    renderBackEnd: {
        // vulkan: boolean;
        gles3: boolean;
        // gles2: boolean;
    }
}

export interface IBuildResult extends InternalBuildResult {
    userFrameWorks: boolean; // 是否使用用户的配置数据
}
