import { isDefined, isEmpty } from "@mjt-engine/object";
import { Datas, isEntity, } from "@mjt-services/data-common-2025";
import { roomContentsToPrompt } from "./roomContentsToPrompt";
import { roomsToRoomContents } from "./roomsToRoomContents";
import { findRoomChildren } from "./findRoomChildren";
import { findPriorTimelineSiblings } from "./findPriorTimelineSiblings";
import { findRoomContext } from "./findRoomContext";
import { Daimons } from "./Daimons";
import { MESSAGE_CONTENT_TYPE } from "./MESSAGE_CONTENT_TYPE";
import { renderTemplate } from "./renderTemplate";
export const askDaimon = (con) => async (props) => {
    const { roomId, query, assistantId, userId, signal, onUpdate, responseTextMapper = (text) => text, maxTokens = 2048, assistant, } = props;
    // const con = await getConnection();
    const daimons = isDefined(roomId)
        ? (await Daimons.findDaimonsByRoom(con)(roomId)).toSorted((a, b) => {
            if (a.chara.data.name && b.chara.data.name) {
                return a.chara.data.name.localeCompare(b.chara.data.name);
            }
            return 0;
        })
        : [];
    const userDaimon = isDefined(userId)
        ? (await Datas.get(con)({ key: userId }))
            ? daimons.find((d) => d.chara.data.extensions?.isUser)
            : undefined
        : undefined;
    const assistantDaimon = isDefined(assistantId)
        ? (await Datas.get(con)({
            key: assistantId,
        }))
        : assistant;
    console.log("assistant DAIMON", assistantDaimon);
    const roomChildren = isDefined(roomId)
        ? await findRoomChildren(con)(roomId)
        : [];
    const roomContents = await roomsToRoomContents(con)(roomChildren);
    const priorTimelineSiblinRoomContents = await findPriorTimelineSiblings(con)(roomId);
    const assistantName = assistantDaimon?.chara?.data.name ?? "assistant";
    const userName = userDaimon?.chara.data.name ?? "user";
    let scenario = userDaimon?.chara.data.scenario;
    if (isEmpty(scenario)) {
        scenario = assistantDaimon?.chara.data.scenario;
    }
    const vars = {
        user: userName,
        char: assistantName,
    };
    const daimonSystemPrompt = isDefined(assistantDaimon)
        ? Daimons.daimonToSystemPrompt(assistantDaimon, vars)
        : undefined;
    const userSystemPrompt = isDefined(userDaimon)
        ? Daimons.daimonToSystemPrompt(userDaimon, vars)
        : undefined;
    const roomContentsPrompt = await roomContentsToPrompt(con)([
        ...priorTimelineSiblinRoomContents,
        ...roomContents,
    ]);
    const roomContextPrompt = isDefined(roomId)
        ? (await findRoomContext(con)(roomId))?.value
        : undefined;
    const fullSystemPrompt = [
        roomContextPrompt,
        "# Scenerio",
        renderTemplate(scenario, vars),
        `# ${assistantName} Description`,
        daimonSystemPrompt,
        `# ${userName} Description`,
        userSystemPrompt,
        "# Conversation History",
        roomContentsPrompt,
    ]
        .filter(isDefined)
        .join("\n");
    console.log(fullSystemPrompt);
    const model = assistantDaimon?.chara?.data?.extensions?.llm;
    let finished = false;
    const createdAt = Date.now();
    const creatorId = isEntity(assistantDaimon)
        ? assistantDaimon?.id
        : undefined;
    return new Promise(async (resolve, reject) => {
        try {
            await con.requestMany({
                subject: "textgen.generate",
                signal,
                options: {
                    timeoutMs: 1000 * 60 * 5,
                },
                onResponse: async (response) => {
                    if (finished) {
                        return;
                    }
                    const text = responseTextMapper(response.text ?? "");
                    const content = {
                        creatorId,
                        value: text,
                        createdAt,
                        updatedAt: Date.now(),
                        finalized: response.done,
                        contentType: MESSAGE_CONTENT_TYPE,
                    };
                    await onUpdate?.(content);
                    if (response.done) {
                        finished = true;
                        resolve(content);
                        return;
                    }
                },
                request: {
                    body: {
                        model,
                        stream: true,
                        max_tokens: maxTokens,
                        messages: [
                            {
                                role: "system",
                                content: fullSystemPrompt,
                            },
                            {
                                role: "user",
                                content: query,
                            },
                        ],
                    },
                },
            });
        }
        catch (error) {
            reject(error);
        }
    });
};
//# sourceMappingURL=askDaimon.js.map