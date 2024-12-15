
import type { Utils as UtilsType } from './utils/index.d';

declare global {
    export namespace Editor {
        export const Utils = UtilsType;
    }
}
    