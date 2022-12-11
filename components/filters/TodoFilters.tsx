"use client";

import { TodoAction } from "contexts/todos/reducer/types";
import { TodosContext } from "contexts/todos/todosContext";
import { useContext } from "react";
import { FilterGroup, FilterName } from "types/todos";
import { getGroupedFilters, updateFilters } from "./filters.utils";

function TodosFilters() {
  const {
    state: { filters },
    dispatch,
  } = useContext(TodosContext);

  const onClick = (group: FilterGroup, name: FilterName) => () => {
    const payload = updateFilters(filters, group, name);
    dispatch({ type: TodoAction.FilterTodos, payload });
  };

  return (
    <div className="flex gap-x-2 justify-center text-xs text-white">
      {getGroupedFilters(filters).map(({ group, filters }, index) => (
        <div
          key={group}
          className={`flex items-center gap-x-2 ${
            !!index && `before:content-['|']`
          }`}
        >
          {filters.map(({ name, active }) => (
            <button
              key={name}
              aria-label={name}
              className={`px-2 py-1 rounded-md cursor-pointer select-none uppercase transition-colors outline-none  focus-visible:outline-zinc-300 ${
                active ? "text-zinc-800 bg-white" : "hover:bg-zinc-600"
              }`}
              onClick={onClick(group, name)}
            >
              {name}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default TodosFilters;
