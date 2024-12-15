import { IProperty } from '../../../../../@types/public';
import { DumpInterface } from './dump-interface';
import * as cc from 'cc';
declare class AnimationCurveDump implements DumpInterface {
    encode(object: any, data: IProperty, opts?: any): void;
    decode(data: cc.CurveRange, info: any, dump: any, opts?: any): void;
}
export declare const animationCurveDump: AnimationCurveDump;
export {};
//# sourceMappingURL=animation-curve-dump.d.ts.map