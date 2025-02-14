import type { ConversationMessage, ConversationMessageNode, ConversationPoint } from "./type/ConversationMessageNode";
export type ConversationConnectionMap = {
    "conversation.add": {
        request: {
            options?: Partial<{}>;
            body: {
                parentId?: string;
            } & ConversationMessage;
        };
        response: {
            success: boolean;
        };
        headers: {
            url?: string;
            authToken?: string;
        };
    };
    "conversation.link": {
        request: {
            options?: Partial<{}>;
            body: {
                point: ConversationPoint;
                daimonId: string;
            };
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
