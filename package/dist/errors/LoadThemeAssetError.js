"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadThemeAssetError = void 0;
const os_1 = require("os");
const CliError_1 = require("./CliError");
class LoadThemeAssetError extends CliError_1.CliError {
    constructor(details) {
        super({
            code: 'CLI::0005',
            message: 'Unable to load theme asset data. See details for more information.',
            details,
        });
        this.name = 'LoadThemeAssetError';
    }
    toString() {
        return `[${this.name}] [${this.code}]: ${this.message}${os_1.EOL}${this.details}`;
    }
}
exports.LoadThemeAssetError = LoadThemeAssetError;
