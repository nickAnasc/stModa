"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreviewUrlNotDefinedError = void 0;
const CliError_1 = require("./CliError");
class PreviewUrlNotDefinedError extends CliError_1.CliError {
    constructor() {
        super({
            code: 'CLI::0003',
            message: 'Preview url not defined. Please verify config.yml file and try again.',
        });
        this.name = 'PreviewUrlNotDefinedError';
    }
}
exports.PreviewUrlNotDefinedError = PreviewUrlNotDefinedError;
