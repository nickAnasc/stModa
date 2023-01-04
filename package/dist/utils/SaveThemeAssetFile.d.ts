/// <reference types="node" />
/**
 * Save theme file to disk. With folder not exists it will be created.
 * @param {string} path File path where file needs to be created with file name.
 * @param {Buffer} data File content to be saved.
 * @return {Promise} Returns true when promises resolves, CliError otherwise.
 */
export declare function saveThemeAssetFile(path: string, data: Buffer): Promise<boolean>;
