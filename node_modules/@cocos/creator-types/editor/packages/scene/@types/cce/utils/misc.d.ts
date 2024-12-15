import { basename, join, relative, extname } from 'path';
import { promisify } from 'util';
import { existsSync, readJSONSync, readFileSync, ensureDirSync, writeFileSync, writeJSONSync, mkdirSync, writeFile } from 'fs-extra';
export { promisify, existsSync, readFileSync, readJSONSync, ensureDirSync, writeJSONSync, mkdirSync, writeFileSync, writeFile };
export { basename, join, relative, extname };
export declare function get(object: any, path: any, value?: any): any;
export declare function set(object: any, path: any, value: any): any;
/**
 * sleep
 * @param time 时间，单位秒
 */
export declare function sleep(time: number): Promise<void>;
//# sourceMappingURL=misc.d.ts.map