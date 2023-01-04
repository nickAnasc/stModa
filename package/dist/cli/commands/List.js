"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const ora_1 = __importDefault(require("ora"));
const Tray_1 = require("../../Tray");
/**
 * List all themes available at store
 */
function list() {
    commander_1.program
        .command('list')
        .description('List all themes available on store')
        .action(() => {
        Tray_1.Tray.initiateFromConfigFile()
            .then((tray) => {
            const loader = (0, ora_1.default)('Getting all available themes').start();
            tray.list()
                .then((data) => {
                loader.succeed(`Themes retrieved. Showing available:`);
                console.table(data.themes);
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
exports.default = list;
