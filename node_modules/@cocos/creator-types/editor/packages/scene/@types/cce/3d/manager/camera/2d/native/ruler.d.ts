import Grid from '../../grid';
import { IRuler } from '../ruler-interface';
declare class Ruler implements IRuler {
    show(isShow: boolean): void;
    init(): void;
    updateTicks(grid: Grid): void;
    resize(width: number, height: number): void;
}
export { Ruler };
//# sourceMappingURL=ruler.d.ts.map