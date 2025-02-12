export type ConversationMessageNode = {
    id: string;
    conversationId: string;
    parentId?: string;
    speakerId: string;
    role: "user" | "assistant" | "system";
    createdAt: number;
    updatedAt?: number;
    removed?: boolean;
    contentType: "text" | "streaming" | "summary";
    content?: string;
    alternatives?: ConversationMessageNode[];
    subAssistants?: ConversationMessageNode[];
};
