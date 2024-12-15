# creator-types

[![CI Status](https://github.com/cocos/creator-types/actions/workflows/ci.yaml/badge.svg)](https://github.com/cocos/creator-types/actions/workflows/ci.yaml)
![Typescript](https://img.shields.io/badge/Language-Typescript-blue.svg)

Definitions of engine and editor within Creator

**Please note that this repository is for definition purposes only. Run your code in an appropriate environment.**

## Install

To install the latest version of the definitions:

```bash
npm install @cocos/creator-types
```

In typical scenarios, we need to install definitions for a specific version, for example, when we are using Creator 3.8.0, you can install the definition files as follows:

```bash
npm install @cocos/creator-types@3.8.0
```

## Usage

In the tsconfig.json within the project where it's needed, locate compilerOptions.types and add two declarations:

```json
{
    "compilerOptions": {
        "types": [
            "@cocos/creator-types/engine",
            "@cocos/creator-types/editor",
        ]
    }
}
```

After declaring `@cocos/creator-types/engine`, the `cc` module can be recognized correctly in the code:

```ts
import { Node } from 'cc';
```

After declaring `@cocos/creator-types/editor`, the `Editor` object can be recognized correctly in the code.

```ts
Editor.Dialog;
```

For more detailed information, please refer to:

[Engine API](https://docs.cocos.com/creator/api/en/)

[Extension Doc](https://docs.cocos.com/creator/manual/en/editor/extension/readme.html)
