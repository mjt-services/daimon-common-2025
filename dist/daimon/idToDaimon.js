import { Datas } from "@mjt-services/data-common-2025";
import { DAIMON_OBJECT_STORE } from "../type/Daimon";
export const idToDaimon = (con) => async (id) => {
    return Datas.get(con)({
        objectStore: DAIMON_OBJECT_STORE,
        key: id,
    });
};
//# sourceMappingURL=idToDaimon.js.map