import { Datas, type DataConnectionMap } from "@mjt-services/data-common-2025";
import { DAIMON_OBJECT_STORE, type Daimon } from "../type/Daimon";
import type { MessageConnectionInstance } from "@mjt-engine/message/dist/createConnection";

export const idToDaimon =
  <M extends DataConnectionMap>(con: MessageConnectionInstance<M>) =>
  async (id: string): Promise<Daimon | undefined> => {
    return Datas.get(con)<Daimon>({
      objectStore: DAIMON_OBJECT_STORE,
      key: id,
    });
  };
