import { BuildPlugin } from '../@types';
import { PACKAGE_NAME } from './global';

export const load: BuildPlugin.load = function () {
    console.debug(`${PACKAGE_NAME} load`);
};
export const unload: BuildPlugin.load = function () {
    console.debug(`${PACKAGE_NAME} unload`);
};

const webEasyObfusConfig = {
    hooks: './hooks',
    options: {
        enable: {
            label: `i18n:${PACKAGE_NAME}.options.enable`,
            description: `i18n:${PACKAGE_NAME}.options.enable`,
            default: true,
            render: {
                ui: 'ui-checkbox',
            }
        },
        selectObfusLevel: {
            label: `i18n:${PACKAGE_NAME}.options.selectObfusLevel`,
            description: `i18n:${PACKAGE_NAME}.options.selectObfusLevelDescription`,
            default: 'option2',
            render: {
                ui: 'ui-select',
                items: [
                    {
                        label: `i18n:${PACKAGE_NAME}.options.selectObfusLevelOptions.option0`,
                        value: 'option0',
                    },
                    {
                        label: `i18n:${PACKAGE_NAME}.options.selectObfusLevelOptions.option1`,
                        value: 'option1',
                    },
                    {
                        label: `i18n:${PACKAGE_NAME}.options.selectObfusLevelOptions.option2`,
                        value: 'option2',
                    },
                    {
                        label: `i18n:${PACKAGE_NAME}.options.selectObfusLevelOptions.option3`,
                        value: 'option3',
                    },
                    {
                        label: `i18n:${PACKAGE_NAME}.options.selectObfusLevelOptions.option4`,
                        value: 'option4',
                    },
                ],
            },
        },
    },
}

export const configs: BuildPlugin.Configs = {
    'web-mobile': webEasyObfusConfig,
    'web-desktop': webEasyObfusConfig
};

export const assetHandlers: BuildPlugin.AssetHandlers = './asset-handlers';