"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assetHandlers = exports.configs = exports.unload = exports.load = void 0;
const global_1 = require("./global");
const load = function () {
    console.debug(`${global_1.PACKAGE_NAME} load`);
};
exports.load = load;
const unload = function () {
    console.debug(`${global_1.PACKAGE_NAME} unload`);
};
exports.unload = unload;
const webEasyObfusConfig = {
    hooks: './hooks',
    options: {
        enable: {
            label: `i18n:${global_1.PACKAGE_NAME}.options.enable`,
            description: `i18n:${global_1.PACKAGE_NAME}.options.enable`,
            default: true,
            render: {
                ui: 'ui-checkbox',
            }
        },
        selectObfusLevel: {
            label: `i18n:${global_1.PACKAGE_NAME}.options.selectObfusLevel`,
            description: `i18n:${global_1.PACKAGE_NAME}.options.selectObfusLevelDescription`,
            default: 'option2',
            render: {
                ui: 'ui-select',
                items: [
                    {
                        label: `i18n:${global_1.PACKAGE_NAME}.options.selectObfusLevelOptions.option0`,
                        value: 'option0',
                    },
                    {
                        label: `i18n:${global_1.PACKAGE_NAME}.options.selectObfusLevelOptions.option1`,
                        value: 'option1',
                    },
                    {
                        label: `i18n:${global_1.PACKAGE_NAME}.options.selectObfusLevelOptions.option2`,
                        value: 'option2',
                    },
                    {
                        label: `i18n:${global_1.PACKAGE_NAME}.options.selectObfusLevelOptions.option3`,
                        value: 'option3',
                    },
                    {
                        label: `i18n:${global_1.PACKAGE_NAME}.options.selectObfusLevelOptions.option4`,
                        value: 'option4',
                    },
                ],
            },
        },
    },
};
exports.configs = {
    'web-mobile': webEasyObfusConfig,
    'web-desktop': webEasyObfusConfig
};
exports.assetHandlers = './asset-handlers';
