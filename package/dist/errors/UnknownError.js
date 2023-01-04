"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnknownError = void 0;
const CliError_1 = require("./CliError");
class UnknownError extends CliError_1.CliError {
    constructor(message) {
        super({
            code: 'CLI::9999',
            message: message !== null && message !== void 0 ? message : 'Sorry, a not mapped error happened. Please tray again. If issue persists, open an issue to project.',
        });
        this.name = 'UnknownError';
    }
}
exports.UnknownError = UnknownError;
