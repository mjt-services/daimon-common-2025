import { type DataConnectionMap } from "@mjt-services/data-common-2025";
import type { MessageConnectionInstance } from "@mjt-engine/message/dist/createConnection";
import type { TextgenConnectionMap } from "@mjt-services/textgen-common-2025";
import type { DaimonConnectionMap } from "../DiamonConnectionMap";
import type { BaseDaimon } from "../type/Daimon";
import type { Content } from "../type/Content";
export declare const askDaimon: <M extends DataConnectionMap & TextgenConnectionMap>(con: MessageConnectionInstance<M>) => (props: DaimonConnectionMap["daimon.ask"]["request"]["body"] & {
    signal?: AbortSignal;
    assistant?: BaseDaimon;
    onUpdate?: (content: Partial<Content>) => void | Promise<void>;
    responseTextMapper?: (text: string) => string;
}) => Promise<Partial<Content>>;
