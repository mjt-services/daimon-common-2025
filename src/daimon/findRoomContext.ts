import { isUndefined } from "@mjt-engine/object";
import { Datas, type DataConnectionMap } from "@mjt-services/data-common-2025";
import type { Content } from "../type/Content";
import type { Room } from "../type/Room";
import type { MessageConnectionInstance } from "@mjt-engine/message/dist/createConnection";

export const findRoomContext =
  <M extends DataConnectionMap>(con: MessageConnectionInstance<M>) =>
  async (roomId: string) => {
    const room = (await Datas.get(con)({
      key: roomId,
    })) as Room;
    if (isUndefined(room.contextId)) {
      return;
    }
    return (await Datas.get(con)({
      key: room.contextId,
    })) as Content;
  };
