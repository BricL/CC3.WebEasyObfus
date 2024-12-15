import { EventEmitter } from '@itharbors/structures';
import { LightEditMode } from './types';
import type Gizmo from './gizmo-select';
export declare const GizmoList: Gizmo[];
export declare const eventEmitter: EventEmitter<{
    "mode-changed": {
        params: [
            LightEditMode,
            LightEditMode
        ];
        result: void;
    };
}>;
/**
 * 获取当前的编辑模式
 * @returns
 */
export declare function getEditMode(): LightEditMode;
/**
 * 更改当前的编辑模式
 * @param mode
 * @returns
 */
export declare function changeEditMode(mode: LightEditMode): void;
/**
 * 引擎更新了光照探针的数据，需要通知到 LightProbeGizmo
 * 探针插件里用到了这个接口
 */
export declare function lightProbeInfoChanged(): void;
//# sourceMappingURL=manager.d.ts.map