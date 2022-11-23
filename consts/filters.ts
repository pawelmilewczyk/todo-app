import { TodoFilter } from "types/todos";

export const initFilters: TodoFilter[] = [
  {
    group: "date",
    filters: [
      { name: "today", active: true },
      { name: "week", active: false },
    ],
  },
  {
    group: "completion",
    filters: [
      { name: "completed", active: false },
      { name: "all", active: false },
    ],
  },
];
