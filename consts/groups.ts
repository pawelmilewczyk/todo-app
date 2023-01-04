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
    icon: "today",
  },
  {
    id: "2",
    name: StaticGroups.Scheduled,
    color: "orange",
    icon: "scheduled",
  },
];

export const groupInputs: Array<keyof NewGroupInterface> = [
  "name",
  "color",
  "icon",
];

export const defaultGroup: NewGroupInterface = {
  name: "",
  color: "white",
  icon: "list",
};
