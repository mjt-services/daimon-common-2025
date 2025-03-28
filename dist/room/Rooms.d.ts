export declare const Rooms: {
    addRoomSummary: <M extends import("@mjt-services/data-common-2025").DataConnectionMap & import("@mjt-services/textgen-common-2025").TextgenConnectionMap>(con: import("@mjt-engine/message/dist/createConnection").MessageConnectionInstance<M>) => ({ roomId, query, model, chunkSize, overlapSize, }: {
        roomId: string;
        query: string;
        model?: string;
        chunkSize?: number;
        overlapSize?: number;
    }) => Promise<void>;
    lastRoomMessageContent: (roomContents: import("..").RoomContent[]) => import("..").RoomContent | undefined;
    findRoomChildren: <M extends import("@mjt-services/data-common-2025").DataConnectionMap>(con: import("@mjt-engine/message/dist/createConnection").MessageConnectionInstance<M>) => (roomId: string) => Promise<import("..").Room[]>;
    findRoomContents: <M extends import("@mjt-services/data-common-2025").DataConnectionMap>(con: import("@mjt-engine/message/dist/createConnection").MessageConnectionInstance<M>) => (roomId: string) => Promise<import("..").RoomContent[]>;
};
