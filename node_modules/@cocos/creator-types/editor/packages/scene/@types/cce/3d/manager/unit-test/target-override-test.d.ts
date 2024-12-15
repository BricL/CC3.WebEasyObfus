import type { SceneFacadeManager } from '../../facade/scene-facade-manager';
import type { IUnitTest } from './unit-test-interface';
declare class TargetOverrideTest implements IUnitTest {
    test(sceneFacadeMgr: SceneFacadeManager): Promise<boolean>;
    clear(): Promise<boolean>;
}
declare const targetOverrideTest: TargetOverrideTest;
export { targetOverrideTest };
//# sourceMappingURL=target-override-test.d.ts.map