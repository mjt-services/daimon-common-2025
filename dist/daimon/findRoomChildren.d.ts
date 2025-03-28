import { type DataConnectionMap } from "@mjt-services/data-common-2025";
import { type Room } from "../type/Room";
import type { MessageConnectionInstance } from "@mjt-engine/message/dist/createConnection";
export declare const findRoomChildren: <M extends DataConnectionMap>(con: MessageConnectionInstance<M>) => (roomId: string) => Promise<Room[]>;
