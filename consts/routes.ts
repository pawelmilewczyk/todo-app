import { SearchParams } from "types/filters";

export const navRoutes = {
  home: "/",
  todos: "/todos",
};

export const routes = {
  ...navRoutes,
  newGroup: "/todos/new-group",
  newTask: "/todos/new-task",
};

export const getGroupRoute = (group: string) => `${routes.todos}/${group}`;

export const getEditGroupRoute = (group: string, id: string) =>
  `${getGroupRoute(group)}/${id}`;

export const getTodosListRoute = (group: string, filters?: SearchParams) => {
  const url = `${getGroupRoute(group)}/list`;
  return routeWithFilters(url, filters);
};

export const routeWithFilters = (url: string, filters?: SearchParams) => {
  if (filters) {
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      params.append(key, value);
    });
    return `${url}?${params.toString()}`;
  }
  return url;
};
