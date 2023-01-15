import { NewGroupInterface, TodoGroupInterface } from "types/todos";
import fetchData from "utils/fetchData";
import { apiUrl } from "./const";

export const getGroups = async () => {
  const { response } = await fetchData<TodoGroupInterface[]>({
    url: apiUrl.groups,
    cache: "no-cache",
  });
  return response;
};

export const getGroup = async (name: string) => {
  const { response } = await fetchData<TodoGroupInterface>({
    url: apiUrl.group(name),
    cache: "no-cache",
  });
  return response;
};

export const createGroup = (body: NewGroupInterface) =>
  fetchData({
    url: apiUrl.groups,
    method: "POST",
    body,
  });

export const updateGroup = (name: string, body: NewGroupInterface) =>
  fetchData({
    url: apiUrl.group(name),
    method: "PUT",
    body,
  });

export const deleteGroup = (name: string) =>
  fetchData({
    url: apiUrl.group(name),
    method: "DELETE",
  });
