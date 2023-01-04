"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveThemeAssetError = void 0;
const os_1 = require("os");
const CliError_1 = require("./CliError");
class SaveThemeAssetError extends CliError_1.CliError {
    constructor(details) {
        super({
            code: 'CLI::0004',
            message: 'Unable to save theme asset. See details for more information.',
            details,
        });
        this.name = 'SaveThemeAssetError';
    }
    toString() {
        return `[${this.name}] [${this.code}]: ${this.message}${os_1.EOL}${this.details}`;
    }
}
exports.SaveThemeAssetError = SaveThemeAssetError;
