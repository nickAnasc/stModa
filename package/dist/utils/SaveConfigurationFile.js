"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveConfigurationFile = void 0;
const fs_1 = require("fs");
const yaml_1 = __importDefault(require("yaml"));
const SaveConfigurationFileError_1 = require("../errors/SaveConfigurationFileError");
/**
 * Save configs to config.yml file
 * @param {ConfigurationFile} param Configuration object with configs to be saved.
 * @return Promise<string> Return success message if promise resolves, SaveConfigurationFileError otherwise.
 */
function saveConfigurationFile({ key, password, themeId, previewUrl, debug, }) {
    const fileDataAsObject = {
        ':api_key': key,
        ':password': password,
        ':theme_id': themeId,
        ':preview_url': previewUrl,
        ':debug': debug,
    };
    const configFileData = yaml_1.default.stringify(fileDataAsObject);
    return fs_1.promises
        .writeFile('config.yml', configFileData)
        .then(() => Promise.resolve('Configuration file created'))
        .catch((error) => {
        const cliError = new SaveConfigurationFileError_1.SaveConfigurationFileError(error);
        return Promise.reject(cliError);
    });
}
exports.saveConfigurationFile = saveConfigurationFile;
