import type { ObjectStore } from "@mjt-services/data-common-2025";
export type RoomContent = {
    creatorId: string;
    contentType: "text";
    content: string;
};
export type RoomNode = RoomContent & {
    id: string;
    roomId: string;
    parentId?: string;
    createdAt: number;
    updatedAt?: number;
    removed?: boolean;
    alternatives?: RoomNode[];
};
export declare const ROOM_NODE_OBJECT_STORE: ObjectStore<RoomNode>;
