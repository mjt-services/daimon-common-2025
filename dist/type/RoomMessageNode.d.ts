import type { ObjectStore } from "@mjt-services/data-common-2025";
export type RoomContent = {
    creatorId?: string;
    contentType: "text";
    content: string;
};
export type Room = RoomContent & {
    id: string;
    parentId?: string;
    createdAt: number;
    updatedAt?: number;
    removed?: boolean;
    alternatives?: Room[];
};
export declare const ROOM_OBJECT_STORE: ObjectStore<Room>;
