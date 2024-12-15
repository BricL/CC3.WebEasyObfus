declare class Env {
    private _inited;
    private _isNative;
    useNativeScene(options?: {
        checkAvailable?: boolean;
    }): Promise<boolean>;
}
declare const EnvUtil: Env;
export default EnvUtil;
//# sourceMappingURL=env.d.ts.map