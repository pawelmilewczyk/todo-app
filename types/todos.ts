import { groupIcons, staticGroupIcons } from "consts/groupIcons";
import { groupColors } from "consts/style";

export interface TodoGroupInterface {
  id: string;
  name: string;
  color: keyof typeof groupColors;
  icon: keyof typeof groupIcons | keyof typeof staticGroupIcons;
}

export type NewGroupInterface = Omit<TodoGroupInterface, "id">;

export interface TodoInterface {
  id: string;
  name: string;
  group: TodoGroupInterface;
  date?: string;
  time?: string;
  completed: boolean;
}

export type NewTodoInterface = Omit<TodoInterface, "id" | "completed">;

export interface TodosFetchInterface {
  list: TodoInterface[];
  isEmpty: boolean;
}
