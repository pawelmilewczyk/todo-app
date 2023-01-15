import { SearchParams } from "types/filters";
import { getUrlWithSearchParams } from "utils/searchParams";

export const apiUrl = {
  groups: "groups",
  group: (name: string) => `groups/${name}`,
  todos: "todos",
  todosWithParams: (searchParams?: SearchParams) =>
    getUrlWithSearchParams("todos", searchParams),
  todo: (id: string) => `todos/${id}`,
};
