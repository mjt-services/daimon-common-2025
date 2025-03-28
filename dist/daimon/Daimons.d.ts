export declare const Daimons: {
    findDaimonsByRoom: <M extends import("@mjt-services/data-common-2025").DataConnectionMap>(con: import("@mjt-engine/message/dist/createConnection").MessageConnectionInstance<M>) => (roomIdOrRoom?: string | import("..").Room) => Promise<import("..").Daimon[]>;
    daimonToSystemPrompt: (daimon: import("..").BaseDaimon, vars?: Record<string, string>) => string;
    idToDaimon: <M extends import("@mjt-services/data-common-2025").DataConnectionMap>(con: import("@mjt-engine/message/dist/createConnection").MessageConnectionInstance<M>) => (id: string) => Promise<import("..").Daimon | undefined>;
    renderTemplate: (template?: string, vars?: Record<string, string>) => string | undefined;
};
