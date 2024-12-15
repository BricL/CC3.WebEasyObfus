export interface IDevices {
    deviceConfig: IDeviceItem[];
    custom: IDeviceItem[];
    enableDevice: Record<string, boolean>;
}

export interface IDeviceItem {
    name: string;
    width: number;
    height: number;
    ratio: number;
}