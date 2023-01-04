"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const commander_1 = require("commander");
const glob_1 = __importDefault(require("glob"));
const inquirer_1 = __importDefault(require("inquirer"));
const ora_1 = __importDefault(require("ora"));
const os_1 = require("os");
const path_1 = require("path");
const Tray_1 = require("../../Tray");
function remove() {
    commander_1.program
        .command('remove')
        .argument('<files...>', 'Files to remove')
        .description('Removes files from theme')
        .action((files) => {
        inquirer_1.default
            .prompt({
            type: 'confirm',
            message: 'Do you really want to delete this files? This action cannot be undone.',
            name: 'confirm',
            default: false,
        })
            .then((answers) => {
            if (answers.confirm) {
                Tray_1.Tray.initiateFromConfigFile()
                    .then((tray) => {
                    let globbed = [];
                    files.forEach((file) => {
                        if (glob_1.default.hasMagic(file) || (0, path_1.extname)(file)) {
                            globbed.push(glob_1.default.sync(file, { nodir: true }));
                        }
                    });
                    globbed = globbed.flat();
                    globbed = globbed.filter((path) => path !== 'config.yml');
                    (0, ora_1.default)().start().warn('Folder paths are not supported and will be ignored.');
                    const loader = (0, ora_1.default)(`Deleting files...`).start();
                    tray.remove(globbed)
                        .then((response) => {
                        if (response.fails.length) {
                            const errorCount = response.fails.length;
                            const errors = response.fails
                                .map((fail) => `${chalk_1.default.magenta(fail.file)} -> ${fail.error.message}`)
                                .join(os_1.EOL);
                            if (errorCount === response.total) {
                                loader.fail(`Unable to delete files correctly due to errors. Files affected listed bellow:`);
                            }
                            else {
                                loader.warn(`Files deleted with ${errorCount} errors. Files affected listed bellow:`);
                            }
                            console.log(errors);
                        }
                        else {
                            loader.succeed(`Files deleted.`);
                        }
                    })
                        .catch((error) => {
                        loader.fail(error.toString());
                    });
                })
                    .catch((error) => {
                    (0, ora_1.default)().start().fail(error.toString());
                });
            }
            else {
                (0, ora_1.default)().fail('Operation aborted by user');
            }
        });
    });
}
exports.default = remove;
