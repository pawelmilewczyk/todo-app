import { staticGroups } from "consts/groups";
import { routes } from "consts/routes";

export const getNewTaskRoute = (pathname: string | null) => {
  const [group] = pathname?.match(/(?<=todos\/)(.*)(?=(\/list))/) ?? [];

  const isGroup = group
    ? staticGroups.every(({ name }) => name !== group)
    : false;

  return isGroup ? `${routes.newTask}?group=${group}` : routes.newTask;
};
