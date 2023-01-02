"use client";

import Select from "components/ui/Select";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEventHandler } from "react";
import { Filters, StatusFilters } from "types/filters";
import { TodoGroupInterface } from "types/todos";
import {
  filtersToSearchParams,
  getRouteWithSearchParams,
} from "utils/searchParams";
import FilterButton from "./FilterButton";

interface Props {
  filters: Filters;
  groups: TodoGroupInterface[];
}

function TodosFilters({ filters: initFilters, groups }: Props) {
  const group = groups.find(({ name }) => name === initFilters.group);

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
      push(getRouteWithSearchParams(pathname, filtersToSearchParams(filters)));
    }
  };

  const onGroupChange: ChangeEventHandler<HTMLSelectElement> = ({
    target: { value },
  }) => {
    if (pathname) {
      if (value) {
        const { name } = JSON.parse(value) as TodoGroupInterface;
        const filters = { ...initFilters, group: name };
        push(
          getRouteWithSearchParams(pathname, filtersToSearchParams(filters))
        );
      } else {
        const { group, ...filters } = initFilters;
        push(
          getRouteWithSearchParams(pathname, filtersToSearchParams(filters))
        );
      }
    }
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <div className="min-w-[10rem]">
        <Select
          options={groups}
          name="group"
          defaultValue={group ? JSON.stringify(group) : ""}
          placeholder="All groups"
          onChange={onGroupChange}
        />
      </div>
      <div className="flex flex-wrap gap-2 justify-center text-xs text-white">
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
    </div>
  );
}

export default TodosFilters;
