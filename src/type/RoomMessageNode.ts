import type { ObjectStore } from "@mjt-services/data-common-2025";

export type RoomContent = {
  creatorId: string;

  // --- Content ---
  // The type of content stored in this node.
  contentType: "text";

  // For finalized text messages, the complete Markdown string.
  content: string;
};

export type RoomNode = RoomContent & {
  // --- Identity & Metadata ---
  id: string; // Globally unique identifier.
  roomId: string; // The room this message belongs to.
  parentId?: string; // The parent node's id (undefined for the root node).
  createdAt: number; // Timestamp (ms) when created.
  updatedAt?: number; // Updated when content changes (e.g. streaming updates).
  removed?: boolean; // Flag to indicate if the message was retracted.

  // --- Conversation Structure ---
  // Alternative candidate branches for this node.
  alternatives?: RoomNode[];
};

export const ROOM_NODE_OBJECT_STORE: ObjectStore<RoomNode> = {
  store: "daimon",
};
