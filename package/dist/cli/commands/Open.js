"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const open_1 = __importDefault(require("open"));
const ora_1 = __importDefault(require("ora"));
const ParameterNotDefinedError_1 = require("../../errors/ParameterNotDefinedError");
const LoadConfigurationFile_1 = require("../../utils/LoadConfigurationFile");
function open() {
    commander_1.program
        .command('open')
        .description('Open theme preview url in default browser')
        .action(() => {
        const loader = (0, ora_1.default)('Opening theme preview page...').start();
        (0, LoadConfigurationFile_1.loadConfigurationFile)()
            .then((config) => {
            if (!config.previewUrl) {
                return Promise.reject(new ParameterNotDefinedError_1.ParameterNotDefinedError('Preview url'));
            }
            return (0, open_1.default)(config.previewUrl)
                .then(() => loader.succeed('Theme preview page opened in default browser.'))
                .catch((error) => Promise.reject(error));
        })
            .catch((error) => {
            loader.fail(error.toString());
        });
    });
}
exports.default = open;
