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

export const getGroupedFilters = (filters: TodoFilter[]) => {
  const grouped: Array<{
    group: FilterGroup;
    filters: Omit<TodoFilter, "group">[];
  }> = [];
  filters.forEach(({ active, group, name }) => {
    const index = grouped.findIndex((filters) => filters.group === group);
    if (index >= 0) {
      grouped[index].filters.push({ name, active });
    } else {
      grouped.push({ group, filters: [{ name, active }] });
    }
  });

  return grouped;
};
