import type {
  RoomContent,
  RoomNode,
} from "./type/RoomMessageNode";

export type RoomConnectionMap = {
  "room.addMessage": {
    request: {
      options?: Partial<{}>;
      body: { roomId: string; parentId?: string } & RoomContent;
    };
    response: { success: boolean };
    headers: {
      url?: string;
      authToken?: string;
    };
  };
  "room.updateMessageNode": {
    request: {
      options?: Partial<{}>;
      body: RoomNode;
    };
    response: { success: boolean };
    headers: {
      url?: string;
      authToken?: string;
    };
  };
  "room.addDaimon": {
    request: {
      options?: Partial<{}>;
      body: { roomId: string; daimonId: string };
    };
    response: { success: boolean };
    headers: {
      url?: string;
      authToken?: string;
    };
  };
  "room.removeDaimon": {
    request: {
      options?: Partial<{}>;
      body: { roomId: string; daimonId: string };
    };
    response: { success: boolean };
    headers: {
      url?: string;
      authToken?: string;
    };
  };
  "room.search": {
    request: {
      options?: Partial<{}>;
      body: {
        query: string;
      };
    };
    response: RoomNode[];
    headers: {
      url?: string;
      authToken?: string;
    };
  };
};
