import {
  TodoInterface,
  TodoGroupInterface,
  TodoFilter,
  FilterName,
  FilterGroup,
} from "types/todos";

export interface StateInterface {
  todos: TodoInterface[];
  groups: TodoGroupInterface[];
  filters: TodoFilter[];
}

export enum TodoAction {
  SetTodos = "SET_TODOS",
  AddTodo = "CREATE_TODO",
  DeleteTodo = "DELETE_TODO",
  FilterTodos = "FILTER_TODOS",
  SetGroups = "SET_GROUPS",
  AddGroup = "CREATE_GROUP",
  DeleteGroup = "DELETE_GROUP",
}

export interface TodoPayload {
  [TodoAction.SetTodos]: TodoInterface[];
  [TodoAction.AddTodo]: TodoInterface;
  [TodoAction.DeleteTodo]: {
    id: number;
  };
  [TodoAction.FilterTodos]: {
    group: FilterGroup;
    name: FilterName;
  };
  [TodoAction.SetGroups]: TodoGroupInterface[];
  [TodoAction.AddGroup]: TodoGroupInterface;
  [TodoAction.DeleteGroup]: {
    name: string;
  };
}