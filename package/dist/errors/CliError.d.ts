declare type CliErrorParams = {
    code: string;
    message: string;
    details?: string;
    data?: object;
};
export declare class CliError extends Error {
    code: string;
    details?: string;
    data?: object;
    constructor({ code, message, details, data }: CliErrorParams);
    toString(): string;
}
export {};
