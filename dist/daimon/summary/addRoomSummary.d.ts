import type { MessageConnectionInstance } from "@mjt-engine/message/dist/createConnection";
import { type DataConnectionMap } from "@mjt-services/data-common-2025";
import { type TextgenConnectionMap } from "@mjt-services/textgen-common-2025";
export declare const addRoomSummary: <M extends DataConnectionMap & TextgenConnectionMap>(con: MessageConnectionInstance<M>) => ({ roomId, query, model, chunkSize, overlapSize, }: {
    roomId: string;
    query: string;
    model?: string;
    chunkSize?: number;
    overlapSize?: number;
}) => Promise<void>;
