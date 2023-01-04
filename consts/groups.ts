import { NewGroupInterface, TodoGroupInterface } from "types/todos";

export enum StaticGroups {
  Today = "today",
  Scheduled = "scheduled",
}

export const todayGroup: TodoGroupInterface = {
  id: "1",
  name: StaticGroups.Today,
  icon: "calendarDay",
};

export const scheduledGroup: TodoGroupInterface = {
  id: "2",
  name: StaticGroups.Scheduled,
  icon: "clock",
};

export const staticGroups: TodoGroupInterface[] = [todayGroup, scheduledGroup];

export const groupInputs: Array<keyof NewGroupInterface> = ["name", "icon"];

export const defaultGroup: NewGroupInterface = {
  name: "",
  icon: "list",
};
