function bigIntToNumber(value) {
  return value !== void 0 ? Number(value) : void 0;
}
function numberToBigInt(value) {
  return value !== void 0 ? BigInt(value) : void 0;
}
function splitUtf8(s, n) {
  if (n < 4) {
    throw new Error("n must be at least 4 due to utf8 encoding rules");
  }
  const result = [];
  let encoded = new TextEncoder().encode(s);
  while (encoded.length > n) {
    let k = n;
    while (k > 0) {
      const byte = encoded[k];
      if (byte !== void 0 && (byte & 192) !== 128) {
        break;
      }
      k--;
    }
    result.push(encoded.slice(0, k));
    encoded = encoded.slice(k);
  }
  if (encoded.length > 0) {
    result.push(encoded);
  }
  return result;
}
export {
  bigIntToNumber,
  numberToBigInt,
  splitUtf8
};
//# sourceMappingURL=utils.js.map