export interface TodoGroupInterface {
  id: string;
  name: string;
}

export interface TodoInterface {
  id: string;
  title: string;
  deadline?: string;
  group: string;
  completed: boolean;
}

export type NewTodoInterface = Omit<TodoInterface, "id" | "completed">;

export interface TodosFetchInterface {
  list: TodoInterface[];
  isEmpty: boolean;
}
