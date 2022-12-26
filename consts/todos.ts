import { NewTodoInterface } from "types/todos";

export const todoInputs: Array<keyof NewTodoInterface> = [
  "title",
  "group",
  "date",
  "time",
];
