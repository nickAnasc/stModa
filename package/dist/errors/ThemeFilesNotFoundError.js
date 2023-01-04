"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeFilesNotFoundError = void 0;
const CliError_1 = require("./CliError");
class ThemeFilesNotFoundError extends CliError_1.CliError {
    constructor() {
        super({
            code: 'CLI::0006',
            message: 'Themes files not found on current directory. Verify and try again.',
        });
        this.name = 'ThemeFilesNotFoundError';
    }
}
exports.ThemeFilesNotFoundError = ThemeFilesNotFoundError;
