export type AllPossibleUndefined<T extends Record<string, any>> = {
  [Key in keyof T]?: T[Key];
};
