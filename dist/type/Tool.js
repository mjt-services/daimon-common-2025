export const RssTool = {
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
//# sourceMappingURL=Tool.js.map