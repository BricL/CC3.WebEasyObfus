export type ProjectProtocol = 'default' | 'project';

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
    exportConfig?(): Promise<Record<string, any>>;
    importConfig?(configs: Record<string, any>): Promise<void>;
}

export interface ProjectSettingsTab {
    tab: string;
    subTab: string;
}

export interface ProjectConfigs {
    [key: string]: {
        title: string;
        version: string;
        tabs: ProjectTabs;
    }
}

export interface ProjectTabs {
    [key: stirng]: {
        content?: ProjectContent | null;
        custom?: string;
        label: string;
    }
}

export interface ProjectContent {
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

export interface ExportProjectConfigs {
    [key: string]: {
        '__version__'?: string;
        [key: string]: Record<string, any>;
    }
}

export interface ProjectHandlers {
    [key: string]: {
        [key: string]: IPanelInfo;
    }
}
