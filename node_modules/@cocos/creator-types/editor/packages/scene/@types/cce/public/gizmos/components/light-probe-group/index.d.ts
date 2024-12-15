/**
 * Light Probe Group 组件 Gizmo
 */
import type { LightEditMode } from './types';
import Icon from './gizmo-icon';
import Select from './gizmo-select';
export declare const name: string;
export declare const IconGizmo: typeof Icon;
export declare const PersistentGizmo: null;
export declare const SelectGizmo: typeof Select;
export declare const methods: {
    changeEditMode(mode: LightEditMode): void;
    getEditMode(): LightEditMode;
    lightProbeInfoChanged(): void;
};
//# sourceMappingURL=index.d.ts.map