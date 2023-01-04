"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadConfigurationFile = void 0;
const fs_1 = require("fs");
const yaml_1 = __importDefault(require("yaml"));
const FileNotFoundError_1 = require("../errors/FileNotFoundError");
const UnknownError_1 = require("../errors/UnknownError");
const KeysToCamel_1 = __importDefault(require("./KeysToCamel"));
/**
 * Load configs from config.yml file
 * @return Promise<ConfigurationFile> Return ConfigurationFile if promise resolves, Error otherwise.
 */
function loadConfigurationFile() {
    return fs_1.promises
        .readFile('config.yml', { encoding: 'utf8' })
        .then((data) => {
        const { apiKey: key, password, themeId, previewUrl, debug } = (0, KeysToCamel_1.default)(yaml_1.default.parse(data));
        const config = {
            key,
            password,
            themeId,
            previewUrl,
            debug,
        };
        return Promise.resolve(config);
    })
        .catch((error) => {
        const cliError = error.code === 'ENOENT'
            ? new FileNotFoundError_1.FileNotFoundError({ file: 'config.yml', details: error.toString() })
            : new UnknownError_1.UnknownError();
        return Promise.reject(cliError);
    });
}
exports.loadConfigurationFile = loadConfigurationFile;
