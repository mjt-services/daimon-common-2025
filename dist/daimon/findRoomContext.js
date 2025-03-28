import { isUndefined } from "@mjt-engine/object";
import { Datas } from "@mjt-services/data-common-2025";
export const findRoomContext = (con) => async (roomId) => {
    const room = (await Datas.get(con)({
        key: roomId,
    }));
    if (isUndefined(room.contextId)) {
        return;
    }
    return (await Datas.get(con)({
        key: room.contextId,
    }));
};
//# sourceMappingURL=findRoomContext.js.map