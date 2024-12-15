/// <reference types="@editor/creator/@types/protected" />
declare class ProfileUtil {
    getConfig(module: string, name: string, type?: Editor.Profile.preferencesProtocol): Promise<any>;
    setConfig(module: string, name: string, value: any, type?: Editor.Profile.preferencesProtocol): Promise<any>;
    getProject(module: string, name: string, type?: Editor.Profile.preferencesProtocol): Promise<any>;
    setProject(module: string, name: string, value: any, type?: Editor.Profile.preferencesProtocol): Promise<any>;
}
declare class EditModeUtil {
    enter(modeName: string): void;
}
declare class MessageUtil {
    request(module: string, message: string, ...args: any[]): Promise<any>;
    send(module: string, message: string, ...args: any[]): Promise<any>;
    broadcast(message: string, ...args: any[]): Promise<void>;
}
declare class PackageUtil {
    getPackages(opts: any): Promise<any>;
}
declare class SelectionUtil {
    unselect(type: string, uuid: string): Promise<any>;
    getLastSelected(): Promise<any>;
    getSelected(type: string): Promise<any>;
}
declare class DialogUtil {
    info(message: string, options?: Editor.Dialog.MessageDialogOptions, window?: any): Promise<any>;
    warn(message: string, options?: Editor.Dialog.MessageDialogOptions, window?: any): Promise<any>;
    save(options?: Editor.Dialog.SelectDialogOptions, window?: any): Promise<any>;
}
declare class MetricsUtil {
    trackTimeStart(message: string): void;
    trackTimeEnd(message: string): void;
}
declare class I18nUtil {
    t(key: string, obj: any): Promise<any>;
}
declare class PanelUtil {
    open(name: string): Promise<any>;
}
declare class AppUtil {
    path: string;
}
declare class ProjectUtil {
    path: string;
}
declare class EditorUtil {
    Profile: ProfileUtil;
    EditMode: EditModeUtil;
    Message: MessageUtil;
    Package: PackageUtil;
    Selection: SelectionUtil;
    Dialog: DialogUtil;
    I18n: I18nUtil;
    Panel: PanelUtil;
    App: AppUtil;
    Project: ProjectUtil;
    Metrics: MetricsUtil;
}
export { EditorUtil };
//# sourceMappingURL=editor.d.ts.map