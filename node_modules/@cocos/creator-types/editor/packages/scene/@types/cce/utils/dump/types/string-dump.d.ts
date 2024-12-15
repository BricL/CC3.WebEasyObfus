import { IProperty } from '../../../../../@types/public';
import { DumpInterface } from './dump-interface';
declare class StringDump implements DumpInterface {
    encode(object: any, data: IProperty, opts?: any): void;
    decode(data: any, info: any, dump: any, opts?: any): void;
}
export declare const stringDump: StringDump;
export {};
//# sourceMappingURL=string-dump.d.ts.map