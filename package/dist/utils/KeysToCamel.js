"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_camelcase_1 = __importDefault(require("lodash.camelcase"));
function keysToCamel(item) {
    if (item === Object(item) && !Array.isArray(item) && typeof item !== 'function') {
        const n = {};
        Object.keys(item).forEach((key) => {
            const newKey = (0, lodash_camelcase_1.default)(key);
            // @ts-ignore
            n[newKey] = keysToCamel(item[key]);
        });
        return n;
    }
    if (Array.isArray(item)) {
        return item.map((i) => keysToCamel(i));
    }
    return item;
}
exports.default = keysToCamel;
