import { NewTodoInterface } from "types/todos";

export const todoInputs: Array<keyof NewTodoInterface> = [
  "name",
  "group",
  "date",
  "time",
];
