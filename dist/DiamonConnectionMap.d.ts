import type { Content } from "./type/Content";
import type { ToolRequest, ToolResponse } from "./type/Tool";
export type DaimonConnectionMap = {
    "daimon.ask": {
        request: {
            options?: Partial<{}>;
            body: {
                query: string;
                roomId?: string;
                userId?: string;
                assistantId?: string;
                maxTokens?: number;
            };
        };
        response: Partial<Content>;
        headers: {
            url?: string;
            authToken?: string;
        };
    };
    "tool.fetchRss": {
        request: {
            options?: Partial<{}>;
            body: ToolRequest;
        };
        response: ToolResponse;
        headers: {
            url?: string;
            authToken?: string;
        };
    };
};
