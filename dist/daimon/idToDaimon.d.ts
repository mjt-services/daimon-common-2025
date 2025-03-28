import { type DataConnectionMap } from "@mjt-services/data-common-2025";
import { type Daimon } from "../type/Daimon";
import type { MessageConnectionInstance } from "@mjt-engine/message/dist/createConnection";
export declare const idToDaimon: <M extends DataConnectionMap>(con: MessageConnectionInstance<M>) => (id: string) => Promise<Daimon | undefined>;
