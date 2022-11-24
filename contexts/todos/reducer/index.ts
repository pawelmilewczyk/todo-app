import { updateFilters } from "components/todos/todos.utils";
import { initFilters } from "consts/filters";
import { GetAction } from "types/reducerAction";
import { StateInterface, TodoAction, TodoPayload } from "./types";

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
      return { ...state, todos: payload };
    case TodoAction.AddTodo:
      return { ...state, todos: [...state.todos, payload] };
    case TodoAction.DeleteTodo:
      return {
        ...state,
        todos: state.todos.filter(({ id }) => id !== payload.id),
      };

    // FILTERS
    case TodoAction.FilterTodos:
      return {
        ...state,
        filters: updateFilters(state.filters, payload.group, payload.name),
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
