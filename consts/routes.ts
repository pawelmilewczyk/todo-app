import { SearchParams } from "types/filters";
import { getRouteWithSearchParams } from "utils/searchParams";

export const navRoutes = {
  home: "/",
  groups: "/groups",
  todos: "/todos",
};

export const routes = {
  ...navRoutes,
  newGroup: `${navRoutes.groups}/new-group`,
  newTodo: `${navRoutes.todos}/new-todo`,
};

export const getSingleGroupRoute = (groupName: string) =>
  `${routes.groups}/${groupName}`;

export const getSingleTodoRoute = (id: string) => `${routes.todos}/${id}`;

export const getTodosRoute = (searchParams?: SearchParams) =>
  getRouteWithSearchParams(routes.todos, searchParams);
