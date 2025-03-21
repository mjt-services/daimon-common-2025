export type ToolParam = {
    name: string;
    description: string;
    type: "number" | "string" | "boolean";
};
export type Tool = {
    name: string;
    description: string;
    params: ToolParam[];
    result?: unknown;
};
export declare const RssTool: Tool;
