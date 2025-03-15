import type { Content } from "./type/Content";
export type DaimonConnectionMap = {
    "daimon.ask": {
        request: {
            options?: Partial<{}>;
            body: {
                query: string;
                roomId?: string;
                userId?: string;
                assistantId?: string;
            };
        };
        response: Content;
        headers: {
            url?: string;
            authToken?: string;
        };
    };
};
