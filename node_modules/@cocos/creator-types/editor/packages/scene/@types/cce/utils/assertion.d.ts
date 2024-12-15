/**
 * Asserts that the expression is non-nullable, i.e. is neither `null` nor `undefined`.
 * @param expr Testing expression.
 * @param message Optional message.
 */
export declare function assertIsNonNullable<T>(expr: T, message?: string): asserts expr is NonNullable<T>;
/**
 * Asserts that the expression evaluated to `true`.
 * @param expr Testing expression.
 * @param message Optional message.
 */
export declare function assertIsTrue(expr: unknown, message?: string): asserts expr;
export declare function assertsArrayIndex<T>(array: T[], index: number): void;
//# sourceMappingURL=assertion.d.ts.map