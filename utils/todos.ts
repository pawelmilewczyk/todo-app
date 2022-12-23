import { StaticGroups } from "consts/groups";
import { getTime, isToday } from "date-fns";
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

    if (group === StaticGroups.Scheduled) {
      isValid = isValid && !!todo.date;
    } else if (group === StaticGroups.Today) {
      isValid = isValid && !!todo.date && isToday(new Date(todo.date));
    } else {
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
    if (a.date === b.date) {
      if (a.time === b.time) {
        return a.title > b.title ? 1 : -1;
      }
      if (a.completed && b.completed) {
        return compareStringAsDates("desc", [a.time, b.time]);
      }
      return compareStringAsDates("asc", [a.time, b.time]);
    }

    if (a.completed && b.completed) {
      return compareStringAsDates("desc", [a.date, b.date]);
    }
    return compareStringAsDates("asc", [a.date, b.date]);
  }
  return a.completed > b.completed ? 1 : -1;
};
