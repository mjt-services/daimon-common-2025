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
export type ConversationPoint = Partial<{
    groupId: string;
    channelId: string;
    threadId: string;
    conversationId: string;
}>;
export type ConversationMessage = {
    groupId: string;
    channelId: string;
    conversationId: string;
    threadId: string;
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
