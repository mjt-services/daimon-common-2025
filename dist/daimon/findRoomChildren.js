import { Datas } from "@mjt-services/data-common-2025";
import { ROOM_OBJECT_STORE } from "../type/Room";
export const findRoomChildren = (con) => async (roomId) => {
    return Datas.search(con)({
        from: ROOM_OBJECT_STORE,
        query: `values(@)[?parentId=='${roomId}']`,
    });
};
//# sourceMappingURL=findRoomChildren.js.map