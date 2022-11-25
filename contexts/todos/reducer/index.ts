import { initFilters } from "consts/filters";
import { GetAction } from "types/reducerAction";
import { StateInterface, TodoAction, TodoPayload } from "./types";
import { sortTodos } from "./utils";

export const initialState: StateInterface = {
  todos: [],
  groups: [],
  filters: initFilters,
};

export const todoReducer = (
  state: StateInterface,
  { type, payload }: GetAction<TodoPayload>
): StateInterface => {
  switch (type) {
    // TODOS
    case TodoAction.SetTodos:
      return { ...state, todos: payload.sort(sortTodos) };
    case TodoAction.AddTodo:
      return { ...state, todos: [...state.todos, payload] };
    case TodoAction.UpdateTodo:
      return {
        ...state,
        todos: state.todos
          .map((todo) =>
            todo.id === payload.id ? { ...todo, ...payload.data } : todo
          )
          .filter(({ group }) => group === payload.data.group ?? true),
      };
    case TodoAction.DeleteTodo:
      return {
        ...state,
        todos: state.todos.filter(({ id }) => id !== payload.id),
      };

    // FILTERS
    case TodoAction.FilterTodos:
      return {
        ...state,
        filters: payload,
        todos: state.todos.sort(sortTodos),
      };

    // GROUPS
    case TodoAction.SetGroups:
      return { ...state, groups: payload };
    case TodoAction.AddGroup:
      return { ...state, groups: [...state.groups, payload] };
    case TodoAction.DeleteGroup:
      return {
        ...state,
        groups: state.groups.filter(({ name }) => name !== payload.name),
        todos: state.todos.filter(({ group }) => group !== payload.name),
      };
    default:
      return state;
  }
};
