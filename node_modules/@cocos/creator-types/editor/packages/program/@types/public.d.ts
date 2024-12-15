export interface IProgramInfo {
    // 应用程序所在路径
    path: string;
    // 应用程序的命令行参数
    commandArgument?: string;
}

export interface IProgramConfig {
    // 应用程序员名称
    label: string;
    // 应用程序描述
    description?: string;
    // 应用程序的命令行参数菜单的配置数据
    // 参数的 key 是调用时传递参数的 key
    arguments?: Record<string, IProgramArgument>;
    // 应用程序所在路径
    path: string;
    // 应用程序的命令行参数
    commandArgument?: string;
}

export interface IProgramArgument {
    // 参数的描述
    label?: string;
}
