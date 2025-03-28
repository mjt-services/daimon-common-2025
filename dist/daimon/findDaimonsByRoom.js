import { Datas, LINK_OBJECT_STORE, } from "@mjt-services/data-common-2025";
import { DAIMON_OBJECT_STORE } from "../type/Daimon";
export const findDaimonsByRoom = (con) => async (roomId) => {
    const ids = (await Datas.search(con)({
        from: LINK_OBJECT_STORE,
        query: `values(@)[?roomId == '${roomId}'].daimonId | []`,
    }));
    const query = `values(@)[?contains(['${ids.join("','")}'], id)]`;
    const daimons = (await Datas.search(con)({
        from: DAIMON_OBJECT_STORE,
        query,
    }));
    return daimons;
};
//# sourceMappingURL=findDaimonsByRoom.js.map