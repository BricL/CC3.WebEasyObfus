# CC3.WebEasyObfus

![Static Badge](https://img.shields.io/badge/Version-1.0.4-blue) ![Static Badge](https://img.shields.io/badge/CocosCreator-3.8.x-green) ![Static Badge](https://img.shields.io/badge/Tested_On-web-yellow)

Just check and select, and you're done, Obfuscator code with WebEasyObfus is simple.

> *"Don’t just pass by, give it a try—hit a star and show your support!"*

> *Note：If you have any feedback on the plugin, please go to [Cocos 中文论坛](https://forum.cocos.org/t/topic/163849)*


## Installation

1. Download ZIP package from github.

2. Decompress the file and copy the contents to `${your_project_path}/extensions/web-easy-obfus`.

3. Open the terminal

     * `cd ${your_project_path}/extensions/web-zip-bundle`

         * Enter `npm install`, install dependency packages.

         * Enter `npm run build`, build the extension.

4. Go to the Editor menu `Extension -> Extension Manager -> Installed` to active the extension.

    >*Note：You can also check out the official docs for installation instructions. [【扩展 安装与分享】](https://docs.cocos.com/creator/3.8/manual/zh/editor/extension/install.html).*


## How to Use

1. Go to the Build Setting, add a Ner Build Task, and select the platform as WebModule or WebDesktop. In the Panel, scroll down to find the web-easy=obfus option.

    * Enable：Turn on/off the extension.

    * Include All Bundle

        * Check this: all bundle JS files will be obfuscated; otherwhile, only `assets/main/bundle.js` will be obfuscated.

    * Select Obfus Level：There are five levels of obfuscation. The higher the level, the more thorough the obfuscation, but the file size wil increase, and execution performance may be affected.

        * Minimal，The settings for javascript-obfuscator are as folloes:

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

        * Standard，The settings for javascript-obfuscator are as folloes:

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

        * Enhanced，The settings for javascript-obfuscator are as folloes:

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

        * Secure，The settings for javascript-obfuscator are as folloes:

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

        * Ultimate，The settings for javascript-obfuscator are as folloes:

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

This exrension natively supports CI/CD. Export the current platform's build config as a JSON file from the Build Panel for [命令行构建](https://docs.cocos.com/creator/3.8/manual/zh/editor/publish/publish-in-command-line.html)。


## References

* [javascript-obfuscator](https://github.com/javascript-obfuscator/javascript-obfuscator)

* [Cocos Creator 官方的 UI 範例 GitHub：Cocos UI Example](https://github.com/cocos/cocos-example-ui)