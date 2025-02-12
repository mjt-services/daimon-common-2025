import type { DaimonCharaCard, Daimon } from "./type/Daimon";
import type { ConversationMessageNode } from "./type/ConversationMessageNode";
export type DaimonConnectionMap = {
    "conversation.add": {
        request: {
            options?: Partial<{}>;
            body: {
                conversationId: string;
                speakerId: string;
                content: string;
                parentId?: string;
                role: ConversationMessageNode["role"];
                contentType: ConversationMessageNode["contentType"];
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
    "daimon.create": {
        request: {
            options?: Partial<{}>;
            body: DaimonCharaCard;
        };
        response: {
            id: string;
        };
        headers: {
            url?: string;
            authToken?: string;
        };
    };
    "daimon.update": {
        request: {
            options?: Partial<{}>;
            body: Daimon;
        };
        response: {
            success: boolean;
        };
        headers: {
            url?: string;
            authToken?: string;
        };
    };
    "daimon.import": {
        request: {
            options?: Partial<{}>;
            body: {
                png: ArrayBuffer;
            };
        };
        response: {
            id: string;
        };
        headers: {
            url?: string;
            authToken?: string;
        };
    };
    "daimon.get": {
        request: {
            options?: Partial<{}>;
            body: {
                id: string;
            };
        };
        response: Daimon | undefined;
        headers: {
            url?: string;
            authToken?: string;
        };
    };
    "daimon.remove": {
        request: {
            options?: Partial<{}>;
            body: {
                id: string;
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
    "daimon.list": {
        request: {
            options?: Partial<{}>;
            body: {
                query?: string;
            };
        };
        response: Daimon[];
        headers: {
            url?: string;
            authToken?: string;
        };
    };
};
