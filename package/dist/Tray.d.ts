import Sdk, { ApiListThemesResponse } from '@tray-tecnologia/opencode-sdk';
import { ConfigurationFile } from './types/ConfigurationFile';
import { DownloadCommandResponse } from './types/DownloadCommandResponse';
import { RemoveCommandResponse } from './types/RemoveCommandResponse';
import { UploadCommandResponse } from './types/UploadCommandResponse';
export declare class Tray {
    readonly key: string;
    readonly password: string;
    themeId?: number;
    previewUrl?: string;
    readonly debug: boolean;
    readonly api: Sdk;
    /**
     * Create new Tray instance
     * @param {ConfigurationFile}
     */
    constructor({ key, password, themeId, previewUrl, debug }: ConfigurationFile);
    /**
     * Load configuration settings from config.yml and create an instance of class.
     * @return {Promise<Tray>} Returns Tray instance if promises resolves, or CliError otherwise.
     */
    static initiateFromConfigFile(): Promise<Tray>;
    /**
     * Configure CLI use generating config.yml file
     * @return {Promise} Return string if promise resolves, ApiError or CliError otherwise
     */
    configure(): Promise<string>;
    /**
     * List all available themes.
     * @return {Promise} Return ApiListThemesResponse if promises resolves, ApiError or CliError otherwise.
     */
    list(): Promise<ApiListThemesResponse>;
    /**
     * Clean cache for required theme
     * @param {?number} id Theme id to clean the cache
     * @return {Promise} Return true if promises resolves or ApiError otherwise.
     */
    cleanCache(id?: number | undefined): Promise<boolean>;
    /**
     * Create a new theme in store
     * @param {string} name Theme name
     * @param {string} base Base theme for the new theme be created from.
     * @param {boolean} createConfigFile Specify if config.yml file need to be created on disk.
     * @return {Promise} Returns Tray class instance if promises resolves, CliError or ApiError otherwise.
     * If createConfigFile was true, file will be created on disk before return Tray instance.
     */
    create(name: string, base?: string, createConfigFile?: boolean): Promise<Tray>;
    /**
     * Delete requested theme.
     * @param {number} id Theme id to be deleted
     * @return {Promise} Return true with promise resolves, CliError or ApiError otherwise.
     */
    delete(id?: number | undefined): Promise<boolean>;
    /**
     * Download configured theme
     * @param {string[]} files Files to be donwloaded
     * @return {Promise} Returns DownloadCommandResponse when promises resolves
     */
    download(files?: string[]): Promise<DownloadCommandResponse>;
    /**
     * Upload files to theme
     * @param {string[]} files Files to be uploaded. If not provided all files in current folder and subfolder will be uploaded.
     *                         Config.yml and files starting with dot will always be ignored.
     * @return {Promise} Returns UploadCommandResponse object if promises resolves, CliError or ApiError otherwise.
     */
    upload(files?: string[]): Promise<UploadCommandResponse>;
    /**
     * Upload core files, excluding configs/settings.json and images folder.
     * Config.yml and files starting with dot will always be ignored.
     * @return {Promise} Returns UploadCommandResponse object if promises resolves, CliError or ApiError otherwise.
     */
    uploadCore(): Promise<UploadCommandResponse>;
    /**
     * Delete theme files
     * @param {string[]} files Files to be removes.
     * @return {Promise} Returns RemoveCommandResponse object if promises resolves, CliError or ApiError otherwise.
     */
    remove(files: string[]): Promise<RemoveCommandResponse>;
}
