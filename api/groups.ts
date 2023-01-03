import { getSingleGroupRoute, routes } from "consts/routes";
import { NewGroupInterface, TodoGroupInterface } from "types/todos";
import fetchData from "utils/fetchData";

export const getGroups = async () => {
  const { response } = await fetchData<TodoGroupInterface[]>({
    url: routes.groups,
    cache: "no-cache",
  });
  return response;
};

export const getGroup = async (name: string) => {
  const { response } = await fetchData<TodoGroupInterface>({
    url: getSingleGroupRoute(name),
    cache: "no-cache",
  });
  return response;
};

export const createGroup = (body: NewGroupInterface) =>
  fetchData({
    url: routes.groups,
    method: "POST",
    body,
  });

export const updateGroup = (name: string, body: NewGroupInterface) =>
  fetchData({
    url: getSingleGroupRoute(name),
    method: "PUT",
    body,
  });

export const deleteGroup = (name: string) =>
  fetchData({
    url: getSingleGroupRoute(name),
    method: "DELETE",
  });
