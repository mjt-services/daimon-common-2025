export type ConversationGroup = {
  id: string;
  members: string[];
};

export type ConversationChannel = {
  id: string;
  groupId: string;
  topic: string; // short name for the channel
  description?: string; // long description for the channel
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
  role: "user" | "assistant" | "system"; // The role of the speaker.

  // --- Content ---
  // The type of content stored in this node.
  contentType: "text" | "streaming" | "summary";

  // For finalized text messages, the complete Markdown string.
  content?: string;
};

export type ConversationMessageNode = ConversationMessage & {
  // --- Identity & Metadata ---
  id: string; // Globally unique identifier.
  parentId?: string; // The parent node's id (undefined for the root node).
  createdAt: number; // Timestamp (ms) when created.
  updatedAt?: number; // Updated when content changes (e.g. streaming updates).
  removed?: boolean; // Flag to indicate if the message was retracted.

  // --- Conversation Structure ---
  // Alternative candidate branches for this node.
  alternatives?: ConversationMessageNode[];
};
