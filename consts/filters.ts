import { Filters } from "types/filters";
import { TodoFilter } from "types/todos";

export const initFilters: TodoFilter[] = [
  { group: "date", name: "today", active: true },
  { group: "date", name: "week", active: false },
  { group: "completion", name: "completed", active: false },
  { group: "completion", name: "all", active: false },
];

export const defaultFilters: Filters = {
  completed: false,
};
