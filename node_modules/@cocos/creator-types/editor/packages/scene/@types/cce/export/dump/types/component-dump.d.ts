import { IProperty } from '../../../../../@types/public';
import { DumpInterface } from './dump-interface';
declare class ComponentDump implements DumpInterface {
    encode(object: any, data: IProperty, opts?: any): void;
    decode(data: any, info: any, dump: any, opts?: any): void;
}
export declare const componentDump: ComponentDump;
export {};
//# sourceMappingURL=component-dump.d.ts.map