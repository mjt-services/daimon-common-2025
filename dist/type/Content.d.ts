import type { ObjectStore } from "@mjt-services/data-common-2025";
export type Content = {
    id: string;
    creatorId?: string;
    contentType: string;
    value: unknown;
    createdAt: number;
    updatedAt?: number;
    removed?: boolean;
    finalized?: boolean;
    alternatives?: Content[];
};
export declare const CONTENT_OBJECT_STORE: ObjectStore<Content>;
