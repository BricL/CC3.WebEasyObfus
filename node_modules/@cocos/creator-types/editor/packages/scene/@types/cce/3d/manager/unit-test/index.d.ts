import { UnitTestInfo } from '../../../../../@types/public';
import type { SceneFacadeManager } from '../../facade/scene-facade-manager';
declare class UnitTestManager {
    private _unitTestMap;
    constructor();
    test(sceneFacadeMgr: SceneFacadeManager, opts: UnitTestInfo): Promise<boolean | undefined>;
}
declare const unitTestMgr: UnitTestManager;
export { unitTestMgr };
//# sourceMappingURL=index.d.ts.map