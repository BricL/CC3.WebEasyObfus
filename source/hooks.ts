import path from 'path';
import { BuildHook, IBuildResult, ITaskOptions } from '../@types';
import { PACKAGE_NAME } from './global';
import * as fs from 'fs-extra';
import JavaScriptObfuscator from 'javascript-obfuscator';

export const throwError: BuildHook.throwError = true;

export const load: BuildHook.load = async function () {

};

export const onBeforeBuild: BuildHook.onBeforeBuild = async function (options: ITaskOptions, result: IBuildResult) {

};

export const onBeforeCompressSettings: BuildHook.onBeforeCompressSettings = async function (options: ITaskOptions, result: IBuildResult) {

};

export const onAfterCompressSettings: BuildHook.onAfterCompressSettings = async function (options: ITaskOptions, result: IBuildResult) {

};

export const onAfterBuild: BuildHook.onAfterBuild = async function (options: ITaskOptions, result: IBuildResult) {
    const pkgOptions = options.packages[PACKAGE_NAME];
    if (pkgOptions.enable) {
        const BUILD_DEST_DIR = result.dest;
        const filePath = path.join(BUILD_DEST_DIR, 'assets', 'main');
        console.log('BUILD_DEST_DIR', filePath);

        let obfuscationOptions = {};
        if (pkgOptions.selectObfusLevel === 'option1') {
            obfuscationOptions = {
                "compact": true, // Minifies the output code to reduce file size.
                "controlFlowFlattening": true, // Enables control flow flattening for added complexity.
                "controlFlowFlatteningThreshold": 0.75, // Applies control flow flattening to 75% of the code.
                "deadCodeInjection": false, // Avoids injecting unnecessary dead code.
                "stringArray": true, // Moves strings into a separate array for obfuscation.
                "stringArrayThreshold": 0.75 // Applies string array obfuscation to 75% of strings.
            }
        } else if (pkgOptions.selectObfusLevel === 'option2') {
            obfuscationOptions = {
                "compact": true, // Minifies the output code to reduce file size.
                "controlFlowFlattening": true, // Enables control flow flattening for added complexity.
                "controlFlowFlatteningThreshold": 0.9, // Applies control flow flattening to 90% of the code.
                "deadCodeInjection": true, // Adds dead code to make reverse engineering harder.
                "deadCodeInjectionThreshold": 0.4, // Inserts dead code in 40% of places.
                "renameGlobals": false, // Keeps global variable names unchanged for compatibility.
                "stringArray": true, // Moves strings into a separate array for obfuscation.
                "stringArrayEncoding": ["base64"], // Encodes strings in the array using Base64.
                "stringArrayThreshold": 0.9, // Applies string array obfuscation to 90% of strings.
                "transformObjectKeys": true // Obfuscates object keys for added security.
            }
        } else if (pkgOptions.selectObfusLevel === 'option3') {
            obfuscationOptions = {
                "compact": true, // Minifies the output code to reduce file size.
                "controlFlowFlattening": true, // Enables control flow flattening for added complexity.
                "controlFlowFlatteningThreshold": 1, // Applies control flow flattening to all code.
                "deadCodeInjection": true, // Adds dead code to make reverse engineering harder.
                "deadCodeInjectionThreshold": 0.5, // Inserts dead code in 50% of places.
                "renameGlobals": true, // Renames global variables for better obfuscation.
                "stringArray": true, // Moves strings into a separate array for obfuscation.
                "stringArrayEncoding": ["rc4"], // Encodes strings in the array using RC4 encryption.
                "stringArrayThreshold": 1, // Applies string array obfuscation to all strings.
                "transformObjectKeys": true // Obfuscates object keys for added security.
            }
        } else if (pkgOptions.selectObfusLevel === 'option4') {
            obfuscationOptions = {
                "compact": true, // Minifies the output code to reduce file size.
                "controlFlowFlattening": true, // Enables control flow flattening for added complexity.
                "controlFlowFlatteningThreshold": 1, // Applies control flow flattening to all code.
                "deadCodeInjection": true, // Adds dead code to make reverse engineering harder.
                "deadCodeInjectionThreshold": 1, // Inserts dead code in all possible places.
                "renameGlobals": true, // Renames global variables for better obfuscation.
                "stringArray": true, // Moves strings into a separate array for obfuscation.
                "stringArrayEncoding": ["base64", "rc4"], // Encodes strings using both Base64 and RC4 encryption.
                "stringArrayThreshold": 1, // Applies string array obfuscation to all strings.
                "transformObjectKeys": true, // Obfuscates object keys for added security.
                "unicodeEscapeSequence": true, // Converts characters to Unicode escape sequences for obfuscation.
                "disableConsoleOutput": true // Replaces console output calls with empty functions to hide debugging messages.
            }
        } else {
            obfuscationOptions = {
                "compact": true, // Minifies the output code to reduce file size.
                "controlFlowFlattening": false, // Disables converting code into a more complex control flow structure.
                "deadCodeInjection": false, // Disables adding redundant dead code blocks.
                "renameGlobals": false, // Keeps global variable names unchanged.
                "stringArray": false // Avoids extracting strings into a separate array for simplicity.
            }
        }

        searchFile(filePath, 'index', (err, files) => {
            if (err) {
                console.error(err);
                return;
            }

            console.log('Found files:', files);

            fs.readFile(files[0], 'utf8', (err, data) => {
                if (err) {
                    console.error(err);
                    return;
                }

                const obfuscatedData = JavaScriptObfuscator.obfuscate(data, obfuscationOptions).getObfuscatedCode();

                fs.writeFile(files[0], obfuscatedData, (err) => {
                    if (err) {
                        console.error(err);
                        return;
                    }
                    console.log('File obfuscated and saved successfully.');
                });
            });
        });
    }
};

export const unload: BuildHook.unload = async function () {

};

export const onError: BuildHook.onError = async function (options, result) {

};

export const onBeforeMake: BuildHook.onBeforeMake = async function (root, options) {

};

export const onAfterMake: BuildHook.onAfterMake = async function (root, options) {

};

function searchFile(dir: string, searchTerm: string, callback: (err: Error | null, result?: string[]) => void) {
    fs.readdir(dir, (err, files) => {
        if (err) {
            callback(err);
            return;
        }

        let results: string[] = [];
        let pending = files.length;

        if (!pending) {
            callback(null, results);
            return;
        }

        files.forEach(file => {
            const filePath = path.join(dir, file);
            fs.stat(filePath, (err, stats) => {
                if (err) {
                    callback(err);
                    return;
                }

                if (stats.isDirectory()) {
                    searchFile(filePath, searchTerm, (err, res) => {
                        if (err) {
                            callback(err);
                            return;
                        }
                        results = results.concat(res || []);
                        if (!--pending) callback(null, results);
                    });
                } else {
                    if (file.includes(searchTerm)) {
                        results.push(filePath);
                    }
                    if (!--pending) callback(null, results);
                }
            });
        });
    });
}