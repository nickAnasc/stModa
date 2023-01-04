"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileNotFoundError = void 0;
const CliError_1 = require("./CliError");
class FileNotFoundError extends CliError_1.CliError {
    constructor({ file, details }) {
        super({
            code: 'CLI::0002',
            message: `${file ? `${file}` : 'File'} not found on current directory. Verify and try again.`,
            details,
        });
        this.name = 'FileNotFoundError';
    }
}
exports.FileNotFoundError = FileNotFoundError;
