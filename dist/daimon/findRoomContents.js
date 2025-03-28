import { roomsToRoomContents } from "./roomsToRoomContents";
import { findRoomChildren } from "./findRoomChildren";
export const findRoomContents = (con) => async (roomId) => {
    const roomChildren = await findRoomChildren(con)(roomId);
    return roomsToRoomContents(con)(roomChildren);
};
//# sourceMappingURL=findRoomContents.js.map