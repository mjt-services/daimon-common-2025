export declare const Daimons: {
    findDaimonsByRoom: <M extends import("@mjt-services/data-common-2025").DataConnectionMap>(con: import("@mjt-engine/message/dist/createConnection").MessageConnectionInstance<M>) => (roomIdOrRoom?: string | import("..").Room) => Promise<import("..").Daimon[]>;
    daimonToSystemPrompt: (daimon: import("..").BaseDaimon, vars?: Record<string, string>) => string;
    idToDaimon: <M extends import("@mjt-services/data-common-2025").DataConnectionMap>(con: import("@mjt-engine/message/dist/createConnection").MessageConnectionInstance<M>) => (id: string) => Promise<import("..").Daimon | undefined>;
    renderTemplate: (template?: string, vars?: Record<string, string>) => string | undefined;
    askDaimon: <M extends import("@mjt-services/data-common-2025").DataConnectionMap & import("@mjt-services/textgen-common-2025").TextgenConnectionMap>(con: import("@mjt-engine/message/dist/createConnection").MessageConnectionInstance<M>) => (props: import("..").DaimonConnectionMap["daimon.ask"]["request"]["body"] & {
        signal?: AbortSignal;
        assistant?: import("..").BaseDaimon;
        onUpdate?: (content: Partial<import("..").Content>) => void | Promise<void>;
        responseTextMapper?: (text: string) => string;
    }) => Promise<Partial<import("..").Content>>;
    addRoomSummary: <M extends import("@mjt-services/data-common-2025").DataConnectionMap & import("@mjt-services/textgen-common-2025").TextgenConnectionMap>(con: import("@mjt-engine/message/dist/createConnection").MessageConnectionInstance<M>) => ({ roomId, query, model, chunkSize, overlapSize, }: {
        roomId: string;
        query: string;
        model?: string;
        chunkSize?: number;
        overlapSize?: number;
    }) => Promise<void>;
};
