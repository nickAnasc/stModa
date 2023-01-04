"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParameterNotDefinedError = void 0;
const CliError_1 = require("./CliError");
class ParameterNotDefinedError extends CliError_1.CliError {
    constructor(field) {
        super({
            code: 'CLI::0003',
            message: `${field} not defined. Please verify and try again.`,
        });
        this.name = 'ParameterNotDefinedError';
    }
}
exports.ParameterNotDefinedError = ParameterNotDefinedError;
