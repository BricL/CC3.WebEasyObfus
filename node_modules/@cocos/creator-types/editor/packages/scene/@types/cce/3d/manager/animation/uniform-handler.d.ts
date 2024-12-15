import { IDumpType } from '../../../../../@types/private';
import { animation, Material } from 'cc';
import { IPassDumpData, IPropData } from './type-defines';
declare class UniformHandler {
    isUniformCurve(valueAdapter?: animation.IValueProxyFactory): boolean;
    getValueToArrayIndexMapByType(type?: string): any;
    getArrayIndexToValuePartMapByType(type?: string): any;
    getUniformNameData(passIndex: number, uniformName: string): {
        key: string;
        displayName: string;
    };
    /**
     * 获得一个Uniform的dump数据
     * @param {*} pass
     * @param {*} uniformName
     */
    getDumpTypeOfUniform(pass: any, uniformName: string): IDumpType;
    getUniformDumpData(material: Material, valueAdapter: animation.UniformProxyFactory): {
        displayName: string;
        key: string;
        type: IDumpType | undefined;
    };
    getAnimablePropsFromMaterial(material: Material): IPassDumpData[] | null;
    getDefaultValue(type: string): unknown;
    getCurrentValue(material: Material, valueAdapter: animation.UniformProxyFactory, propData: IPropData): Promise<any>;
    colorFloatToInt(values: number[]): number[];
}
declare const uniformHandler: UniformHandler;
export { uniformHandler };
//# sourceMappingURL=uniform-handler.d.ts.map