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
function cleanCache() {
    commander_1.program
        .command('clean-cache')
        .description('Clean theme cache')
        .argument('[theme-id]', 'Id of theme to clean cache. If not passed default to configured one.')
        .action((id) => {
        Tray_1.Tray.initiateFromConfigFile()
            .then((tray) => {
            const desiredThemeId = id !== null && id !== void 0 ? id : tray.themeId;
            const loader = (0, ora_1.default)().start(`Cleaning cache from theme with id ${desiredThemeId}..`);
            tray.cleanCache(desiredThemeId);
            loader.succeed(`Cache from theme ${desiredThemeId} cleaned.`);
        })
            .catch((error) => {
            (0, ora_1.default)().start().fail(error.toString());
        });
    });
}
exports.default = cleanCache;
