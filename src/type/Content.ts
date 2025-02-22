import type { ObjectStore } from "@mjt-services/data-common-2025";

export type Content = {
  id: string;
  creatorId?: string;

  // --- Content ---
  // The type of content stored in this object, following the MIME type format.
  contentType: string;

  // The content itself, in the format specified by contentType.
  content: unknown;

  createdAt: number; // Timestamp (ms) when created.
  updatedAt?: number; // Updated when content changes (e.g. streaming updates).
  removed?: boolean; // Flag to indicate if the content is removed
  finalized?: boolean; // Flag to indicate if the content is complete.
  alternatives?: Content[];
};

export const CONTENT_OBJECT_STORE: ObjectStore<Content> = {
  store: "content",
};
