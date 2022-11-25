import { FilterName, TodoFilter, TodoInterface } from "types/todos";

const getFiltersObject = (filters: TodoFilter[]) =>
  filters.reduce(
    (prev, { name, active }) => ({ ...prev, [name]: active }),
    {}
  ) as Record<FilterName, boolean>;

export const filterTodos = (filters: TodoFilter[]) => (todo: TodoInterface) => {
  const { all, completed } = getFiltersObject(filters);
  let filter = true;

  if (completed) {
    filter = todo.completed;
  } else if (!all) {
    filter = !todo.completed;
  }
  // TODO add date filters

  return filter;
};

export const checkTodos = (
  todos: TodoInterface[],
  filters: TodoFilter[],
  loading: boolean
) => {
  const { completed, all } = getFiltersObject(filters);

  const allCompleted =
    !loading &&
    !completed &&
    !all &&
    todos.length &&
    todos.every(({ completed }) => completed);

  const emptyList = !loading && !todos.length;

  return { allCompleted, emptyList };
};
