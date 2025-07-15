/** convert bigints to numbers preserving undefined values */
declare function bigIntToNumber<T extends bigint | undefined>(value: T): T extends bigint ? number : undefined;
/** convert numbers to bigints preserving undefined values */
declare function numberToBigInt<T extends number | undefined>(value: T): T extends number ? bigint : undefined;
declare function splitUtf8(s: string, n: number): Uint8Array[];

export { bigIntToNumber, numberToBigInt, splitUtf8 };
