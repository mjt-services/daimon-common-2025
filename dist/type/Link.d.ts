import type { ObjectStore } from "@mjt-services/data-common-2025";
export type Link = {
    id: string;
    fromId: string;
    toId: string;
};
export declare const LINK_OBJECT_STORE: ObjectStore<Link>;
