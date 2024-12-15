import { SpawnOptions } from 'child_process';
import * as NodeJSPath from 'path';

export namespace Utils {
    export namespace File {
        /**
         * 检查文件在指定文件夹中是否存在，如果存在则通过追加数字后缀的方式生成一个唯一的文件名。
         * @param targetFolder 
         * @param fileName 
         */
        export function resolveFileNameConflict(targetFolder: string, fileName: string): string;

        /**
         * 初始化一个可用的文件名
         * Initializes a available filename
         * 返回可用名称的文件路径
         * Returns the file path with the available name
         *
         * @param file 初始文件路径 Initial file path
         */
        export function getName(file: string): string;
        interface UnzipOptions {
            peel?: boolean;
        }
        /**
         * 解压文件夹
         * Unzip folder
         *
         * @param zip
         * @param target
         * @param options
         */
        export function unzip(zip: string, target: string, options?: UnzipOptions): Promise<void>;
        /**
         * 复制一个文件到另一个位置
         * Copy a file to another location
         *
         * @param source
         * @param target
         */
        export function copy(source: string, target: string): void;

        export function trashItem(path: string): Promise<void>;
    }
    export namespace Path {
        /**
         * 返回一个不含扩展名的文件名
         * @param path
         */
        export function basenameNoExt(path: string): string;
        /**
         * 将 \ 统一换成 /
         * @param path
         */
        export function slash(path: string): string;
        /**
         * 去除路径最后的斜杆，返回一个不带斜杆的路径
         * @param path
         */
        export function stripSep(path: string): string;
        /**
         * 删除一个路径的扩展名
         * @param path
         */
        export function stripExt(path: string): string;
        /**
         * 判断路径 pathA 是否包含 pathB
         * pathA = foo/bar,         pathB = foo/bar/foobar, return true
         * pathA = foo/bar,         pathB = foo/bar,        return true
         * pathA = foo/bar/foobar,  pathB = foo/bar,        return false
         * pathA = foo/bar/foobar,  pathB = foobar/bar/foo, return false
         * @param pathA
         * @param pathB
         */
        export function contains(pathA: string, pathB: string): boolean;
        /**
         * 格式化路径
         * 如果是 Windows 平台，需要将盘符转成小写进行判断
         * @param path
         */
        export function normalize(path: string): string;
        export const join: typeof NodeJSPath.join;
        export const resolve: typeof NodeJSPath.resolve;
        export const isAbsolute: typeof NodeJSPath.isAbsolute;
        export const relative: typeof NodeJSPath.relative;
        export const dirname: typeof NodeJSPath.dirname;
        export const basename: typeof NodeJSPath.basename;
        export const extname: typeof NodeJSPath.extname;
        export const sep: '\\' | '/';
        export const delimiter: ';' | ':';
        export const parse: typeof NodeJSPath.parse;
        export const format: typeof NodeJSPath.format;
    }
    export namespace Math {
        /**
         * 取给定边界范围的值
         * Take the value of the given boundary range
         * @param {number} val
         * @param {number} min
         * @param {number} max
         */
        export function clamp(val: number, min: number, max: number): number;
        /**
         * @function clamp01
         * @param {number} val
         * @returns {number}
         *
         * Clamps a value between 0 and 1.
         */
        export function clamp01(val: number): number;
        /**
         * 加法函数
         * 入参：函数内部转化时会先转字符串再转数值，因而传入字符串或 number 均可
         * 返回值：arg1 加上 arg2 的精确结果
         * @param {number|string} arg1
         * @param {number|string} arg2
         */
        export function add(arg1: number | string, arg2: number | string): number;
        /**
         * 减法函数
         * 入参：函数内部转化时会先转字符串再转数值，因而传入字符串或number均可
         * 返回值：arg1 减 arg2的精确结果
         * @param {number|string} arg1
         * @param {number|string} arg2
         */
        export function sub(arg1: number | string, arg2: number | string): number;
        /**
         * 乘法函数
         * 入参：函数内部转化时会先转字符串再转数值，因而传入字符串或 number 均可
         * 返回值：arg1 乘 arg2 的精确结果
         * @param {number} arg1
         * @param {number} arg2
         */
        export function multi(arg1: number, arg2: number): number;
        /**
         * 除法函数
         * 入参：函数内部转化时会先转字符串再转数值，因而传入字符串或 number 均可
         * 返回值：arg1 除 arg2 的精确结果
         * @param {number} arg1
         * @param {number} arg2
         */
        export function divide(arg1: number, arg2: number): number;
        /**
         * 保留小数点
         * @param val
         * @param num
         */
        export function toFixed(val: number, num: number): number;
    }
    export namespace Parse {
        interface WhenParam {
            PanelName?: string;
            EditMode?: string;
            ProjectType?: string;
        }
        /**
         * 解析 when 参数
         * when 的格式：
         *     PanelName === '' && EditMode === ''
         * 整理后的数据格式：
         *     {
         *         PanelName: '',
         *         EditMode: '',
         *     }
         */
        export function when(when: string): WhenParam;
        /**
         * 判断一个 when 数据是否符合当前条件
         * @param when
         */
        export function checkWhen(when: string): boolean;
        /**
         * return result of versionMax > versionMin
         * 仅支持纯数字版本，最高支持三位数版本号：333.666.345
         * 入参需为字符串，输入不合格式的入参将会抛异常
         * @example (3.6.2, 3.7.0) => false; (3.9.0, 3.8.0) => true; (3.8.0, 3.8.0) => false;
         * @param versionMax
         * @param versionMin
         */
        export function compareVersion(versionMax: string, versionMin: string): boolean;
    }
    export namespace Url {
        /**
         * 快捷获取文档路径
         * @param relativeUrl
         * @param type
         */
        export function getDocUrl(relativeUrl: string, type?: 'manual' | 'api'): string;
    }

    export namespace UUID {
        /**
         * 压缩 UUID
         * compress UUID
         * @param uuid
         * @param min
         */
        export function compressUUID(uuid: string, min: boolean): string;
        /**
         * 压缩 hex
         * compress hex
         * @param uuid
         * @param min
         */
        export function compressHex(hexString: string, reservedHeadLength: number): string;
        /**
         * 解压 UUID
         * decompress the UUID
         * @param str
         */
        export function decompressUUID(str: string): string;
        /**
         * 检查输入字符串是否是 UUID
         * Check whether the input string is a UUID
         * @param str
         */
        export function isUUID(str: string): string;
        /**
         * 生成一个新的 uuid
         * compress 是否压缩，默认 true
         */
        export function generate(compress?: boolean): string;
        /**
         * 从路径中提取 UUID
         * ".../5b/5b9cbc23-76b3-41ff-9953-4219fdbea72c/Fontin-SmallCaps.ttf" -> "5b9cbc23-76b3-41ff-9953-4219fdbea72c"
         */
        export function getUuidFromLibPath(path: string): string;
        /**
         * 获取子资源的短 uuid
         * @param name 
         */
        export function nameToSubId(name: string, extend?: number): string;
    }

    export namespace Process {
        export enum LogLevel {
            LOG,
            WARN,
            ERROR,
            NULL,
        }
        export interface IQuickSpawnOption extends SpawnOptions {
            cwd?: string;
            env?: any;
            // 输出等级，默认 = 0，即 log 级别以上都打印
            logLevel?: LogLevel;
        
            downGradeWaring?: boolean; // 警告将会转为 log 打印，默认为 false
            downGradeLog?: boolean; // log 将会转为 debug 打印，默认为 true
            downGradeError?: boolean; // 错误将会转为警告打印，默认为 false

            onlyPrintWhenError?: boolean; // 默认为 true, 日志都正常收集，但仅在发生错误时打印信息，其他时候静默处理

            prefix?: string; // 日志输出前缀
        }
        /**
         * 快速开启子进程，无需再自行监听输出，将会返回一个标记完成的 promise 对象
         * @param command 命令
         * @param cmdParams 参数数组
         * @param options 可选，开启的一些参数配置
         */
        export function quickSpawn(command: string, cmdParams: string[], options?: IQuickSpawnOption):Promise<boolean>;
    }
}