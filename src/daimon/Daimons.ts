import { askDaimon } from "./askDaimon";
import { daimonToSystemPrompt } from "./daimonToSystemPrompt";
import { findDaimonsByRoom } from "./findDaimonsByRoom";
import { idToDaimon } from "./idToDaimon";
import { renderTemplate } from "./renderTemplate";
import { addRoomSummary } from "./summary/addRoomSummary";

export const Daimons = {
  findDaimonsByRoom,
  daimonToSystemPrompt,
  idToDaimon,
  renderTemplate,
  askDaimon,
  addRoomSummary,
};
