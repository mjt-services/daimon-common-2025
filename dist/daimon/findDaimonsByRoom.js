import { Datas, LINK_OBJECT_STORE, } from "@mjt-services/data-common-2025";
import { DAIMON_OBJECT_STORE } from "../type/Daimon";
import { isDefined, isUndefined } from "@mjt-engine/object";
export const findDaimonsByRoom = (con) => async (roomIdOrRoom) => {
    if (isUndefined(roomIdOrRoom)) {
        return [];
    }
    const roomId = typeof roomIdOrRoom === "string" ? roomIdOrRoom : roomIdOrRoom.id;
    const room = typeof roomIdOrRoom === "string"
        ? (await Datas.get(con)({
            key: roomId,
        }))
        : roomIdOrRoom;
    if (isUndefined(room)) {
        return [];
    }
    const ids = (await Datas.search(con)({
        from: LINK_OBJECT_STORE,
        query: `values(@)[?roomId == '${roomId}'].daimonId | []`,
    }));
    const query = `values(@)[?contains(['${ids.join("','")}'], id)]`;
    const daimons = (await Datas.search(con)({
        from: DAIMON_OBJECT_STORE,
        query,
    }));
    // get all daimons in the parent room
    if (isDefined(room.parentId)) {
        const parentDaimons = await findDaimonsByRoom(con)(room.parentId);
        for (const parentDaimon of parentDaimons) {
            if (!daimons.some((d) => d.id === parentDaimon.id)) {
                daimons.push(parentDaimon);
            }
        }
    }
    return daimons;
};
//# sourceMappingURL=findDaimonsByRoom.js.map