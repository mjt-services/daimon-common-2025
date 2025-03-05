import type { ObjectStore } from "@mjt-services/data-common-2025";

export type Room = {
  id: string; // Globally unique identifier.
  parentId?: string; // The parent node's id (undefined for the root node).
  contentId: string;
  userDaimonId?: string;
};

export const ROOM_OBJECT_STORE: ObjectStore<Room> = {
  store: "room",
};
