import type { DataConnectionMap } from "@mjt-services/data-common-2025";
import type { MessageConnectionInstance } from "@mjt-engine/message/dist/createConnection";
export declare const findRoomContents: <M extends DataConnectionMap>(con: MessageConnectionInstance<M>) => (roomId: string) => Promise<import("..").RoomContent[]>;
