import { IProperty } from '../../../../../@types/public';
import { DumpInterface } from './dump-interface';
declare class TypedArrayDump implements DumpInterface {
    encode(object: any, data: IProperty, opts?: any): void;
    decode(data: any, info: any, dump: any, opts?: any): void;
}
export declare const typedArrayDump: TypedArrayDump;
export {};
//# sourceMappingURL=typed-array-dump.d.ts.map