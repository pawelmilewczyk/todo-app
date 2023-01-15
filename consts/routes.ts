import { SearchParams } from "types/filters";
import { getRouteWithSearchParams } from "utils/searchParams";

export const protectedRoutes = {
  groups: "/groups",
  todos: "/todos",
};

export const routes = {
  ...protectedRoutes,
  home: "/",
  newGroup: `/groups/new-group`,
  newTodo: `/todos/new-todo`,
  login: "/login",
  register: "/auth/register",
};

export const getSingleGroupRoute = (groupName: string) =>
  `${routes.groups}/${groupName}`;

export const getSingleTodoRoute = (id: string) => `${routes.todos}/${id}`;

export const getTodosRoute = (searchParams?: SearchParams) =>
  getRouteWithSearchParams(routes.todos, searchParams);
