import { Component, Node } from 'cc';
export declare class _EditorHackSceneComponent_ extends Component {
}
export declare const editorSceneWeakMap: WeakMap<Node, _EditorHackSceneComponent_>;
export declare class _EditorHackTransformComponent_ extends Component {
}
export declare const editorTransformWeakMap: WeakMap<Node, _EditorHackTransformComponent_>;
export declare function walkNodeComponent(node: Node, callback: (comp: Component) => void): void;
//# sourceMappingURL=hack-component.d.ts.map