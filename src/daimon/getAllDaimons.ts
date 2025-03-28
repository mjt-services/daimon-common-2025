import type { MessageConnectionInstance } from "@mjt-engine/message/dist/createConnection";
import { Datas, type DataConnectionMap } from "@mjt-services/data-common-2025";
import { DAIMON_OBJECT_STORE, type Daimon } from "../type/Daimon";

export const getAllDaimons =
  <M extends DataConnectionMap>(con: MessageConnectionInstance<M>) =>
  async () => {
    return Datas.search(con)({
      from: DAIMON_OBJECT_STORE,
      query: "values(@)",
    }) as Promise<Daimon[]>;
  };
