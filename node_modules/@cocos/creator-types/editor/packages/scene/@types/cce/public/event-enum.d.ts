declare enum NodeEventType {
    TRANSFORM_CHANGED = "transform-changed",
    SIZE_CHANGED = "size-changed",
    ANCHOR_CHANGED = "anchor-changed",
    CHILD_ADDED = "child-added",
    CHILD_REMOVED = "child-removed",
    PARENT_CHANGED = "parent-changed",
    CHILD_CHANGED = "child-changed",
    COMPONENT_CHANGED = "component-changed",
    ACTIVE_IN_HIERARCHY_CHANGE = "active-in-hierarchy-changed",
    NOTIFY_NODE_CHANGED = "notify-node-changed",
    PREFAB_INFO_CHANGED = "prefab-info-changed",
    LIGHT_PROBE_CHANGED = "light-probe-changed"
}
declare enum NodeOperationType {
    SET_PROPERTY = "set-property",
    MOVE_ARRAY_ELEMENT = "move-array-element",
    REMOVE_ARRAY_ELEMENT = "remove-array-element",
    CREATE_COMPONENT = "create-component",
    RESET_COMPONENT = "reset-component"
}
declare enum EventSourceType {
    EDITOR = "editor",
    UNDO = "undo",
    ENGINE = "engine"
}
export { NodeEventType, NodeOperationType, EventSourceType };
//# sourceMappingURL=event-enum.d.ts.map