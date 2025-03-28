import { Datas } from "@mjt-services/data-common-2025";
import { DAIMON_OBJECT_STORE } from "../type/Daimon";
export const getAllDaimons = (con) => async () => {
    return Datas.search(con)({
        from: DAIMON_OBJECT_STORE,
        query: "values(@)",
    });
};
//# sourceMappingURL=getAllDaimons.js.map