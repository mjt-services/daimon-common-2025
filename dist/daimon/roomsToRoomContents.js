import { Datas } from "@mjt-services/data-common-2025";
import { CONTENT_OBJECT_STORE } from "../type/Content";
export const roomsToRoomContents = (con) => (rooms) => {
    return Promise.all(rooms.map(async (room) => {
        const content = await Datas.get(con)({
            objectStore: CONTENT_OBJECT_STORE,
            key: room.contentId,
        });
        return { room, content };
    }));
};
//# sourceMappingURL=roomsToRoomContents.js.map