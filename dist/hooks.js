"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.onAfterMake = exports.onBeforeMake = exports.onError = exports.unload = exports.onAfterBuild = exports.onAfterCompressSettings = exports.onBeforeCompressSettings = exports.onBeforeBuild = exports.load = exports.throwError = void 0;
const path_1 = __importDefault(require("path"));
const global_1 = require("./global");
const fs = __importStar(require("fs-extra"));
const javascript_obfuscator_1 = __importDefault(require("javascript-obfuscator"));
exports.throwError = true;
const load = function () {
    return __awaiter(this, void 0, void 0, function* () {
    });
};
exports.load = load;
const onBeforeBuild = function (options, result) {
    return __awaiter(this, void 0, void 0, function* () {
    });
};
exports.onBeforeBuild = onBeforeBuild;
const onBeforeCompressSettings = function (options, result) {
    return __awaiter(this, void 0, void 0, function* () {
    });
};
exports.onBeforeCompressSettings = onBeforeCompressSettings;
const onAfterCompressSettings = function (options, result) {
    return __awaiter(this, void 0, void 0, function* () {
    });
};
exports.onAfterCompressSettings = onAfterCompressSettings;
const onAfterBuild = function (options, result) {
    return __awaiter(this, void 0, void 0, function* () {
        const pkgOptions = options.packages[global_1.PACKAGE_NAME];
        if (pkgOptions.enable) {
            const BUILD_DEST_DIR = result.dest;
            const filePath = path_1.default.join(BUILD_DEST_DIR, 'assets', 'main');
            console.log('BUILD_DEST_DIR', filePath);
            let obfuscationOptions = {};
            if (pkgOptions.selectObfusLevel === 'option1') {
                obfuscationOptions = {
                    "compact": true,
                    "controlFlowFlattening": true,
                    "controlFlowFlatteningThreshold": 0.75,
                    "deadCodeInjection": false,
                    "stringArray": true,
                    "stringArrayThreshold": 0.75 // Applies string array obfuscation to 75% of strings.
                };
            }
            else if (pkgOptions.selectObfusLevel === 'option2') {
                obfuscationOptions = {
                    "compact": true,
                    "controlFlowFlattening": true,
                    "controlFlowFlatteningThreshold": 0.9,
                    "deadCodeInjection": true,
                    "deadCodeInjectionThreshold": 0.4,
                    "renameGlobals": false,
                    "stringArray": true,
                    "stringArrayEncoding": ["base64"],
                    "stringArrayThreshold": 0.9,
                    "transformObjectKeys": true // Obfuscates object keys for added security.
                };
            }
            else if (pkgOptions.selectObfusLevel === 'option3') {
                obfuscationOptions = {
                    "compact": true,
                    "controlFlowFlattening": true,
                    "controlFlowFlatteningThreshold": 1,
                    "deadCodeInjection": true,
                    "deadCodeInjectionThreshold": 0.5,
                    "renameGlobals": true,
                    "stringArray": true,
                    "stringArrayEncoding": ["rc4"],
                    "stringArrayThreshold": 1,
                    "transformObjectKeys": true // Obfuscates object keys for added security.
                };
            }
            else if (pkgOptions.selectObfusLevel === 'option4') {
                obfuscationOptions = {
                    "compact": true,
                    "controlFlowFlattening": true,
                    "controlFlowFlatteningThreshold": 1,
                    "deadCodeInjection": true,
                    "deadCodeInjectionThreshold": 1,
                    "renameGlobals": true,
                    "stringArray": true,
                    "stringArrayEncoding": ["base64", "rc4"],
                    "stringArrayThreshold": 1,
                    "transformObjectKeys": true,
                    "unicodeEscapeSequence": true,
                    "disableConsoleOutput": true // Replaces console output calls with empty functions to hide debugging messages.
                };
            }
            else {
                obfuscationOptions = {
                    "compact": true,
                    "controlFlowFlattening": false,
                    "deadCodeInjection": false,
                    "renameGlobals": false,
                    "stringArray": false // Avoids extracting strings into a separate array for simplicity.
                };
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
                    const obfuscatedData = javascript_obfuscator_1.default.obfuscate(data, obfuscationOptions).getObfuscatedCode();
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
    });
};
exports.onAfterBuild = onAfterBuild;
const unload = function () {
    return __awaiter(this, void 0, void 0, function* () {
    });
};
exports.unload = unload;
const onError = function (options, result) {
    return __awaiter(this, void 0, void 0, function* () {
    });
};
exports.onError = onError;
const onBeforeMake = function (root, options) {
    return __awaiter(this, void 0, void 0, function* () {
    });
};
exports.onBeforeMake = onBeforeMake;
const onAfterMake = function (root, options) {
    return __awaiter(this, void 0, void 0, function* () {
    });
};
exports.onAfterMake = onAfterMake;
function searchFile(dir, searchTerm, callback) {
    fs.readdir(dir, (err, files) => {
        if (err) {
            callback(err);
            return;
        }
        let results = [];
        let pending = files.length;
        if (!pending) {
            callback(null, results);
            return;
        }
        files.forEach(file => {
            const filePath = path_1.default.join(dir, file);
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
                        if (!--pending)
                            callback(null, results);
                    });
                }
                else {
                    if (file.includes(searchTerm)) {
                        results.push(filePath);
                    }
                    if (!--pending)
                        callback(null, results);
                }
            });
        });
    });
}
