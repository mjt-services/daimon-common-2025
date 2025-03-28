import type { MessageConnectionInstance } from "@mjt-engine/message/dist/createConnection";
import { type DataConnectionMap } from "@mjt-services/data-common-2025";
export declare const updateRootRoomSummary: <M extends DataConnectionMap>(con: MessageConnectionInstance<M>) => ({ roomId, summary }: {
    roomId: string;
    summary?: unknown;
}) => Promise<void>;
