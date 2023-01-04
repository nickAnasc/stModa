import { CliError } from './CliError';
declare type foundError = {
    file?: string;
    details?: string;
};
export declare class FileNotFoundError extends CliError {
    constructor({ file, details }: foundError);
}
export {};
