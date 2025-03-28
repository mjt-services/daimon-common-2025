import { roomsToRoomContents } from "./roomsToRoomContents";
import { findRoomChildren } from "./findRoomChildren";
import type { DataConnectionMap } from "@mjt-services/data-common-2025";
import type { MessageConnectionInstance } from "@mjt-engine/message/dist/createConnection";

export const findRoomContents =
  <M extends DataConnectionMap>(con: MessageConnectionInstance<M>) =>
  async (roomId: string) => {
    const roomChildren = await findRoomChildren(con)(roomId);
    return roomsToRoomContents(con)(roomChildren);
  };
