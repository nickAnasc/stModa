"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveThemeAssetFile = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
const SaveThemeAssetError_1 = require("../errors/SaveThemeAssetError");
/**
 * Save theme file to disk. With folder not exists it will be created.
 * @param {string} path File path where file needs to be created with file name.
 * @param {Buffer} data File content to be saved.
 * @return {Promise} Returns true when promises resolves, CliError otherwise.
 */
function saveThemeAssetFile(path, data) {
    const correctPath = `.${path}`;
    const fileDirname = (0, path_1.dirname)(correctPath);
    return fs_1.promises
        .access(fileDirname)
        .catch(() => fs_1.promises.mkdir(fileDirname, { recursive: true }))
        .then(() => fs_1.promises.writeFile(correctPath, data))
        .then(() => Promise.resolve(true))
        .catch((error) => Promise.reject(new SaveThemeAssetError_1.SaveThemeAssetError(error.message)));
}
exports.saveThemeAssetFile = saveThemeAssetFile;
