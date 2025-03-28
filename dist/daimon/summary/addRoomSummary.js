import { isDefined } from "@mjt-engine/object";
import { Datas } from "@mjt-services/data-common-2025";
import { Textgens, } from "@mjt-services/textgen-common-2025";
import { CONTENT_OBJECT_STORE } from "../../type/Content";
import { ROOM_OBJECT_STORE } from "../../type/Room";
import { askDaimon } from "../askDaimon";
import { findRoomContents } from "../findRoomContents";
import { MESSAGE_CONTENT_TYPE } from "../MESSAGE_CONTENT_TYPE";
import { SUMMARY_CONTENT_TYPE } from "./SUMMARY_CONTENT_TYPE";
import { updateRootRoomSummary } from "./updateRootRoomSummary";
export const addRoomSummary = (con) => async ({ roomId, query, model, chunkSize = 7, overlapSize = 2, }) => {
    const roomContents = await findRoomContents(con)(roomId);
    // const { chunkSize, overlapSize } = getSummaryChunkSize();
    const shortSummaryQuery = "Summarize the conversation in 3 to 5 words, no quotes, no punctuation. This is for the name of conversation so that the user can easily find it later.";
    if (roomContents.length === 2) {
        const shortSummary = await askDaimon(con)({
            query: shortSummaryQuery,
            roomId,
            assistant: {
                chara: {
                    data: {
                        name: "Summarizer",
                        description: "An expert summarization service",
                    },
                    spec: "chara_card_v2",
                    spec_version: "",
                },
            },
        });
        if (isDefined(shortSummary)) {
            await updateRootRoomSummary(con)({
                roomId,
                summary: shortSummary.value,
            });
        }
    }
    const idxOfLastSummary = roomContents.findLastIndex((c) => c.content?.contentType === SUMMARY_CONTENT_TYPE);
    if (idxOfLastSummary >= roomContents.length - chunkSize) {
        return;
    }
    const sumarizableContents = roomContents.filter((c) => c.content?.contentType == MESSAGE_CONTENT_TYPE);
    const chunkContents = sumarizableContents.slice(Math.max(0, sumarizableContents.length - chunkSize - overlapSize), sumarizableContents.length);
    const summary = await Textgens.ask(con)({
        model,
        systemMessage: chunkContents.map((c) => c.content?.value).join("\n"),
        userMessage: query,
    });
    const contentId = await Datas.putEntity(con)(CONTENT_OBJECT_STORE)({
        value: summary,
        contentType: SUMMARY_CONTENT_TYPE,
        finalized: true,
    });
    await Datas.putEntity(con)(ROOM_OBJECT_STORE)({
        contentId,
        parentId: roomId,
    });
    const shortSummary = await Textgens.ask(con)({
        userMessage: shortSummaryQuery,
        systemMessage: summary,
    });
    if (isDefined(shortSummary)) {
        await updateRootRoomSummary(con)({
            roomId,
            summary: shortSummary,
        });
    }
};
//# sourceMappingURL=addRoomSummary.js.map