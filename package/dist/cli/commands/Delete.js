"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const inquirer_1 = __importDefault(require("inquirer"));
const ora_1 = __importDefault(require("ora"));
const Tray_1 = require("../../Tray");
/**
 * Delete a theme from store
 */
function del() {
    commander_1.program
        .command('delete')
        .argument('[theme-id]', 'Theme id to be deleted. (Default: current theme)')
        .description('Delete theme from store')
        .action((id) => {
        inquirer_1.default
            .prompt({
            type: 'confirm',
            message: 'Do you really want to delete this theme? This action cannot be undone.',
            name: 'confirm',
            default: false,
        })
            .then((answers) => {
            if (answers.confirm) {
                Tray_1.Tray.initiateFromConfigFile()
                    .then((tray) => {
                    const desiredThemeId = id !== null && id !== void 0 ? id : tray.themeId;
                    const loader = (0, ora_1.default)(`Deleting theme ${desiredThemeId}...`).start();
                    tray.delete(desiredThemeId)
                        .then(() => loader.succeed(`Theme deleted.`))
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
exports.default = del;
