import { Datas, type DataConnectionMap } from "@mjt-services/data-common-2025";
import type { RoomContent } from "../type/RoomContent";
import { type Content, CONTENT_OBJECT_STORE } from "../type/Content";
import type { Room } from "../type/Room";
import type { MessageConnectionInstance } from "@mjt-engine/message/dist/createConnection";

export const roomsToRoomContents =
  <M extends DataConnectionMap>(con: MessageConnectionInstance<M>) =>
  (rooms: Room[]): Promise<RoomContent[]> => {
    return Promise.all(
      rooms.map(async (room) => {
        const content = await Datas.get(con)<Content>({
          objectStore: CONTENT_OBJECT_STORE,
          key: room.contentId,
        });
        return { room, content };
      })
    );
  };
