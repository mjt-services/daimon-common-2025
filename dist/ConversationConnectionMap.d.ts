import type { ConversationMessage, ConversationMessageNode } from "./type/ConversationMessageNode";
export type ConversationConnectionMap = {
    "conversation.add": {
        request: {
            options?: Partial<{}>;
            body: ConversationMessage;
        };
        response: {
            success: boolean;
        };
        headers: {
            url?: string;
            authToken?: string;
        };
    };
    "conversation.search": {
        request: {
            options?: Partial<{}>;
            body: {
                query: string;
            };
        };
        response: ConversationMessageNode[];
        headers: {
            url?: string;
            authToken?: string;
        };
    };
};
