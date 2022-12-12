"use client";

import { usePathname, useRouter } from "next/navigation";
import { Filters, TimeFilters, StatusFilters } from "types/filters";
import FilterButton from "./FilterButton";

function TodosFilters(filters: Filters) {
  const { push } = useRouter();
  const pathname = usePathname();

  const onTimeFilterClick = (value: TimeFilters) => {
    push(`${pathname}?time=${value}`);
  };

  const onStatusFilterClick = (value: StatusFilters) => {
    push(`${pathname}?status=${value}`);
  };

  return (
    <div className="flex gap-x-2 justify-center text-xs text-white">
      {Object.values(TimeFilters).map((value) => (
        <FilterButton
          key={value}
          label={value}
          active={value === filters.time}
          onClick={onTimeFilterClick}
        />
      ))}
      |
      {Object.values(StatusFilters).map((value) => (
        <FilterButton
          key={value}
          label={value}
          active={value === filters.status}
          onClick={onStatusFilterClick}
        />
      ))}
    </div>
  );
}

export default TodosFilters;
