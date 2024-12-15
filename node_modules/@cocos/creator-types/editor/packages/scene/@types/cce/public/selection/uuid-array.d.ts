declare class UuidArray {
    uuids: string[];
    constructor();
    add(uuid: string): boolean;
    remove(uuid: string): boolean;
    forEach(handler: any): void;
    clear(): void;
    indexOf(uuid: string): number;
    last(): string;
    first(): string;
}
export default UuidArray;
//# sourceMappingURL=uuid-array.d.ts.map