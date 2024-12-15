/**
 * 参考图数据
 */
export interface IImageData {
    path: string;
    x: number;
    y: number;
    sx: number;
    sy: number;
    opacity: number;
}

/**
 * 存储场景使用图片对应的数据
 */
export interface ISceneData {
    [sceneUUID: string]: {
        path: string
    }
}

/**
 * 参考图配置
 */
export interface IReference {
    images: IImageData[];
    sceneUUID: ISceneData;
    scene: string;
}
