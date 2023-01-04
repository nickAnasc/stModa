"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveConfigurationFileError = void 0;
const os_1 = require("os");
const CliError_1 = require("./CliError");
class SaveConfigurationFileError extends CliError_1.CliError {
    constructor(details) {
        super({
            code: 'CLI::0001',
            message: 'Unable to save configuration file. See details for more information.',
            details,
        });
        this.name = 'SaveConfigurationFileError';
    }
    toString() {
        return `[${this.name}] [${this.code}]: ${this.message}${os_1.EOL}${this.details}`;
    }
}
exports.SaveConfigurationFileError = SaveConfigurationFileError;
