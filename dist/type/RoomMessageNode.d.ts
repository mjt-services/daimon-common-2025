export type Room = Partial<{
    id: string;
    name?: string;
    parentId?: string;
    topic: string;
    description?: string;
    createdAt: number;
}>;
export type RoomMessage = {
    speakerId: string;
    role: "user" | "assistant" | "system";
    contentType: "text" | "streaming" | "summary";
    content?: string;
};
export type RoomNode = RoomMessage & {
    id: string;
    roomId: string;
    parentId?: string;
    createdAt: number;
    updatedAt?: number;
    removed?: boolean;
    alternatives?: RoomNode[];
};
