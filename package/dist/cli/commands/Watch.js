"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const chokidar_1 = __importDefault(require("chokidar"));
const commander_1 = require("commander");
const ora_1 = __importDefault(require("ora"));
const slash_1 = __importDefault(require("slash"));
const Tray_1 = require("../../Tray");
/**
 * Auxiliar constants
 */
const timeout = 100;
const paths = {
    add: [],
    change: [],
    remove: [],
};
const timers = {
    add: undefined,
    change: undefined,
    remove: undefined,
};
const uploadActionTexts = {
    add: {
        initial: 'Adding',
        success: 'added',
        error: 'add',
    },
    change: {
        initial: 'Updating',
        success: 'updated',
        error: 'update',
    },
};
/**
 * Auxiliar functions
 */
/**
 * Upload after get all paths to prevent UI bug
 * @param {Tray} tray Instance of Tray CLI Api
 * @param {string} origin Origin of operation. Could be add or change.
 */
function doUploadAction(tray, origin) {
    return __awaiter(this, void 0, void 0, function* () {
        const target = origin === 'add' ? paths.add : paths.change;
        for (let index = 0; index < target.length; index++) {
            const path = target[index];
            const loader = (0, ora_1.default)(`${uploadActionTexts[origin].initial} ${chalk_1.default.magenta(path)} file...`).start();
            // eslint-disable-next-line no-await-in-loop
            const response = yield tray.upload([path]).catch((error) => {
                loader.fail(error.toString());
            });
            if (response) {
                if (response.fails.length) {
                    loader.fail(`Could not ${uploadActionTexts[origin].error} file ${chalk_1.default.magenta(path)} due to error - ${response.fails[0].error.message}`);
                }
                else {
                    loader.succeed(`File ${chalk_1.default.magenta(path)} ${uploadActionTexts[origin].success}`);
                }
            }
        }
        if (origin === 'add') {
            paths.add = [];
            timers.add = undefined;
        }
        else {
            paths.change = [];
            timers.change = undefined;
        }
    });
}
/**
 * Remove after get all paths to prevent UI bug
 * @param {Tray} tray Instance of Tray CLI Api
 */
function doRemoveAction(tray) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let index = 0; index < paths.remove.length; index++) {
            const path = paths.remove[index];
            const loader = (0, ora_1.default)(`Removing ${chalk_1.default.magenta(path)} file...`).start();
            // eslint-disable-next-line no-await-in-loop
            const response = yield tray.remove([path]).catch((error) => {
                loader.fail(error.toString());
            });
            if (response) {
                if (response.fails.length) {
                    loader.fail(`Could not remove file ${chalk_1.default.magenta(path)} due to error - ${response.fails[0].error.message}`);
                }
                else {
                    loader.succeed(`File ${chalk_1.default.magenta(path)} removed`);
                }
            }
        }
        paths.remove = [];
        timers.remove = undefined;
    });
}
/**
 * Watch command
 */
function watch() {
    commander_1.program
        .command('watch')
        .description('Watch theme files for changes and reflect into store')
        .action(() => {
        Tray_1.Tray.initiateFromConfigFile()
            .then((tray) => {
            const watcher = chokidar_1.default.watch('.', {
                ignored: /(^|[/\\])\../,
                persistent: true,
                ignoreInitial: true,
            });
            watcher
                .on('ready', () => {
                (0, ora_1.default)().info('Watching files...');
            })
                .on('add', (path) => __awaiter(this, void 0, void 0, function* () {
                paths.add.push((0, slash_1.default)(path));
                if (timers.add) {
                    clearTimeout(timers.add);
                }
                timers.add = setTimeout(() => {
                    doUploadAction(tray, 'add');
                }, timeout);
            }))
                .on('change', (path) => __awaiter(this, void 0, void 0, function* () {
                paths.change.push((0, slash_1.default)(path));
                if (timers.change) {
                    clearTimeout(timers.change);
                }
                timers.change = setTimeout(() => {
                    doUploadAction(tray, 'change');
                }, timeout);
            }))
                .on('unlink', (path) => __awaiter(this, void 0, void 0, function* () {
                paths.remove.push((0, slash_1.default)(path));
                if (timers.remove) {
                    clearTimeout(timers.remove);
                }
                timers.remove = setTimeout(() => {
                    doRemoveAction(tray);
                }, timeout);
            }))
                .on('addDir', (path) => {
                (0, ora_1.default)().warn(`Creating folder ${chalk_1.default.magenta(path)} is not supported by Tray API... ${chalk_1.default.yellow('Ignored')}`);
            })
                .on('unlinkDir', (path) => {
                (0, ora_1.default)().warn(`Deleting folder ${chalk_1.default.magenta(path)} is not supported by Tray API... ${chalk_1.default.yellow('Ignored')}`);
            })
                .on('error', (error) => {
                (0, ora_1.default)().fail(`Watcher error: ${error}`);
            });
        })
            .catch((error) => {
            (0, ora_1.default)().start().fail(error.toString());
            process.exit(1);
        });
    });
}
exports.default = watch;
