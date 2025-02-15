export type Room = Partial<{
  id: string;
  name?: string;
  parentId?: string;
  topic: string; // short name for the channel
  description?: string; // long description for the channel
  createdAt: number;
}>;

export type RoomMessage = {
  speakerId: string;
  role: "user" | "assistant" | "system"; // The role of the speaker.

  // --- Content ---
  // The type of content stored in this node.
  contentType: "text" | "streaming" | "summary";

  // For finalized text messages, the complete Markdown string.
  content?: string;
};

export type RoomNode = RoomMessage & {
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
