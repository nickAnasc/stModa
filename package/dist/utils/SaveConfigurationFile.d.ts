import { ConfigurationFile } from '../types/ConfigurationFile';
/**
 * Save configs to config.yml file
 * @param {ConfigurationFile} param Configuration object with configs to be saved.
 * @return Promise<string> Return success message if promise resolves, SaveConfigurationFileError otherwise.
 */
export declare function saveConfigurationFile({ key, password, themeId, previewUrl, debug, }: ConfigurationFile): Promise<string>;
