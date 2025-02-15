import type { RoomNode } from "./type/RoomMessageNode";
export type RoomMessageEvent = Record<string, {
    request: {
        options?: Partial<{}>;
        body: RoomNode;
    };
    response: undefined;
    headers: {
        url?: string;
        authToken?: string;
    };
}>;
