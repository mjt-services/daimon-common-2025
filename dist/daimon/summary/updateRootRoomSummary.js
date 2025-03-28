import { isDefined, isUndefined } from "@mjt-engine/object";
import { Datas } from "@mjt-services/data-common-2025";
export const updateRootRoomSummary = (con) => async ({ roomId, summary }) => {
    const room = (await Datas.get(con)({
        key: roomId,
    }));
    if (isUndefined(room)) {
        return;
    }
    if (isDefined(room.parentId)) {
        return;
    }
    const currentRootRoomContent = (await Datas.get(con)({
        key: room.contentId,
    }));
    if (isUndefined(currentRootRoomContent)) {
        console.log("currentRootRoomContent is undefined");
        return;
    }
    await Datas.put(con)({
        value: {
            ...currentRootRoomContent,
            value: summary,
        },
    });
};
//# sourceMappingURL=updateRootRoomSummary.js.map