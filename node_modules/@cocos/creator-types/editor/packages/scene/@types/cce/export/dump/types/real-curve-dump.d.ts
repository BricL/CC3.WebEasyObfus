import { IProperty } from '../../../../../@types/public';
import { DumpInterface } from './dump-interface';
import * as cc from 'cc';
declare class RealCurveDump implements DumpInterface {
    encode(object: cc.RealCurve, data: IProperty, opts?: any): void;
    decode(data: cc.CurveRange, info: any, dump: any, opts?: any): void;
    encodeByObj(curve: cc.RealCurve, opts?: any): any;
    decodeByDump(dump: any, curve: cc.RealCurve, opts?: any): cc.RealCurve;
}
export declare const realCurveDump: RealCurveDump;
export {};
//# sourceMappingURL=real-curve-dump.d.ts.map