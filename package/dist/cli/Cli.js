#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const commander_1 = require("commander");
const CleanCache_1 = __importDefault(require("./commands/CleanCache"));
const Configure_1 = __importDefault(require("./commands/Configure"));
const Create_1 = __importDefault(require("./commands/Create"));
const Delete_1 = __importDefault(require("./commands/Delete"));
const Download_1 = __importDefault(require("./commands/Download"));
const List_1 = __importDefault(require("./commands/List"));
const Open_1 = __importDefault(require("./commands/Open"));
const Remove_1 = __importDefault(require("./commands/Remove"));
const Upload_1 = __importDefault(require("./commands/Upload"));
const Watch_1 = __importDefault(require("./commands/Watch"));
const pkg = require('../../package.json');
function run() {
    (0, Configure_1.default)();
    (0, List_1.default)();
    (0, Create_1.default)();
    (0, CleanCache_1.default)();
    (0, Delete_1.default)();
    (0, Download_1.default)();
    (0, Upload_1.default)();
    (0, Remove_1.default)();
    (0, Watch_1.default)();
    (0, Open_1.default)();
    commander_1.program
        .version(pkg.version, '--version', 'Display CLI version')
        .helpOption('--help', 'Display CLI help')
        .addHelpCommand('help [command]', 'Display help per command')
        .name('tray');
    commander_1.program.parse(process.argv);
}
exports.run = run;
