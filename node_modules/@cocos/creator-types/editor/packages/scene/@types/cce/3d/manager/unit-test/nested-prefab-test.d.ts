import type { SceneFacadeManager } from '../../facade/scene-facade-manager';
import { IUnitTest } from './unit-test-interface';
declare class NestedPrefabTest implements IUnitTest {
    test(sceneFacadeMgr: SceneFacadeManager): Promise<boolean>;
    clear(): Promise<boolean>;
}
declare const nestedPrefabTest: NestedPrefabTest;
export { nestedPrefabTest };
//# sourceMappingURL=nested-prefab-test.d.ts.map