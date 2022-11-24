import { TodoAction } from "contexts/todos/reducer/types";
import { TodosContext } from "contexts/todos/todosContext";
import { useContext, useMemo } from "react";
import { SetState } from "types/setState";
import { FilterGroup, FilterName, TodoFilter } from "types/todos";
import { updateFilters } from "./todos.utils";

function TodosFilters() {
  const {
    state: { filters },
    dispatch,
  } = useContext(TodosContext);

  const onClick = (group: FilterGroup, name: FilterName) => () => {
    dispatch({ type: TodoAction.FilterTodos, payload: { group, name } });
  };

  return (
    <div className="flex gap-x-2 justify-center text-xs">
      {filters
        .filter(({ group }) => group === "date")
        .map(({ name, active, group }) => (
          <button
            aria-label={name}
            key={name}
            className={`px-2 py-1 rounded-lg text-white cursor-pointer select-none uppercase transition-colors ${
              active ? "text-zinc-800 bg-white" : "hover:bg-zinc-500"
            }`}
            onClick={onClick(group, name)}
          >
            {name}
          </button>
        ))}
      {filters
        .filter(({ group }) => group === "completion")
        .map(({ name, active, group }) => (
          <button
            aria-label={name}
            key={name}
            className={`px-2 py-1 rounded-lg text-white cursor-pointer select-none uppercase transition-colors ${
              active ? "text-zinc-800 bg-white" : "hover:bg-zinc-500"
            }`}
            onClick={onClick(group, name)}
          >
            {name}
          </button>
        ))}
    </div>
  );
}

export default TodosFilters;
