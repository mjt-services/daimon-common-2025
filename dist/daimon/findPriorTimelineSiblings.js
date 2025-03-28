import { isUndefined, isDefined } from "@mjt-engine/object";
import { Datas } from "@mjt-services/data-common-2025";
import { findRoomChildren } from "./findRoomChildren";
import { roomsToRoomContents } from "./roomsToRoomContents";
import { ROOM_OBJECT_STORE } from "../type/Room";
/** think stairsteps, this is rooms _above_ the current room in the timeline */
export const findPriorTimelineSiblings = (con) => async (roomId) => {
    if (isUndefined(roomId)) {
        return [];
    }
    const room = (await Datas.get(con)({
        objectStore: ROOM_OBJECT_STORE,
        key: roomId,
    }));
    const { parentId } = room ?? {};
    if (isUndefined(parentId)) {
        return [];
    }
    const currentRoomContent = (await roomsToRoomContents(con)([room]))[0];
    if (isUndefined(currentRoomContent) ||
        isUndefined(currentRoomContent.content)) {
        return [];
    }
    const siblings = await findRoomChildren(con)(parentId);
    const siblingRoomContents = await roomsToRoomContents(con)(siblings);
    const priors = siblingRoomContents.filter((sibling) => (sibling?.content?.createdAt ?? 0) <
        (currentRoomContent.content?.createdAt ?? 0));
    const parentParentId = currentRoomContent.room.parentId;
    const parentParentRoomContents = isDefined(parentParentId)
        ? await findPriorTimelineSiblings(con)(parentParentId)
        : [];
    return [...priors, currentRoomContent, ...parentParentRoomContents];
};
//# sourceMappingURL=findPriorTimelineSiblings.js.map