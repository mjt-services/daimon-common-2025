import type { ObjectStore } from "@mjt-services/data-common-2025";

export type RoomContent = {
  creatorId?: string;

  // --- Content ---
  // The type of content stored in this node.
  contentType: "text";

  // For finalized text messages, the complete Markdown string.
  content: string;
};

export type Room = RoomContent & {
  // --- Identity & Metadata ---
  id: string; // Globally unique identifier.
  parentId?: string; // The parent node's id (undefined for the root node).
  createdAt: number; // Timestamp (ms) when created.
  updatedAt?: number; // Updated when content changes (e.g. streaming updates).
  removed?: boolean; // Flag to indicate if the message was retracted.

  // --- Conversation Structure ---
  // Alternative candidate branches for this node.
  alternatives?: Room[];
};

export const ROOM_OBJECT_STORE: ObjectStore<Room> = {
  store: "room",
};
