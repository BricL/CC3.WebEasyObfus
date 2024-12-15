/// <reference path='../../../@types/index'/>
export * from '@cocos/creator-types/editor/packages/builder/@types/protected';
import { IInternalBuildOptions } from '@cocos/creator-types/editor/packages/builder/@types/protected';

export type IOrientation = 'landscape' | 'portrait';
export interface ITaskOption extends IInternalBuildOptions {
    packages: {
        'oppo-mini-game': IOptions;
    };
}

export interface IOptions {
    package: string;
    icon: string;
    versionName: string;
    versionCode: string;
    minPlatformVersion: string;
    deviceOrientation: IOrientation;
    useDebugKey: boolean;
    privatePemPath: string;
    certificatePemPath: string;
    hasSubPackage?: boolean;
    separateEngine: boolean;

    subpackages?: { name: string, root: string }[];
    wasmSubpackage: boolean;
}

export interface ICompileOptions {
    name: string;
    useDebugKey: boolean;
    hasSubPackage: boolean;
}
