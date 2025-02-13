export type ConversationGroup = {
    id: string;
    members: string[];
};
export type ConversationChannel = {
    id: string;
    groupId: string;
    topic: string;
    description?: string;
    createdAt: number;
};
export type ConversationMessageNode = {
    id: string;
    parentId?: string;
    groupId: string;
    channelId: string;
    conversationId: string;
    speakerId: string;
    role: "user" | "assistant" | "system";
    createdAt: number;
    updatedAt?: number;
    removed?: boolean;
    contentType: "text" | "streaming" | "summary";
    content?: string;
    alternatives?: ConversationMessageNode[];
};
