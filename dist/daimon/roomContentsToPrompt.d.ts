import type { MessageConnectionInstance } from "@mjt-engine/message/dist/createConnection";
import type { DataConnectionMap } from "@mjt-services/data-common-2025";
import type { RoomContent } from "../type/RoomContent";
export declare const roomContentsToPrompt: <M extends DataConnectionMap>(con: MessageConnectionInstance<M>) => (roomContents: RoomContent[], { chunkSize }?: Partial<{
    chunkSize: number;
}>) => Promise<string>;
