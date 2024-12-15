import type { SceneFacadeManager } from '../../facade/scene-facade-manager';
interface IUnitTest {
    test(facadeMgr: SceneFacadeManager): Promise<boolean>;
    clear(): Promise<boolean>;
}
export { IUnitTest };
//# sourceMappingURL=unit-test-interface.d.ts.map