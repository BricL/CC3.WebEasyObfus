/// <reference path='../../../@types/index'/>
export * from '@cocos/creator-types/editor/packages/builder/@types/protected';

import { IInternalBuildOptions, IPolyFills, ISettings } from '@cocos/creator-types/editor/packages/builder/@types/protected';

export type IOrientation = 'auto' | 'landscape' | 'portrait';
export interface IOptions {
    orientation: IOrientation;
    embedWebDebugger: boolean;
}
export interface ITaskOption extends IInternalBuildOptions {
    packages: {
        'fb-instant-games': IOptions;
    }
}