import { SearchParams } from "types/filters";
import {
  NewTodoInterface,
  TodoInterface,
  TodosFetchInterface,
} from "types/todos";
import fetchData from "utils/fetchData";
import { apiUrl } from "./const";

export const getTodos = async (searchParams?: SearchParams) => {
  const { response } = await fetchData<TodosFetchInterface>({
    url: apiUrl.todosWithParams(searchParams),
    cache: "no-cache",
  });
  return response;
};

export const getTodo = async (id: string) => {
  const { response } = await fetchData<TodoInterface>({
    url: apiUrl.todo(id),
    cache: "no-cache",
  });
  return response;
};

export const createTodo = (body: NewTodoInterface) =>
  fetchData<TodoInterface>({
    url: apiUrl.todos,
    method: "POST",
    body: { ...body, completed: false },
  });

export const updateTodo = (id: string, body: NewTodoInterface) =>
  fetchData<TodoInterface>({
    url: apiUrl.todo(id),
    method: "PUT",
    body,
  });

export const deleteTodo = (id: string) =>
  fetchData({
    url: apiUrl.todo(id),
    method: "DELETE",
  });
