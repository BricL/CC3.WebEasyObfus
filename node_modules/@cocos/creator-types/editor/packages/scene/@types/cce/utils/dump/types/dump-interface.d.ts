import { IProperty } from '../../../../../@types/public';
export interface DumpInterface {
    encode(object: any, data: IProperty, opts?: any): void;
    decode(data: any, info: any, dump: any, opts?: any): void;
}
//# sourceMappingURL=dump-interface.d.ts.map