import { FilterGroup, FilterName, TodoFilter } from "types/todos";

export const updateFilters = (
  filters: TodoFilter[],
  group: FilterGroup,
  name: FilterName
) =>
  filters.map((filter) =>
    filter.group === group
      ? {
          ...filter,
          active: filter.name === name ? !filter.active : false,
        }
      : filter
  );
