import { NewGroupInterface, TodoGroupInterface } from "types/todos";

export enum StaticGroups {
  Today = "today",
  Scheduled = "scheduled",
}

export const staticGroups: TodoGroupInterface[] = [
  {
    id: "1",
    name: StaticGroups.Today,
  },
  {
    id: "2",
    name: StaticGroups.Scheduled,
  },
];

export const groupInputs: Array<keyof NewGroupInterface> = ["name"];
