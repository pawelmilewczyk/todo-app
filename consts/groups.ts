import { TodoGroupInterface } from "types/todos";

export enum StaticGroups {
  Today = "today",
  Scheduled = "scheduled",
}

export const initGroups: TodoGroupInterface[] = [
  {
    name: StaticGroups.Today,
    id: "1",
  },
  {
    name: StaticGroups.Scheduled,
    id: "2",
  },
];
