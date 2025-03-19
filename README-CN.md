# CC3.WebEasyObfus

![Static Badge](https://img.shields.io/badge/Version-1.0.2-blue) ![Static Badge](https://img.shields.io/badge/CocosCreator-3.8.x-green) ![Static Badge](https://img.shields.io/badge/Tested_On-web-yellow)

*EN | [中文](/README-CN.md)

<p align="center"><img src="./logo.jpg" width="256"></p>

勾勾、选选就完事，WebEasyObfus 混淆項目代码就这样简单。

> *「走過路過，別錯過，點顆星星，支持我！」*

> *（注：对插件的意见反馈请至 [Cocos 中文论坛](https://forum.cocos.org/t/topic/164539)。）*


## 安装方法

1. 下载项目成 ZIP 文件。

2. 解压后将内容复制到 `${your_project_path}/extensions/web-easy-obfus`。

3. 打开终端

     * 输入 `cd ${your_project_path}/extensions/web-zip-bundle`

         * 安装扩展依赖包 `npm install`

         * 构建扩展 `npm run build`

4. 到 Editor 菜单 Extension -> Extension Manager -> Installed 启用 `web-easy-obfus`。

   <p align="center"><img src="doc/img/extension_manager.png" width="450"></p>

    >(*注：安装方法也可参考官方文档 [【扩展 安装与分享】](https://docs.cocos.com/creator/3.8/manual/zh/editor/extension/install.html) 。*)


## 如何使用

1. 到 Build Setting 新增 New Build Task 并选择平台 WebMobile/WebDesktop。到 Panel 中下拉找到 web-easy-obfus 选项。

    * Enable：启用或关闭功能。

    * Include All Bundle: 包含所有Bundle

        * 启用后，所有 Bundle 内的 JS 档案将进行混淆，否则只有 `assets/main/bundle.js` 下的JS档案将进行混淆。

    * Select Obfus Level：混淆分为五个等级，等级越高，混淆程度越彻底，但文件体积会增大，执行性能可能略受影响。

        * 基础 (Minimal)，對 javascript-obfuscator 設定分別為：

            ```javascript
            {
                // Minifies the output code to reduce file size.
                "compact": true, 
                // Disables converting code into a more complex control flow structure.
                "controlFlowFlattening": false,
                // Disables adding redundant dead code blocks. 
                "deadCodeInjection": false,
                // Keeps global variable names unchanged. 
                "renameGlobals": false,
                // Avoids extracting strings into a separate array for simplicity. 
                "stringArray": false 
            }
            ```

        * 标准 (Standard)，對 javascript-obfuscator 設定分別為：

            ```javascript
            {
                // Minifies the output code to reduce file size.
                "compact": true, 
                // Enables control flow flattening for added complexity.
                "controlFlowFlattening": true, 
                // Applies control flow flattening to 75% of the code.
                "controlFlowFlatteningThreshold": 0.75, 
                // Avoids injecting unnecessary dead code.
                "deadCodeInjection": false, 
                // Moves strings into a separate array for obfuscation.
                "stringArray": true, 
                // Applies string array obfuscation to 75% of strings.
                "stringArrayThreshold": 0.75 
            }
            ```

        * 增强 (Enhanced)，對 javascript-obfuscator 設定分別為：

            ```javascript
            {
                // Minifies the output code to reduce file size.
                "compact": true, 
                // Enables control flow flattening for added complexity.
                "controlFlowFlattening": true,
                // Applies control flow flattening to 90% of the code.
                "controlFlowFlatteningThreshold": 0.9,
                // Adds dead code to make reverse engineering harder.
                "deadCodeInjection": true,
                // Inserts dead code in 40% of places.
                "deadCodeInjectionThreshold": 0.4,
                // Keeps global variable names unchanged for compatibility.
                "renameGlobals": false, 
                // Moves strings into a separate array for obfuscation.
                "stringArray": true,
                // Encodes strings in the array using Base64.
                "stringArrayEncoding": ["base64"],
                // Applies string array obfuscation to 90% of strings.
                "stringArrayThreshold": 0.9,
                // Obfuscates object keys for added security.
                "transformObjectKeys": true 
            }
            ```

        * 安全 (Secure)，對 javascript-obfuscator 設定分別為：

            ```javascript
            {
                // Minifies the output code to reduce file size.
                "compact": true, 
                // Enables control flow flattening for added complexity.
                "controlFlowFlattening": true, 
                // Applies control flow flattening to all code.
                "controlFlowFlatteningThreshold": 1,
                // Adds dead code to make reverse engineering harder. 
                "deadCodeInjection": true, 
                // Inserts dead code in 50% of places.
                "deadCodeInjectionThreshold": 0.5, 
                // Renames global variables for better obfuscation.
                "renameGlobals": true,
                // Moves strings into a separate array for obfuscation. 
                "stringArray": true, 
                // Encodes strings in the array using RC4 encryption.
                "stringArrayEncoding": ["rc4"],
                // Applies string array obfuscation to all strings. 
                "stringArrayThreshold": 1, 
                // Obfuscates object keys for added security.
                "transformObjectKeys": true 
            }
            ```

        * 极致 (Ultimate)，對 javascript-obfuscator 設定分別為：

            ```javascript
            {
                // Minifies the output code to reduce file size.
                "compact": true, 
                // Enables control flow flattening for added complexity.
                "controlFlowFlattening": true, 
                // Applies control flow flattening to all code.
                "controlFlowFlatteningThreshold": 1, 
                // Adds dead code to make reverse engineering harder.
                "deadCodeInjection": true, 
                // Inserts dead code in all possible places.
                "deadCodeInjectionThreshold": 1, 
                // Renames global variables for better obfuscation.
                "renameGlobals": true,
                // Moves strings into a separate array for obfuscation. 
                "stringArray": true, 
                // Encodes strings using both Base64 and RC4 encryption.
                "stringArrayEncoding": ["base64", "rc4"], 
                // Applies string array obfuscation to all strings.
                "stringArrayThreshold": 1, 
                // Obfuscates object keys for added security.
                "transformObjectKeys": true, 
                // Converts characters to Unicode escape sequences for obfuscation.
                "unicodeEscapeSequence": true,
                // Replaces console output calls with empty functions to hide debugging messages. 
                "disableConsoleOutput": true 
            }
            ```

## CI/CD

本插件天然支持 CI/CD，只需從 Build Panel 导出当前平台的构建选项配置为 json 文件，用于[命令行构建](https://docs.cocos.com/creator/3.8/manual/zh/editor/publish/publish-in-command-line.html)。

<p align="center"><img src="./doc/img/build_panel_export.png" width="400"></p>


## 参考文献

* [javascript-obfuscator](https://github.com/javascript-obfuscator/javascript-obfuscator)

* [Cocos Creator 官方的 UI 範例 GitHub：Cocos UI Example](https://github.com/cocos/cocos-example-ui)
