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
    source?: unknown;
    alternatives?: Content[];
    progress?: Partial<{
        current: number;
        total: number;
        etaSeconds: number;
    }>;
};
export declare const CONTENT_OBJECT_STORE: ObjectStore<Content>;
