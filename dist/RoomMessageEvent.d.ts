import type { Room } from "./type/RoomMessageNode";
export type RoomMessageEvent = Record<string, {
    request: {
        options?: Partial<{}>;
        body: Room;
    };
    response: undefined;
    headers: {
        url?: string;
        authToken?: string;
    };
}>;
