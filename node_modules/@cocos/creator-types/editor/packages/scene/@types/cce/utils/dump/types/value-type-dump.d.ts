import { IProperty } from '../../../../../@types/public';
import { DumpInterface } from './dump-interface';
declare class ValueTypeDump implements DumpInterface {
    encode(object: any, data: IProperty, opts?: any): void;
    decode(data: any, info: any, dump: any, opts?: any): void;
}
export declare const valueTypeDump: ValueTypeDump;
export {};
//# sourceMappingURL=value-type-dump.d.ts.map