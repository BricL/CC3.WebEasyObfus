export interface ReflectionProbeBroadcast {
    'reflection-probe:update-bake-info': (result: QueryBakeResult) => [QueryBakeResult, boolean],
    /** 当没有传入 info 的时候意味着场景中没有反射探针 */
    'reflection-probe:bake-end': (err: Error | 'cancel' | null, info?: ReflectionProbeBakeInfo) => [Error | null, ReflectionProbeBakeInfo],
    'reflection-probe:bake-start': (info: ReflectionProbeBakeInfo) => [ReflectionProbeBakeInfo],
    'reflection-probe:clear-end': (value: boolean) => [boolean],
}

export interface ReflectionProbeOperationRequest {
    /** 烘焙反射探针，如果不指定组件的数组，则烘焙场景中全部反射探针 */
    'start-bake': (uuids?: readonly string[]) => void,
    /** 取消烘焙反射探针，如果不指定组件的数组，则取消全部反射探针的烘焙 */
    'cancel-bake': (uuids?: readonly string[]) => void,
    /** 清空反射探针烘焙的结果 */
    'clear-results': () => Promise<void>,
}

export interface ReflectionProbeQueryRequest {
    /**查询反射探针烘焙信息 */
    'query-bake-info': () => QueryBakeResult,
    /** 查询是否正在删除资源 */
    'query-is-clearing': () => boolean,
}

export interface ReflectionProbeBakeInfo {
    uuid: string,
    readonly nodeName: string,
}

export interface QueryBakeResult {
    remaining: ReflectionProbeBakeInfo[],
    finished: ReflectionProbeBakeInfo[],
    currentInfo?: ReflectionProbeBakeInfo,

}