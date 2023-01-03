import { NewGroupInterface, TodoGroupInterface } from "types/todos";

export enum StaticGroups {
  Today = "today",
  Scheduled = "scheduled",
}

export const staticGroups: TodoGroupInterface[] = [
  {
    id: "1",
    name: StaticGroups.Today,
    color: "red",
  },
  {
    id: "2",
    name: StaticGroups.Scheduled,
    color: "orange",
  },
];

export const groupInputs: Array<keyof NewGroupInterface> = ["name", "color"];

export const defaultGroup: NewGroupInterface = {
  name: "",
  color: "white",
};
