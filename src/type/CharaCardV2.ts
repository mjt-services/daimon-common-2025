export type CharaCardV2<T extends Record<string, unknown> = {}> = {
  spec: "chara_card_v2";
  spec_version: string; // e.g., "2.0"
  data: CharacterData<T>;
};

export type CharacterData<T extends Record<string, unknown> = {}> = {
  name: string;
  description: string;
  personality: string;
  scenario: string;
  first_mes: string;
  mes_example: string;
  creator_notes?: string;
  system_prompt?: string;
  post_history_instructions?: string;
  alternate_greetings?: string[];
  character_book?: CharacterBook;
  tags?: string[];
  creator?: string;
  character_version?: string;
  extensions?: Record<string, unknown> & T; // Allows for future extensibility
};

export type CharacterBook = {
  entries: CharacterBookEntry[];
};

export type CharacterBookEntry = {
  key: string; // The identifier for the entry
  value: string; // The text or definition for the entry
  context?: string; // Additional context for the entry
};
