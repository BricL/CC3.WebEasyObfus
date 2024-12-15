/// <reference path='../../../@types/index'/>
export * from '@cocos/creator-types/editor/packages/builder/@types/protected';

import { IInternalBuildOptions, InternalBuildResult } from '@cocos/creator-types/editor/packages/builder/@types/protected';
import { ITaskOption as INativeTaskOption, IOptions as INativeOption } from '../../native/@types/index';

export type IOrientation = 'landscape' | 'portrait';

export interface ITaskOption extends INativeTaskOption {
    packages: {
        'ios': IOptions;
        native: INativeOption;
    }
}

export interface IBuildResult extends InternalBuildResult {
    userFrameWorks: boolean; // 是否使用用户的配置数据
}

export interface IOptions {
    executableName: string;
    packageName: string;
    orientation: {
        landscapeRight: boolean;
        landscapeLeft: boolean;
        portrait: boolean;
        upsideDown: boolean;
    },
    skipUpdateXcodeProject: boolean;
    renderBackEnd: {
        metal: boolean;
        gles3: boolean;
        gles2: boolean;
    },
    osTarget: {
        iphoneos: boolean,
        simulator: boolean,
    },
    developerTeam?: string,
    targetVersion: string,
}
