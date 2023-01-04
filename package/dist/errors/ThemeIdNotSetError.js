"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeIdNotSetError = void 0;
const CliError_1 = require("./CliError");
class ThemeIdNotSetError extends CliError_1.CliError {
    constructor() {
        super({
            code: 'CLI::0004',
            message: 'Theme Id not set or passed. Please verify and tray again',
        });
        this.name = 'SaveConfigurationFileError';
    }
}
exports.ThemeIdNotSetError = ThemeIdNotSetError;
