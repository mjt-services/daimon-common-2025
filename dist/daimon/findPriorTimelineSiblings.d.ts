import { type DataConnectionMap } from "@mjt-services/data-common-2025";
import type { RoomContent } from "../type/RoomContent";
import type { MessageConnectionInstance } from "@mjt-engine/message/dist/createConnection";
/** think stairsteps, this is rooms _above_ the current room in the timeline */
export declare const findPriorTimelineSiblings: <M extends DataConnectionMap>(con: MessageConnectionInstance<M>) => (roomId?: string) => Promise<RoomContent[]>;
