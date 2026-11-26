export declare function computeSaltedCommandHash(rawCommand: string): Promise<string>;
export declare function verifySecretAdminCommand(rawCommand: string): Promise<{
    matched: boolean;
    digestHex: string;
}>;
