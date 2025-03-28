export declare const Daimons: {
    findDaimonsByRoom: <M extends import("@mjt-services/data-common-2025").DataConnectionMap>(con: import("@mjt-engine/message/dist/createConnection").MessageConnectionInstance<M>) => (roomId: string) => Promise<import("..").Daimon[]>;
};
