/// <reference path='../../../@types/index'/>

export * from '@cocos/creator-types/editor/packages/builder/@types/protected';
import { IInternalBuildOptions, IPolyFills, ISettings } from '@cocos/creator-types/editor/packages/builder/@types/protected';

export type IOrientation = 'landscape' | 'portrait';

export interface ITaskOption extends IInternalBuildOptions {
    packages: {
        'taobao-creative-app': {
            // TODO: Taobao doesn't support landscape
            // deviceOrientation: IOrientation;
            globalVariable: string;
        };
    };
}
