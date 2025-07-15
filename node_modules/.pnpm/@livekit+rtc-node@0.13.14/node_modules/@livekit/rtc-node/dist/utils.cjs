"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var utils_exports = {};
__export(utils_exports, {
  bigIntToNumber: () => bigIntToNumber,
  numberToBigInt: () => numberToBigInt,
  splitUtf8: () => splitUtf8
});
module.exports = __toCommonJS(utils_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  bigIntToNumber,
  numberToBigInt,
  splitUtf8
});
//# sourceMappingURL=utils.cjs.map