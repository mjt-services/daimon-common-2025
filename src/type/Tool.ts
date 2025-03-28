export type ToolValue = {
  name: string;
  description: string;
  type: "number" | "string" | "boolean" | "object";
};

export type Tool = {
  name: string;
  description: string;
  params: ToolValue[];
  result?: ToolValue;
};

export const RssTool: Tool = {
  name: "rss",
  description: "Fetches RSS feed",
  params: [
    {
      name: "url",
      description: "URL of the RSS feed",
      type: "string",
    },
  ],
  result: {
    name: "feed",
    description: "RSS feed",
    type: "object",
    // title: "string",
    // description: "string",
    // items: [
    //   {
    //     title: "string",
    //     description: "string",
    //     link: "string", // URL
    //     pubDate: "string", // Date
    //   },
    // ],
  },
};

export type ToolRequest = {
  describe?: null;
  call?: {
    params?: Record<string, string>;
  };
};

export type ToolResponse = {
  describe: Tool;
  call: {
    result: unknown;
  };
};
