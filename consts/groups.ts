import { TodoGroupInterface } from "types/todos";
import { defaultFilters } from "./filters";

export enum StaticGroups {
  Today = "today",
  Scheduled = "scheduled",
}

export const staticGroups: TodoGroupInterface[] = [
  {
    id: "1",
    name: StaticGroups.Today,
    filters: { ...defaultFilters, today: true },
  },
  {
    id: "2",
    name: StaticGroups.Scheduled,
    filters: { ...defaultFilters, scheduled: true },
  },
];
