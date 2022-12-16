import { staticGroups } from "consts/groups";
import { isToday, getTime, getMilliseconds } from "date-fns";
import { NextApiRequest } from "next";
import { TodoInterface } from "types/todos";
import { searchParamsToFilters } from "./searchParams";

export const filterTodos =
  (query: NextApiRequest["query"]) => (todo: TodoInterface) => {
    const { group: queryGroup, ...searchParams } = query;
    const group = queryGroup?.toString().toLowerCase();
    const filters = searchParamsToFilters(searchParams);

    let isValid = true;
    if (filters?.completed !== undefined) {
      isValid = isValid && todo.completed === filters.completed;
    }
    if (filters?.scheduled !== undefined) {
      isValid = isValid && !!todo.deadline;
    }
    if (filters?.today) {
      isValid = isValid && !!todo.deadline && isToday(new Date(todo.deadline));
    }
    if (!staticGroups.some(({ name }) => name === group)) {
      isValid = isValid && group === todo.group.toLowerCase();
    }
    return isValid;
  };

const compareStringAsDates = (
  direction: "desc" | "asc",
  strings: [string | undefined, string | undefined]
) => {
  const [t1, t2] = strings.map((string) => getTime(new Date(string ?? 0)));
  const comparison = direction === "asc" ? t1 > t2 : t1 < t2;
  return comparison ? 1 : -1;
};

export const sortTodos = (a: TodoInterface, b: TodoInterface) => {
  if (a.completed === b.completed) {
    if (a.deadline === b.deadline) {
      return a.title > b.title ? 1 : -1;
    }

    if (a.completed && b.completed) {
      return compareStringAsDates("desc", [a.deadline, b.deadline]);
    }
    return compareStringAsDates("asc", [a.deadline, b.deadline]);
  }
  return a.completed > b.completed ? 1 : -1;

  // TODO
  // completed -> task deadline -> title
};
