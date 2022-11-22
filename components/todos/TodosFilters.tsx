import { SetState } from "types/setState";
import {
  FilterName,
  FilterGroup,
  TodoFilter,
  TodoInterface,
} from "types/todos";
import { updateFilters } from "./todos.utils";

interface Props {
  setFilters: SetState<TodoFilter[]>;
  filters: TodoFilter[];
}

function TodosFilters({ filters, setFilters }: Props) {
  const onClick = (filter: FilterName, group: FilterGroup) => () => {
    setFilters(updateFilters(group, filter));
  };

  return (
    <div className="flex gap-x-2 justify-center text-xs">
      {filters.map(({ group, filters }, index) => (
        <div
          key={group}
          className={`flex items-center gap-x-2 ${
            !!index && `before:content-['|']`
          }`}
        >
          {filters.map(({ name, active }) => (
            <button
              aria-label={name}
              key={name}
              className={`px-2 py-1 rounded-lg text-white cursor-pointer select-none uppercase ${
                active ? "text-zinc-800 bg-white" : ""
              }`}
              onClick={onClick(name, group)}
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
