import type { MessageConnectionInstance } from "@mjt-engine/message/dist/createConnection";
import {
  Datas,
  LINK_OBJECT_STORE,
  type DataConnectionMap,
} from "@mjt-services/data-common-2025";
import { DAIMON_OBJECT_STORE, type Daimon } from "../type/Daimon";

export const findDaimonsByRoom =
  <M extends DataConnectionMap>(con: MessageConnectionInstance<M>) =>
  async (roomId: string): Promise<Daimon[]> => {
    const ids = (await Datas.search(con)({
      from: LINK_OBJECT_STORE,
      query: `values(@)[?roomId == '${roomId}'].daimonId | []`,
    })) as string[];

    const query = `values(@)[?contains(['${ids.join("','")}'], id)]`;

    const daimons = (await Datas.search(con)({
      from: DAIMON_OBJECT_STORE,
      query,
    })) as Daimon[];
    return daimons;
  };


