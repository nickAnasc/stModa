"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CliError = void 0;
class CliError extends Error {
    constructor({ code, message, details, data }) {
        super(message);
        this.code = code;
        this.details = details;
        this.data = data;
        this.name = 'CliError';
    }
    toString() {
        return `[${this.name}] [${this.code}]: ${this.message}`;
    }
}
exports.CliError = CliError;
