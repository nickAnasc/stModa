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
const commander_1 = require("commander");
const inquirer_1 = __importDefault(require("inquirer"));
const ora_1 = __importDefault(require("ora"));
const Tray_1 = require("../../Tray");
/**
 * List all themes available at store
 */
function create() {
    commander_1.program
        .command('create')
        .argument('[key]', 'Api key')
        .argument('[password]', 'Api password')
        .argument('[theme-name]', 'Name of the theme')
        .argument('[theme-base]', 'Base theme for this new theme (default: default)')
        .option('--debug', 'Enable debug mode')
        .description('Create a new theme in store')
        // eslint-disable-next-line default-param-last
        .action((key, password, name, base = 'default', options) => __awaiter(this, void 0, void 0, function* () {
        var _a;
        const questions = [];
        let answers = {
            key,
            password,
            name,
            base,
            debug: (_a = options.debug) !== null && _a !== void 0 ? _a : false,
        };
        if (!answers.key) {
            questions.push({
                type: 'input',
                message: 'Enter api key',
                name: 'key',
            });
        }
        if (!answers.password) {
            questions.push({
                type: 'input',
                message: 'Enter api password',
                name: 'password',
            });
        }
        if (!answers.name) {
            questions.push({
                type: 'input',
                message: 'Enter theme name',
                name: 'name',
            });
        }
        if (!answers.key || !answers.password || !answers.name) {
            questions.push({
                type: 'input',
                message: 'Enter base theme',
                name: 'base',
                default: 'default',
            });
            questions.push({
                type: 'confirm',
                message: 'Enabled debug mode?',
                name: 'debug',
                default: false,
            });
        }
        if (questions.length > 0) {
            const missingAnswers = yield inquirer_1.default.prompt(questions);
            answers = Object.assign(Object.assign({}, answers), missingAnswers);
        }
        const tray = new Tray_1.Tray({
            key: answers.key,
            password: answers.password,
            debug: answers.debug,
        });
        const loader = (0, ora_1.default)(`Creating theme ${name} based on ${base}...`).start();
        tray.create(answers.name, answers.base, true)
            .then((data) => {
            loader.succeed(`Theme created under id ${data.themeId}.`);
        })
            .catch((error) => {
            loader.fail(error.toString());
        });
    }));
}
exports.default = create;
