"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepareToUpload = void 0;
const fs_1 = require("fs");
const isbinaryfile_1 = require("isbinaryfile");
const LoadThemeAssetError_1 = require("../errors/LoadThemeAssetError");
function prepareToUpload(filename) {
    const correctFilename = filename.startsWith('/') ? filename : `/${filename}`;
    return fs_1.promises
        .readFile(`.${correctFilename}`)
        .then((content) => (0, isbinaryfile_1.isBinaryFile)(`.${correctFilename}`).then((success) => {
        const response = {
            filename: correctFilename,
            content,
            isBinary: success,
        };
        return Promise.resolve(response);
    }))
        .catch((error) => Promise.reject(new LoadThemeAssetError_1.LoadThemeAssetError(error.message)));
}
exports.prepareToUpload = prepareToUpload;
