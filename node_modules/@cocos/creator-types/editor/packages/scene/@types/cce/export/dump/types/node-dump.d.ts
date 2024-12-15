import { IProperty } from '../../../../../@types/public';
import { DumpInterface } from './dump-interface';
declare class NodeDump implements DumpInterface {
    encode(object: any, data: IProperty, opts?: any): void;
    decode(data: any, info: any, dump: any, opts?: any): void;
}
export declare const nodeDump: NodeDump;
export {};
//# sourceMappingURL=node-dump.d.ts.map