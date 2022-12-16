"use client";

import { routeWithFilters } from "consts/routes";
import { usePathname, useRouter } from "next/navigation";
import { Filters, StatusFilters } from "types/filters";
import { filtersToSearchParams } from "utils/searchParams";
import FilterButton from "./FilterButton";

function TodosFilters(initFilters: Filters) {
  const { push } = useRouter();
  const pathname = usePathname();

  const onFilter = (value: StatusFilters) => {
    if (pathname) {
      let filters = initFilters;
      switch (value) {
        case StatusFilters.Completed:
          filters = { ...initFilters, completed: !initFilters.completed };
          break;
        case StatusFilters.All:
          if (initFilters.completed === undefined) {
            filters = { ...initFilters, completed: false };
          } else {
            const { completed, ...filtersWithoutCompleted } = initFilters;
            filters = filtersWithoutCompleted;
          }
          break;
        default:
          filters = { ...initFilters, completed: false };
      }
      push(routeWithFilters(pathname, filtersToSearchParams(filters)));
    }
  };

  return (
    <div className="flex gap-x-2 justify-center text-xs text-white">
      <FilterButton
        label={StatusFilters.Completed}
        active={initFilters.completed === true}
        onClick={onFilter}
      />
      <FilterButton
        label={StatusFilters.All}
        active={initFilters.completed === undefined}
        onClick={onFilter}
      />
    </div>
  );
}

export default TodosFilters;
