
import * as AssetDb from './packages/asset-db/@types/protected/message';
import * as Builder from './packages/builder/@types/protected/message';
import * as Engine from './packages/engine/@types/protected/message';
import * as Information from './packages/information/@types/message';
import * as Preferences from './packages/preferences/@types/message';
import * as Preview from './packages/preview/@types/protected/message';
import * as Program from './packages/program/@types/message';
import * as Programming from './packages/programming/@types/message';
import * as Project from './packages/project/@types/message';
import * as Scene from './packages/scene/@types/message';
import * as Server from './packages/server/@types/message';
import * as Device from './packages/device/@types/message';
import * as Extension from './packages/extension/@types/message';

declare global {
    interface EditorMessageContent {
        params: any[],
        result: any;
    }

    interface EditorMessageMap {
        [x: string]: EditorMessageContent;
    }

    interface EditorMessageMaps {
        [x: string]: EditorMessageMap;
        'asset-db': AssetDb.message;
        'builder': Builder.message;
        'engine': Engine.message;
        'information': Information.message;
        'preferences': Preferences.message;
        'preview': Preview.message;
        'program': Program.message;
        'programming': Programming.message;
        'project': Project.message;
        'scene': Scene.message;
        'server': Server.message;
        'device': Device.message;
        'extension': Extension.message;

    }
}
