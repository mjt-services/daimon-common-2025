import type { Room } from "./type/Room";
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
