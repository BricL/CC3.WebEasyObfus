/// <reference path='../../../@types/index'/>
export * from '@cocos/creator-types/editor/packages/builder/@types/protected';
import { IInternalBuildOptions, InternalBuildResult } from '@cocos/creator-types/editor/packages/builder/@types/protected';
import { ITaskOption as INativeTaskOption, IOptions as INativeOption } from '../../native/@types/index';

export interface ITaskOption extends INativeTaskOption {
    packages: {
        'linux': IOptions;
        native: INativeOption;
    }
}

interface IOptions {
    renderBackEnd: {
        metal: boolean;
        gles3: boolean;
        gles2: boolean;
    },
}
