import { type DataConnectionMap } from "@mjt-services/data-common-2025";
import type { Content } from "../type/Content";
import type { MessageConnectionInstance } from "@mjt-engine/message/dist/createConnection";
export declare const findRoomContext: <M extends DataConnectionMap>(con: MessageConnectionInstance<M>) => (roomId: string) => Promise<Content | undefined>;
