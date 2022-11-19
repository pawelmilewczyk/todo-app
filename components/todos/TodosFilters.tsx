import { SetState } from "types/SetState";
import {
  FilterName,
  FilterGroup,
  TodoFilter,
  TodoInterface,
} from "types/todos";

interface Props {
  setTodos: SetState<TodoInterface[]>;
  setFilters: SetState<TodoFilter[]>;
  filters: TodoFilter[];
}

function TodosFilters({ filters, setFilters, setTodos }: Props) {
  const onClick = (filter: FilterName, group: FilterGroup) => () => {
    setFilters((prev) =>
      prev.map((groups) =>
        groups.group === group
          ? {
              group,
              filters: groups.filters.map(({ name, active }) =>
                filter === name
                  ? { name, active: !active }
                  : { name, active: false }
              ),
            }
          : groups
      )
    );
  };

  return (
    <div className="flex gap-x-2 justify-center uppercase text-xs">
      {filters.map(({ group, filters }, index) => (
        <div
          key={group}
          className={`flex items-center gap-x-2 ${
            !!index && `before:content-['|']`
          }`}
        >
          {filters.map(({ name, active }) => (
            <span
              key={name}
              className={`px-2 py-1 rounded-lg text-white cursor-pointer select-none ${
                active && "text-zinc-800 bg-white"
              }`}
              onClick={onClick(name, group)}
            >
              {name}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default TodosFilters;
