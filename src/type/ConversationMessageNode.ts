export type ConversationMessageNode = {
  // --- Identity & Metadata ---
  id: string; // Globally unique identifier.
  conversationId: string; // Identifier for the conversation.
  parentId?: string; // The parent node's id (undefined for the root node).
  speakerId: string; // The identifier of the speaker.
  role: "user" | "assistant" | "system"; // The role of the speaker.
  createdAt: number; // Timestamp (ms) when created.
  updatedAt?: number; // Updated when content changes (e.g. streaming updates).
  removed?: boolean; // Flag to indicate if the message was retracted.

  // --- Content ---
  // The type of content stored in this node.
  contentType: "text" | "streaming" | "summary";

  // For finalized text messages, the complete Markdown string.
  content?: string;

  // --- Conversation Structure ---
  // Alternative candidate branches for this node.
  alternatives?: ConversationMessageNode[];
  // Outputs from sub‑assistants (e.g., image generators) attached to this node.
  subAssistants?: ConversationMessageNode[];
};
