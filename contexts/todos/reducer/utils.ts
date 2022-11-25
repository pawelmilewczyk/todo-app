import { TodoInterface } from "types/todos";

export const sortTodos = (a: TodoInterface, b: TodoInterface) => {
  if (a.completed === b.completed) return a.title > b.title ? 1 : -1;
  return a.completed > b.completed ? 1 : -1;

  // TODO
  // completed -> task deadline -> title
};
