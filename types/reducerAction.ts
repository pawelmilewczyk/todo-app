type ActionMap<M extends Record<string, any>> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export type GetAction<Payload extends Record<string, any>> =
  ActionMap<Payload>[keyof ActionMap<Payload>];
