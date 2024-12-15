declare global {
    const Tester: Tester;
    const describe: (message: string, handle: Function) => void;
    const it: (message: string, handle: Function) => void;
    const before: (handle: Function) => void;
    const after: (handle: Function) => void;
}

export interface IAutoTestOptions {
    nativeConfig: {
        immediately: boolean;
    };
    useNative: boolean;
    outputReport: boolean;
    packages: string[];

    // -------- PR Test 附加传递内容 ----------
    // 变动的文件路径
    changes?: string[];
}

export interface IPackageTestConfig {
    includes?: string[];
    excludes?: string[];
    wait?: Function;
}