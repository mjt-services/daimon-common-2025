import type { ObjectStore } from "@mjt-services/data-common-2025";
export type Room = {
    id: string;
    parentId?: string;
    contentId: string;
    userDaimonId?: string;
};
export declare const ROOM_OBJECT_STORE: ObjectStore<Room>;
