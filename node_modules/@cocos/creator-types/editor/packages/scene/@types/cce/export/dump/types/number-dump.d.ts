import { IProperty } from '../../../../../@types/public';
import { DumpInterface } from './dump-interface';
declare class NumberDump implements DumpInterface {
    encode(object: any, data: IProperty, opts?: any): void;
    decode(data: any, info: any, dump: any, opts?: any): void;
}
export declare const numberDump: NumberDump;
export {};
//# sourceMappingURL=number-dump.d.ts.map