import type { CustomWebIPC } from '../../manager/ipc/web/ipc';
declare function check(): void;
export { check };
declare global {
    export namespace cce {
        let Ipc: CustomWebIPC;
        let Startup: typeof import('../../manager/startup')['default'];
        let EditorPreview: typeof import('./editor-preview')['default'];
    }
}
//# sourceMappingURL=preload.d.ts.map