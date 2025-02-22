export type DaimonConnectionMap = {
  "daimon.import": {
    request: {
      options?: Partial<{}>;
      body: { png: ArrayBuffer };
    };
    response: { id: string };
    headers: {
      url?: string;
      authToken?: string;
    };
  };
};
