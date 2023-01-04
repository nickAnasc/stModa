"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const commander_1 = require("commander");
const ora_1 = __importDefault(require("ora"));
const os_1 = require("os");
const Tray_1 = require("../../Tray");
/**
 * Download theme files from store
 */
function download() {
    commander_1.program
        .command('download')
        .argument('[files...]', 'Files to download. (Default: all files)')
        .description('Download theme files from store')
        .action((files) => {
        Tray_1.Tray.initiateFromConfigFile()
            .then((tray) => {
            const type = files && files.length ? 'Files' : 'Theme';
            const loader = (0, ora_1.default)(`Downloading ${type.toLowerCase()}...`).start();
            tray.download(files)
                .then((response) => {
                if (response.fails.length) {
                    const errorCount = response.fails.length;
                    const errors = response.fails
                        .map((fail) => `${chalk_1.default.magenta(fail.file)} -> ${fail.error.message}`)
                        .join(os_1.EOL);
                    if (errorCount === response.total) {
                        loader.fail(`Unable to download ${type.toLowerCase()} correctly due to errors. Files affected listed bellow:`);
                    }
                    else {
                        loader.warn(`${type} download with ${errorCount} errors. Files affected listed bellow:`);
                    }
                    console.log(errors);
                }
                else {
                    loader.succeed(`${type} downloaded.`);
                }
            })
                .catch((error) => {
                loader.fail(error.toString());
            });
        })
            .catch((error) => {
            (0, ora_1.default)().start().fail(error.toString());
        });
    });
}
exports.default = download;
