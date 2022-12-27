export interface TodoGroupInterface {
  id: string;
  name: string;
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
