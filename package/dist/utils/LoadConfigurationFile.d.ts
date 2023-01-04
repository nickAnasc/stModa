import { ConfigurationFile } from '../types/ConfigurationFile';
/**
 * Load configs from config.yml file
 * @return Promise<ConfigurationFile> Return ConfigurationFile if promise resolves, Error otherwise.
 */
export declare function loadConfigurationFile(): Promise<ConfigurationFile>;
