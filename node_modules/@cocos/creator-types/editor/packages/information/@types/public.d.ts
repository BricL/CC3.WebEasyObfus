export interface IContribution {
    tags?: string[];
}

// 某个功能的问卷数据
export interface IInformationItem {
    // 380 这个 id 是为了兼容后端接口还没给到 id，先用 tag 作为标识索引的
    id: string;
    label: string;
    enable: boolean;
    [id: string]: {
        complete: boolean;
        form: string;
    }
}

// 问卷弹窗操作结果
export interface IDialogAction {
    // reject 用户拒绝填写问卷、断网且 10s 内关闭了弹窗
    // resolve 用户正常填写完数据、用户不需要填写
    // unusual 提交表单填写异常
    action: 'reject' | 'resolve' | 'unusual',
}

// 查询某个功能的问卷数据
export interface IQueryInformation {
    status: 'success' | 'cache' | 'network_failure' | 'network_exception';
    data?: IInformationItem;
}

// 所有功能问卷数据
export interface IInformationData {
    // 功能问卷数据
    [tag: string]: IInformationItem
}
