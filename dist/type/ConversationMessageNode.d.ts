export type ConversationChannel = {
    id: string;
    groupId: string;
    topic: string;
    description?: string;
    createdAt: number;
};
export type ConversationPoint = Partial<{
    conversationId: string;
    groupId: string;
    channelId: string;
    threadId: string;
}>;
export type ConversationMessage = ConversationPoint & {
    speakerId: string;
    role: "user" | "assistant" | "system";
    contentType: "text" | "streaming" | "summary";
    content?: string;
};
export type ConversationMessageNode = ConversationMessage & {
    id: string;
    parentId?: string;
    createdAt: number;
    updatedAt?: number;
    removed?: boolean;
    alternatives?: ConversationMessageNode[];
};
