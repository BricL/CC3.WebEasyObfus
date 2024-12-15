export interface IPanelInfo {
    template?: string;
    style?: string;
    listeners?: { [key: string]: (...arg: any) => {} };
    methods?: { [key: string]: Function };
    $?: { [key: string]: string };
    ready?(): void;
    update?(...args: any[]): void;
    beforeClose?(): void;
    close?(): void;
    exportConfig?(): Promise<ExportConfig>;
    importConfig?(configs: ExportConfig): Promise<void>;
}

export interface PreferencesLaboratory {
    label: string;
    description?: string;
    path: string;
}

export interface PreferencesProperties {
    [key: string]: {
        description?: string;
        label: string;
        render: {
            ui: string;
            attributes?: {
                [key: string]: any;
            };
        }
    }
}

export interface PreferencesConfigs {
    [key: string]: {
        custom?: string;
        laboratory?: PreferencesLaboratory[] | null;
        properties?: PreferencesProperties | null;
        title: string;
        version: string;
    }
}

export type PreferencesProtocol = 'default' | 'global' | 'local';

export interface ExportConfig {
    [key: string]: {
        type?: PreferencesProtocol;
        value: any;
    };
}

export interface ExportConfigs {
    '__version__'?: string;
    'properties'?: ExportConfig;
    'laboratory'?: ExportConfig;
    'custom'?: ExportConfig;
}

export interface ExportPreferencesConfigs {
    [key: string]: ExportConfigs;
}

export interface PreferencesHandlers {
    [key: string]: IPanelInfo;
}
