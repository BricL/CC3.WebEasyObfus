export interface DropCallbackInfo {
    uuid: string; // 拖放到哪个资源 uuid 上
    type: string; // 拖放位置上资源的类型
    isDirectory: boolean; // 拖放位置上资源的是否是文件夹
    targetUrl: string; // 拖放目标位置
}

export interface IDragAdditional {
    type: string;
    value: string;
    name?: string; // 节点或资源名称
    extends?: string[];
    subAssets?: { [key: string]: {type: string, value: string, name?: string} }
}
