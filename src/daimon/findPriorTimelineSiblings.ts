import { isUndefined, isDefined } from "@mjt-engine/object";
import { Datas, type DataConnectionMap } from "@mjt-services/data-common-2025";
import { findRoomChildren } from "./findRoomChildren";
import type { RoomContent } from "../type/RoomContent";
import { roomsToRoomContents } from "./roomsToRoomContents";
import type { MessageConnectionInstance } from "@mjt-engine/message/dist/createConnection";
import { ROOM_OBJECT_STORE, type Room } from "../type/Room";

/** think stairsteps, this is rooms _above_ the current room in the timeline */

export const findPriorTimelineSiblings =
  <M extends DataConnectionMap>(con: MessageConnectionInstance<M>) =>
  async (roomId?: string): Promise<RoomContent[]> => {
    if (isUndefined(roomId)) {
      return [];
    }

    const room = (await Datas.get(con)<Room>({
      objectStore: ROOM_OBJECT_STORE,
      key: roomId,
    })) as Room;
    const { parentId } = room ?? {};
    if (isUndefined(parentId)) {
      return [];
    }
    const currentRoomContent = (await roomsToRoomContents(con)([room]))[0];
    if (
      isUndefined(currentRoomContent) ||
      isUndefined(currentRoomContent.content)
    ) {
      return [];
    }
    const siblings = await findRoomChildren(con)(parentId);

    const siblingRoomContents = await roomsToRoomContents(con)(siblings);
    const priors = siblingRoomContents.filter(
      (sibling) =>
        (sibling?.content?.createdAt ?? 0) <
        (currentRoomContent.content?.createdAt ?? 0)
    );
    const parentParentId = currentRoomContent.room.parentId;
    const parentParentRoomContents = isDefined(parentParentId)
      ? await findPriorTimelineSiblings(con)(parentParentId)
      : [];

    return [...priors, currentRoomContent, ...parentParentRoomContents];
  };
