import { Datas, type DataConnectionMap } from "@mjt-services/data-common-2025";
import { ROOM_OBJECT_STORE, type Room } from "../type/Room";
import type { MessageConnectionInstance } from "@mjt-engine/message/dist/createConnection";

export const findRoomChildren =
  <M extends DataConnectionMap>(con: MessageConnectionInstance<M>) =>
  async (roomId: string) => {
    return Datas.search(con)({
      from: ROOM_OBJECT_STORE,
      query: `values(@)[?parentId=='${roomId}']`,
    }) as Promise<Room[]>;
  };
