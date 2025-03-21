export type ToolParam = {
  name: string;
  description: string;
  type: "number" | "string" | "boolean";
};

export type Tool = {
  name: string;
  description: string;
  params: ToolParam[];
  result?: unknown;
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
    title: "string",
    description: "string",
    items: [
      {
        title: "string",
        description: "string",
        link: "string", // URL
        pubDate: "string", // Date
      },
    ],
  },
};
