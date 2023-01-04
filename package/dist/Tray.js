"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tray = void 0;
const opencode_sdk_1 = __importDefault(require("@tray-tecnologia/opencode-sdk"));
const glob_1 = __importDefault(require("glob"));
const ParameterNotDefinedError_1 = require("./errors/ParameterNotDefinedError");
const ThemeFilesNotFoundError_1 = require("./errors/ThemeFilesNotFoundError");
const LoadConfigurationFile_1 = require("./utils/LoadConfigurationFile");
const PrepareToUpload_1 = require("./utils/PrepareToUpload");
const SaveConfigurationFile_1 = require("./utils/SaveConfigurationFile");
const SaveThemeAssetFile_1 = require("./utils/SaveThemeAssetFile");
class Tray {
    /**
     * Create new Tray instance
     * @param {ConfigurationFile}
     */
    constructor({ key, password, themeId, previewUrl, debug = false }) {
        this.key = key;
        this.password = password;
        this.themeId = themeId;
        this.previewUrl = previewUrl;
        this.debug = debug;
        this.api = new opencode_sdk_1.default({
            key: this.key,
            password: this.password,
            themeId: this.themeId,
            debug: this.debug,
        });
    }
    /**
     * Load configuration settings from config.yml and create an instance of class.
     * @return {Promise<Tray>} Returns Tray instance if promises resolves, or CliError otherwise.
     */
    static initiateFromConfigFile() {
        return (0, LoadConfigurationFile_1.loadConfigurationFile)()
            .then((config) => new this(config))
            .catch((error) => Promise.reject(error));
    }
    /**
     * Configure CLI use generating config.yml file
     * @return {Promise} Return string if promise resolves, ApiError or CliError otherwise
     */
    configure() {
        return this.api
            .checkConfiguration()
            .then((data) => {
            var _a;
            const fileData = {
                key: this.key,
                password: this.password,
                themeId: this.themeId,
                previewUrl: (_a = data.preview) !== null && _a !== void 0 ? _a : '',
                debug: this.debug,
            };
            return (0, SaveConfigurationFile_1.saveConfigurationFile)(fileData)
                .then((success) => Promise.resolve(success))
                .catch((error) => Promise.reject(error));
        })
            .catch((error) => Promise.reject(error));
    }
    /**
     * List all available themes.
     * @return {Promise} Return ApiListThemesResponse if promises resolves, ApiError or CliError otherwise.
     */
    list() {
        return this.api
            .getThemes()
            .then((data) => Promise.resolve(data))
            .catch((error) => Promise.reject(error));
    }
    /**
     * Clean cache for required theme
     * @param {?number} id Theme id to clean the cache
     * @return {Promise} Return true if promises resolves or ApiError otherwise.
     */
    cleanCache(id = this.themeId) {
        return this.api
            .cleanCache(id)
            .then((success) => Promise.resolve(success))
            .catch((error) => Promise.reject(error));
    }
    /**
     * Create a new theme in store
     * @param {string} name Theme name
     * @param {string} base Base theme for the new theme be created from.
     * @param {boolean} createConfigFile Specify if config.yml file need to be created on disk.
     * @return {Promise} Returns Tray class instance if promises resolves, CliError or ApiError otherwise.
     * If createConfigFile was true, file will be created on disk before return Tray instance.
     */
    create(name, base = 'default', createConfigFile = false) {
        return this.api
            .createTheme(name, base)
            .then((response) => {
            this.themeId = response.themeId;
            this.previewUrl = response.preview;
            if (createConfigFile) {
                const config = {
                    key: this.key,
                    password: this.password,
                    themeId: this.themeId,
                    previewUrl: this.previewUrl,
                    debug: this.debug,
                };
                return (0, SaveConfigurationFile_1.saveConfigurationFile)(config)
                    .then(() => Promise.resolve(this))
                    .catch((error) => {
                    const improvedError = error;
                    let message = `Theme create with success, but ${improvedError.message}`;
                    message = message
                        .split('.')
                        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
                        .join('.');
                    improvedError.message = message;
                    return Promise.reject(improvedError);
                });
            }
            return Promise.resolve(this);
        })
            .catch((error) => Promise.reject(error));
    }
    /**
     * Delete requested theme.
     * @param {number} id Theme id to be deleted
     * @return {Promise} Return true with promise resolves, CliError or ApiError otherwise.
     */
    delete(id = this.themeId) {
        if (!id)
            return Promise.reject(new ParameterNotDefinedError_1.ParameterNotDefinedError('ThemeId'));
        return this.api
            .deleteTheme(id)
            .then((success) => Promise.resolve(success))
            .catch((error) => Promise.reject(error));
    }
    /**
     * Download configured theme
     * @param {string[]} files Files to be donwloaded
     * @return {Promise} Returns DownloadCommandResponse when promises resolves
     */
    download(files) {
        const errors = [];
        const promise = new Promise((resolve, reject) => {
            if (files && files.length) {
                resolve(files);
            }
            else {
                reject(new Error());
            }
        });
        return promise
            .catch(() => this.api.getAssets().then((assets) => {
            const filesPaths = assets.assets.map((asset) => asset.path);
            return filesPaths;
        }))
            .then((assets) => {
            const promises = assets.map((file) => this.api
                .getAsset(file.startsWith('/') ? file : `/${file}`)
                .then((asset) => (0, SaveThemeAssetFile_1.saveThemeAssetFile)(asset.key, asset.content))
                .catch((error) => errors.push({ file, error })));
            return Promise.all(promises).then(() => {
                const succeedFiles = assets.length - errors.length;
                const response = {
                    total: assets.length,
                    succeed: succeedFiles,
                    fails: errors,
                };
                return Promise.resolve(response);
            });
        });
    }
    /**
     * Upload files to theme
     * @param {string[]} files Files to be uploaded. If not provided all files in current folder and subfolder will be uploaded.
     *                         Config.yml and files starting with dot will always be ignored.
     * @return {Promise} Returns UploadCommandResponse object if promises resolves, CliError or ApiError otherwise.
     */
    upload(files) {
        const errors = [];
        const promise = new Promise((resolve, reject) => {
            if (files && files.length) {
                resolve(files);
            }
            else {
                reject(new Error());
            }
        });
        return promise
            .catch(() => {
            let globbed = glob_1.default.sync('**/*', { nodir: true }).flat();
            globbed = globbed.filter((item) => item !== 'config.yml');
            if (!globbed.length) {
                return Promise.reject(new ThemeFilesNotFoundError_1.ThemeFilesNotFoundError());
            }
            return globbed;
        })
            .then((assets) => {
            const promises = assets.map((file) => (0, PrepareToUpload_1.prepareToUpload)(file)
                .then((fileUpload) => {
                const { filename: asset, content: data, isBinary } = fileUpload;
                return this.api.sendAsset({ asset, data, isBinary });
            })
                .catch((error) => errors.push({ file, error })));
            return Promise.all(promises).then(() => {
                const succeedFiles = assets.length - errors.length;
                const response = {
                    total: assets.length,
                    succeed: succeedFiles,
                    fails: errors,
                };
                return Promise.resolve(response);
            });
        });
    }
    /**
     * Upload core files, excluding configs/settings.json and images folder.
     * Config.yml and files starting with dot will always be ignored.
     * @return {Promise} Returns UploadCommandResponse object if promises resolves, CliError or ApiError otherwise.
     */
    uploadCore() {
        let globbed = glob_1.default.sync('**/*', { nodir: true }).flat();
        globbed = globbed.filter((path) => !path.match(/(img\/(.)*)|(configs\/settings.json)|(config.yml)/));
        if (!globbed.length) {
            return Promise.reject(new ThemeFilesNotFoundError_1.ThemeFilesNotFoundError());
        }
        return this.upload(globbed);
    }
    /**
     * Delete theme files
     * @param {string[]} files Files to be removes.
     * @return {Promise} Returns RemoveCommandResponse object if promises resolves, CliError or ApiError otherwise.
     */
    remove(files) {
        const errors = [];
        const promises = files.map((file) => this.api
            .deleteAsset(file.startsWith('/') ? file : `/${file}`)
            .catch((error) => errors.push({ file, error })));
        return Promise.all(promises).then(() => {
            const succeedFiles = files.length - errors.length;
            const response = {
                total: files.length,
                succeed: succeedFiles,
                fails: errors,
            };
            return Promise.resolve(response);
        });
    }
}
exports.Tray = Tray;
