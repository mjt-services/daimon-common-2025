import type { MessageConnectionInstance } from "@mjt-engine/message/dist/createConnection";
import { isDefined, isUndefined } from "@mjt-engine/object";
import { Datas, type DataConnectionMap } from "@mjt-services/data-common-2025";
import type { Content } from "../../type/Content";
import type { Room } from "../../type/Room";

export const updateRootRoomSummary =
  <M extends DataConnectionMap>(con: MessageConnectionInstance<M>) =>
  async ({ roomId, summary }: { roomId: string; summary?: unknown }) => {
    const room = (await Datas.get(con)({
      key: roomId,
    })) as Room;

    if (isUndefined(room)) {
      return;
    }
    if (isDefined(room.parentId)) {
      return;
    }

    const currentRootRoomContent = (await Datas.get(con)({
      key: room.contentId,
    })) as Content;
    if (isUndefined(currentRootRoomContent)) {
      console.log("currentRootRoomContent is undefined");
      return;
    }

    await Datas.put(con)({
      value: {
        ...currentRootRoomContent,
        value: summary,
      } satisfies Partial<Content>,
    });
  };
