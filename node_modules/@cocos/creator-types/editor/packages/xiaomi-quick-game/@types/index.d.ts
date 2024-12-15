
export * from '@cocos/creator-types/editor/packages/builder/@types/protected';
import { IInternalBuildOptions, ISettings } from '@cocos/creator-types/editor/packages/builder/@types/protected';

export type IOrientation = 'landscape' | 'portrait';

export interface ITaskOption extends IInternalBuildOptions {
    packages: {
        'xiaomi-quick-game': IOptions;
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
    logLevel: string;

    encapsulation: boolean;

    subpackages?: { name: string, root: string }[];
    wasmSubpackage: boolean;
}

export interface ICompileOption {
    name: string;
    useDebugKey: boolean;
    tinyPackageServer: string;
}

