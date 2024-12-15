/// <reference path='../../../@types/index.d.ts'/>

import { IBuildTaskOption } from '@cocos/creator-types/editor/packages/builder/@types/public';

export * from '@cocos/creator-types/editor/packages/builder/@types/protected';

export interface ITaskOptions extends IBuildTaskOption {
    packages: { 'adsense-h5g-plugin': IOptions };
}

export interface IOptions {
    adsensePropertyCode: string;
    enableTestAd: boolean;
    AFPHostPropertyCode: string;
    AFPHostDomain: string;
    otherAFPHostPropertyCode: string;
    otherAFPDomain: string;
}