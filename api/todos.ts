import { getSingleTodoRoute, getTodosRoute, routes } from "consts/routes";
import { SearchParams } from "types/filters";
import {
  NewTodoInterface,
  TodoInterface,
  TodosFetchInterface,
} from "types/todos";
import fetchData from "utils/fetchData";

export const getTodos = async (searchParams: SearchParams) => {
  const { response } = await fetchData<TodosFetchInterface>({
    url: getTodosRoute(searchParams),
    cache: "no-cache",
  });
  return response;
};

export const getTodo = async (id: string) => {
  const { response } = await fetchData<TodoInterface>({
    url: getSingleTodoRoute(id),
    cache: "no-cache",
  });
  return response;
};

export const createTodo = (body: NewTodoInterface) =>
  fetchData<TodoInterface>({
    url: routes.todos,
    method: "POST",
    body: { ...body, completed: false },
  });

export const updateTodo = (id: string, body: NewTodoInterface) =>
  fetchData<TodoInterface>({
    url: getSingleTodoRoute(id),
    method: "PUT",
    body,
  });

export const deleteTodo = (id: string) =>
  fetchData({
    url: getSingleTodoRoute(id),
    method: "DELETE",
  });
