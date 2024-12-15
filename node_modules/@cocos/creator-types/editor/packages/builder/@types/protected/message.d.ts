import { IBundleConfig, ISettings } from '../public/build-result';
import { IBuildTaskItemJSON, IBuildTaskOption, Platform } from '../public/options';
import { IPackOptions, PreviewPackResult } from './texture-packer';
import { IPreviewSettingsResult } from './options';
export interface message extends EditorMessageMap {
    'open-devtools': {
        params: [],
        result: void,
    },
    'generate-preview-setting': {
        params: [options: Optional<IBuildTaskOption>],
        result: IPreviewSettingsResult,
    },
    'query-tasks-info': {
        params: [options?: { type: 'build' | 'bundle' }],
        result: {
            list: IBuildTaskItemJSON[],
            queue: Record<string, IBuildTaskItemJSON>,
            free: boolean,
        },
    },
    /**
     * 查询某个构建任务信息
     */
    'query-task': {
        params: [id: string],
        result: IBuildTaskItemJSON,
    },
    /**
     * 预览合图
     * @param {object} pacUuid
     */
    'preview-pac': {
        params: [pacUuid: string, options?: Optional<IPackOptions>],
        result: PreviewPackResult | null,
    },

    'add-task': {
        params: [options: Optional<IBuildTaskOption>, shouldWait?: boolean],
        result: TaskAddResult | BuildExitCode,
    },
    'preview-bundle-config': {
        params: [config: CustomBundleConfigItem],
        result: Record<string, { compressionType: BundleCompressionType, isRemote: boolean }>,
    },
    'query-platform-config': {
        params: [],
        result: {
            order: Platform[];
            native: Platform[];
            config: Record<string, PlatformConfig>;
        },
    }
}
