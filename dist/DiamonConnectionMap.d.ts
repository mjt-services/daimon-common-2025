import type { Daimon } from "./type/Daimon";
import type { DaimonCharaCard } from "./type/DaimonCharaCard";
export type DaimonConnectionMap = {
    "daimon.create": {
        request: {
            options?: Partial<{}>;
            body: DaimonCharaCard;
        };
        response: {
            id: string;
        };
        headers: {
            url?: string;
            authToken?: string;
        };
    };
    "daimon.update": {
        request: {
            options?: Partial<{}>;
            body: Daimon;
        };
        response: {
            success: boolean;
        };
        headers: {
            url?: string;
            authToken?: string;
        };
    };
    "daimon.import": {
        request: {
            options?: Partial<{}>;
            body: {
                png: ArrayBuffer;
            };
        };
        response: {
            id: string;
        };
        headers: {
            url?: string;
            authToken?: string;
        };
    };
    "daimon.get": {
        request: {
            options?: Partial<{}>;
            body: {
                id: string;
            };
        };
        response: Daimon | undefined;
        headers: {
            url?: string;
            authToken?: string;
        };
    };
    "daimon.remove": {
        request: {
            options?: Partial<{}>;
            body: {
                id: string;
            };
        };
        response: {
            success: boolean;
        };
        headers: {
            url?: string;
            authToken?: string;
        };
    };
    "daimon.list": {
        request: {
            options?: Partial<{}>;
            body: {
                query?: string;
            };
        };
        response: Daimon[];
        headers: {
            url?: string;
            authToken?: string;
        };
    };
};
