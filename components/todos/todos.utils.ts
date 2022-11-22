import { FilterGroup, FilterName, TodoFilter } from "types/todos";

export const updateFilters =
  (group: FilterGroup, filter: FilterName) => (filters: TodoFilter[]) =>
    filters.map((groups) =>
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
    );
