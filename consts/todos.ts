import { NewTodoInterface } from "types/todos";
import { defaultGroup } from "./groups";

export const todoInputs: Array<keyof NewTodoInterface> = [
  "name",
  "group",
  "date",
  "time",
];

export const defaultTodo: NewTodoInterface = {
  name: "",
  group: { ...defaultGroup, id: "" },
};
