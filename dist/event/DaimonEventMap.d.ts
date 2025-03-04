import type { EventMap, PartialSubject } from "@mjt-engine/message";
export type StopSubject = PartialSubject<"stop">;
export type AlarmSubject = PartialSubject<"alarm">;
export type DiamonEventMap = EventMap<StopSubject, string> | EventMap<AlarmSubject, string>;
