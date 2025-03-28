import { MESSAGE_CONTENT_TYPE } from "./MESSAGE_CONTENT_TYPE";
export const lastRoomMessageContent = (roomContents) => {
    return roomContents.reduce((acc, roomContent) => {
        if (roomContent.content &&
            roomContent.content?.contentType == MESSAGE_CONTENT_TYPE &&
            acc.content &&
            roomContent.content.createdAt > acc.content.createdAt) {
            return roomContent;
        }
        return acc;
    });
};
//# sourceMappingURL=lastRoomContent.js.map