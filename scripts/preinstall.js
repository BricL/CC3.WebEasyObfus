/**
 * Preinstall script
 */

const { readFileSync } = require('fs');
const { join } = require('path');
const { spawnSync } = require('child_process');

const PATH = {
    packageJSON: join(__dirname, '../package.json'),
};

function checkCreatorTypesVersion(version) {
    const cmd = process.platform === 'win32' ? 'npm.cmd' : 'npm';
    let versionList = spawnSync(cmd, ['view', '@cocos/creator-types', 'versions']).stdout.toString();
    try {
        versionList = JSON.parse(listString);
    } catch (error) {
        // 只存在单个版本号时，在 mac 上输出字符串数组，win 上为字符串，需要容错
    }
    if (versionList.includes(version)) {
        return true;
    }
    return false;
}

try {
    const str = readFileSync(PATH.packageJSON, 'utf8');
    const json = JSON.parse(str);
    const version = json.devDependencies['@cocos/creator-types'].replace(/^[^\d]+/, '');

    if (!checkCreatorTypesVersion(version)) {
        console.log('\x1b[33mWarning:\x1b[0m');
        console.log('  @en');
        console.log('    Version check of @cocos/creator-types failed.');
        console.log(`    The definition of ${version} has not been released yet. Please export the definition to the ./node_modules directory by selecting "Developer -> Export Interface Definition" in the menu of the Creator editor.`);
        console.log('    The definition of the corresponding version will be released on npm after the editor is officially released.');
        console.log('  @zh');
        console.log('    @cocos/creator-types 版本检查失败。');
        console.log(`    ${version} 定义还未发布，请先通过 Creator 编辑器菜单 "开发者 -> 导出接口定义"，导出定义到 ./node_modules 目录。`);
        console.log(`    对应版本的定义会在编辑器正式发布后同步发布到 npm 上。`);
    }
} catch (error) {
    console.error(error);
}
