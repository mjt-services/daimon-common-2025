import { isDefined } from "@mjt-engine/object";
import { getAllDaimons } from "./getAllDaimons";
import { MESSAGE_CONTENT_TYPE } from "./MESSAGE_CONTENT_TYPE";
import { sortByCreatedAt } from "./sortByCreatedAt";
import { SUMMARY_CONTENT_TYPE } from "./summary/SUMMARY_CONTENT_TYPE";
export const roomContentsToPrompt = (con) => async (roomContents, { chunkSize = 7 } = {}) => {
    const allDaimons = await getAllDaimons(con)();
    const summaryPrompt = roomContents
        .filter(({ content }) => isDefined(content) && content.contentType === SUMMARY_CONTENT_TYPE)
        .toSorted(sortByCreatedAt)
        .map(({ content }) => {
        const { value } = content;
        return value;
    })
        .join("\n");
    const messagesPrompt = roomContents
        .filter(({ content }) => isDefined(content) && content.contentType === MESSAGE_CONTENT_TYPE)
        .toSorted(sortByCreatedAt)
        .slice(-chunkSize)
        .map(({ content }) => {
        const { value, creatorId } = content;
        const daimon = allDaimons.find((daimon) => daimon.id === creatorId);
        const speakerName = daimon?.chara.data.name ?? "user";
        return `${speakerName}: ${value}`;
    })
        .join("\n");
    return [summaryPrompt, messagesPrompt].join("\n\n");
};
//# sourceMappingURL=roomContentsToPrompt.js.map