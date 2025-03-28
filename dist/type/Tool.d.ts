export type ToolValue = {
    name: string;
    description: string;
    type: "number" | "string" | "boolean" | "object";
};
export type Tool = {
    name: string;
    description: string;
    params: ToolValue[];
    result?: ToolValue;
};
export declare const RssTool: Tool;
export type ToolRequest = {
    describe?: null;
    call?: {
        params?: Record<string, string>;
    };
};
export type ToolResponse = {
    describe: Tool;
    call: {
        result: unknown;
    };
};
