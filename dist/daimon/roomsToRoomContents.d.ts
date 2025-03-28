import { type DataConnectionMap } from "@mjt-services/data-common-2025";
import type { RoomContent } from "../type/RoomContent";
import type { Room } from "../type/Room";
import type { MessageConnectionInstance } from "@mjt-engine/message/dist/createConnection";
export declare const roomsToRoomContents: <M extends DataConnectionMap>(con: MessageConnectionInstance<M>) => (rooms: Room[]) => Promise<RoomContent[]>;
