import type { MessageConnectionInstance } from "@mjt-engine/message/dist/createConnection";
import { type DataConnectionMap } from "@mjt-services/data-common-2025";
import { type Daimon } from "../type/Daimon";
export declare const findDaimonsByRoom: <M extends DataConnectionMap>(con: MessageConnectionInstance<M>) => (roomId: string) => Promise<Daimon[]>;
