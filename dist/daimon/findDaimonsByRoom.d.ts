import type { MessageConnectionInstance } from "@mjt-engine/message/dist/createConnection";
import { type DataConnectionMap } from "@mjt-services/data-common-2025";
import { type Daimon } from "../type/Daimon";
import type { Room } from "../type/Room";
export declare const findDaimonsByRoom: <M extends DataConnectionMap>(con: MessageConnectionInstance<M>) => (roomIdOrRoom?: string | Room) => Promise<Daimon[]>;
