import { isUndefined } from "@mjt-engine/object";
export const sortByCreatedAt = (a, b) => {
    if (isUndefined(a.content) || isUndefined(b.content)) {
        return 0;
    }
    return a.content.createdAt - b.content.createdAt;
};
//# sourceMappingURL=sortByCreatedAt.js.map