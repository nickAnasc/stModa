"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const commander_1 = require("commander");
const glob_1 = __importDefault(require("glob"));
const ora_1 = __importDefault(require("ora"));
const os_1 = require("os");
const path_1 = require("path");
const Tray_1 = require("../../Tray");
const FileNotFoundError_1 = require("../../errors/FileNotFoundError");
/**
 * Upload theme files from store
 */
function upload() {
    commander_1.program
        .command('upload')
        .argument('[files...]', 'Files to upload. (Default: all files)')
        .option('--core', 'Removes settings.json and images folder from upload')
        .description('Upload files to theme')
        .action((assets, options) => {
        Tray_1.Tray.initiateFromConfigFile()
            .then((tray) => {
            let method = 'upload';
            let globbed = [];
            if (assets.length) {
                if (options.core) {
                    (0, ora_1.default)()
                        .start()
                        .warn('Core option has no affect when used together with files parameter. Option ignored.');
                }
                assets.forEach((asset) => {
                    if (glob_1.default.hasMagic(asset) || (0, path_1.extname)(asset)) {
                        globbed.push(glob_1.default.sync(asset, { nodir: true }));
                    }
                });
                globbed = globbed.flat();
                globbed = globbed.filter((path) => path !== 'config.yml');
                if (globbed.length === 0) {
                    return Promise.reject(new FileNotFoundError_1.FileNotFoundError({
                        details: 'Files passed through command was not found in specified path.',
                    }));
                }
                if (globbed.length < assets.length) {
                    (0, ora_1.default)().start().warn('Some request files could not be found. Verify files after operation.');
                }
            }
            else if (options.core) {
                method = 'uploadCore';
            }
            (0, ora_1.default)().start().warn('Folder paths are not supported and will be ignored.');
            const loader = (0, ora_1.default)(`Uploading files...`).start();
            tray[method](globbed)
                .then((response) => {
                if (response.fails.length) {
                    const errorCount = response.fails.length;
                    const errors = response.fails
                        .map((fail) => `${chalk_1.default.magenta(fail.file)} -> ${fail.error.message}`)
                        .join(os_1.EOL);
                    if (errorCount === response.total) {
                        loader.fail(`Unable to upload files correctly due to errors. Files affected listed bellow:`);
                    }
                    else {
                        loader.warn(`Files upload with ${errorCount} errors. Files affected listed bellow:`);
                    }
                    console.log(errors);
                }
                else {
                    loader.succeed(`Files uploaded.`);
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
exports.default = upload;
